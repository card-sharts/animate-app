import { 
  PHOTO_SELECTED,
  ESSAYS_LOADED
} from './reducers';

import { getAllEssays } from '../../services/api';

export const setModalPhoto = (photo) => {
  return {
    type: PHOTO_SELECTED,
    payload: photo
  };
};

export const loadEssays = () => {
  return {
    type: ESSAYS_LOADED,
    payload: getAllEssays()
  };
};