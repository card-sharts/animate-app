import { PHOTO_SELECTED } from './reducers';

export const setModalPhoto = (photo) => {
  console.log('MODAL ACTION REACHED');
  return {
    type: PHOTO_SELECTED,
    payload: photo
  };
};