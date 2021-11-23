import { ActionType } from '../../utils/actionTypes';

import { AlbumAction } from '../../interfaces/action-interfaces/albumInterfaces';
import { IAlbum } from '../../interfaces/album';
import { IError } from '../../interfaces/reduxError';


interface AlbumsState {
  loading: boolean;
  error: IError | null;
  albums: IAlbum[];
}

const initialState = {
  loading: false,
  error: null,
  albums: [],
};

const reducer = (
  state: AlbumsState = initialState,
  action: AlbumAction
): AlbumsState => {
  switch (action.type) {
    case ActionType.GET_ALBUMS_LOADING:
      return { loading: true, error: null, albums: [] };

    case ActionType.GET_ALBUMS_SUCCESS:
      return { loading: false, error: null, albums: action.payload };

    case ActionType.GET_ALBUMS_ERROR:
      return { loading: false, error: action.payload, albums: [] };


    default: return state;
  }
};

export default reducer;