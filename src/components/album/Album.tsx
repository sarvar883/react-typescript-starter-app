import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useTypedSelector } from '../../utils/useTypedSelector';
import { useActions } from '../../utils/useActions';

// import interfaces
import { IAlbum } from '../../interfaces/album';

import CardLoader from '../Loaders/CardLoader';


const Album: FC = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([]);

  const { getAlbums } = useActions();
  const albumReducer = useTypedSelector((state) => state.album);

  useEffect(() => {
    // check if we already have albums in redux
    if (albumReducer.albums && albumReducer.albums.length > 0) {
      setAlbums(albumReducer.albums);
    } else {
      // send request to API
      getAlbums();
    }
  }, []);

  useEffect(() => {
    setAlbums(albumReducer.albums);
  }, [albumReducer]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Albums Page</h1>
          <Link className="btn btn-success" to="/">To Start Page</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {albumReducer.error && albumReducer.error.message && (
            <div className="alert alert-danger">
              <p>{albumReducer.error.message}</p>
              <p>Please, check your internet connection and try refreshing the page</p>
            </div>
          )}
        </div>
      </div>

      <div className="row mt-2">
        {albumReducer.loading ? (
          <CardLoader />
        ) : (
          <>
            {albums.map((album, index) => (
              <div className="col-lg-4 col-md-6 mt-3" key={index}>
                <div className="card">
                  <div className="card-header">
                    <i className="bi bi-person-circle"></i> Album of user: {album.userId}
                  </div>

                  <div className="card-body">
                    <i className="bi bi-pen"></i> Title: {album.title}
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Album;