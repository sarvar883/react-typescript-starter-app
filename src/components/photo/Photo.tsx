import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../utils/useTypedSelector';
import { useActions } from '../../utils/useActions';

// import interfaces
import { IPhoto } from '../../interfaces/photo';

import CardLoader from '../Loaders/CardLoader';
import LazyLoad from 'react-lazyload';


const Photo: FC = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { getPhotos } = useActions();
  const photoReducer = useTypedSelector((state) => state.photo);

  useEffect(() => {
    // check if we already have albums in redux
    if (photoReducer.photos && photoReducer.photos.length > 0) {
      setPhotos(photoReducer.photos);
    } else {
      // send request to API
      getPhotos();
    }
  }, []);

  useEffect(() => {
    setPhotos(photoReducer.photos);
  }, [photoReducer]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Photos Page</h1>
          <Link className="btn btn-success" to="/">To Start Page</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {photoReducer.error && photoReducer.error.message && (
            <div className="alert alert-danger">
              <p>{photoReducer.error.message}</p>
              <p>Please, check your internet connection and try refreshing the page</p>
            </div>
          )}
        </div>
      </div>

      <div className="row">
        {photoReducer.loading ? (
          <CardLoader />
        ) : (
          <>
            {photos.map((photo, index) => (
              <div className="col-lg-4 col-md-6 mt-3" key={index}>
                <div className="card">
                  <div className="card-header">
                    <i className="bi bi-image"></i> Title: {photo.title}
                  </div>

                  <div className="card-body">
                    {/* LazyLoad images for better performance */}
                    <LazyLoad offset={800}>
                      <img
                        src={photo.url}
                        className="img-fluid"
                        alt="Image"
                      />
                    </LazyLoad>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Photo;