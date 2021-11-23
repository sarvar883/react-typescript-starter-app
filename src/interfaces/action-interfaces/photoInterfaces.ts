import { ActionType } from '../../utils/actionTypes';
import { IPhoto } from '../photo';
import { IError } from '../reduxError';

interface GetPhotosLoadingAction {
  type: ActionType.GET_PHOTOS_LOADING;
}

interface GetPhotosSuccessAction {
  type: ActionType.GET_PHOTOS_SUCCESS;
  payload: IPhoto[];
}

interface GetPhotosErrorAction {
  type: ActionType.GET_PHOTOS_ERROR;
  payload: IError;
}

export type PhotoAction =
  | GetPhotosLoadingAction
  | GetPhotosSuccessAction
  | GetPhotosErrorAction;