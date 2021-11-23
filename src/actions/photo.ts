import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../utils/actionTypes';

import { PhotoAction } from '../interfaces/action-interfaces/photoInterfaces';
import { IError } from '../interfaces/reduxError';
import { URL } from '../utils/url';


export const getPhotos = () => async (dispatch: Dispatch<PhotoAction>) => {
  dispatch({ type: ActionType.GET_PHOTOS_LOADING, });

  try {
    const { data } = await axios.get(`${URL}/photos`);

    dispatch({
      type: ActionType.GET_PHOTOS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    console.log('getAlbums ERROR: ', error);
    dispatch({
      type: ActionType.GET_PHOTOS_ERROR,
      payload: error as IError,
    });
  }
};