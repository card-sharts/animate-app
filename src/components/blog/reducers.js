export const PHOTO_SELECTED = 'PHOTO_SELECTED';
export const ESSAYS_LOADED = 'ESSAYS_LOADED';

export const getSelectedPhoto = state => state.selectedPhoto;
export const getEssays = state => state.essays;

export function selectedPhoto(state = null, { type, payload }) {
  switch(type) {
    case PHOTO_SELECTED:
      return payload;
    default:
      return state;
  }
}

export function essays(state = [], { type, payload }) {
  switch(type) {
    case ESSAYS_LOADED:
      return payload;
    default:
      return state;
  }
}