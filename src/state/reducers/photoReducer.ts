import { ActionType } from '../../utils/actionTypes';

import { PhotoAction } from '../../interfaces/action-interfaces/photoInterfaces';
import { IPhoto } from '../../interfaces/photo';
import { IError } from '../../interfaces/reduxError';


interface PhotoState {
  loading: boolean;
  error: IError | null;
  photos: IPhoto[];
}

const initialState = {
  loading: false,
  error: null,
  photos: [],
};

const reducer = (
  state: PhotoState = initialState,
  action: PhotoAction
): PhotoState => {
  switch (action.type) {
    case ActionType.GET_PHOTOS_LOADING:
      return { loading: true, error: null, photos: [] };

    case ActionType.GET_PHOTOS_SUCCESS:
      return { loading: false, error: null, photos: action.payload };

    case ActionType.GET_PHOTOS_ERROR:
      return { loading: false, error: action.payload, photos: [] };


    default: return state;
  }
};

export default reducer;