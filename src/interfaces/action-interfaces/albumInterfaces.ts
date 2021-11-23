import { ActionType } from '../../utils/actionTypes';
import { IAlbum } from '../album';
import { IError } from '../reduxError';

interface GetAlbumsLoadingAction {
  type: ActionType.GET_ALBUMS_LOADING;
}

interface GetAlbumsSuccessAction {
  type: ActionType.GET_ALBUMS_SUCCESS;
  payload: IAlbum[];
}

interface GetAlbumsErrorAction {
  type: ActionType.GET_ALBUMS_ERROR;
  payload: IError;
}

export type AlbumAction =
  | GetAlbumsLoadingAction
  | GetAlbumsSuccessAction
  | GetAlbumsErrorAction;