export const PHOTOS_FETCHED = 'PHOTOS_FETCHED';
export const PHOTOS_UPLOADED = 'PHOTOS_UPLOADED';
export const DELETE_UPLOADED_PHOTO = 'DELETE_UPLOADED_PHOTO';
export const getGames = state => state.games;

export const getPreviews = state => state.previews;

export const previews = (state = [], { type, payload }) => {
  switch(type) {
    case PHOTOS_FETCHED:
      return [...payload];
    case PHOTOS_UPLOADED: {
      return [...state, ...payload];
    }
    case DELETE_UPLOADED_PHOTO:
      return state.filter(photo => photo.public_id !== payload);
    default:
      return [...state];
  }
};