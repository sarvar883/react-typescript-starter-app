import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../utils/actionTypes';

import { AlbumAction } from '../interfaces/action-interfaces/albumInterfaces';
import { IError } from '../interfaces/reduxError';
import { URL } from '../utils/url';


export const getAlbums = () => async (dispatch: Dispatch<AlbumAction>) => {
  dispatch({ type: ActionType.GET_ALBUMS_LOADING, });

  try {
    const { data } = await axios.get(`${URL}/albums`);

    dispatch({
      type: ActionType.GET_ALBUMS_SUCCESS,
      payload: data,
    });

  } catch (error) {
    console.log('getAlbums ERROR: ', error);
    dispatch({
      type: ActionType.GET_ALBUMS_ERROR,
      payload: error as IError,
    });
  }
};