import { 
  PHOTO_SELECTED,
  ESSAYS_LOADED,
  ESSAY_SELECTED
} from './reducers';

import { getAllEssays, getOneEssay } from '../../services/api';

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

export const loadEssay = id => {
  return {
    type: ESSAY_SELECTED,
    payload: getOneEssay(id)
  };
};