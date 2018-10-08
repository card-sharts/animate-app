export const PHOTO_SELECTED = 'PHOTO_SELECTED';

export const getSelectedPhoto = state => state.selectedPhoto;

export function selectedPhoto(state = null, { type, payload }) {
  switch(type) {
    case PHOTO_SELECTED:
      return payload;
    default:
      return state;
  }
}