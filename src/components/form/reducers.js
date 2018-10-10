export const PHOTOS_FETCHED = 'PHOTOS_FETCHED';
export const PHOTOS_UPLOADED = 'PHOTOS_UPLOADED';
export const DELETE_UPLOADED_PHOTO = 'DELETE_UPLOADED_PHOTO';
// export const UPDATE_UPLOADED_PHOTO = 'UPDATE_UPLOADED_PHOTO';
export const getGames = state => state.games;

export const getPreviews = state => state.previews;
// const UploadedPhotosReducer = (state = [], { type, payload }) => {
//   switch(type) {
//     case UPDATE_UPLOADED_PHOTO: {
//       let photoIndex = -1;
//       const updatedPhotos = state.map((photo, index) => {
//         if(photo.id === payload.id) {
//           photoIndex = index;
//           return { ...photo, ...payload };
//         }

//         return photo;
//       });

//       return photoIndex !== -1
//         ? updatedPhotos
//         : [payload, ...state];
//     }
//     case DELETE_UPLOADED_PHOTO: {
//       const index = state.findIndex(
//         current => current.response.body.public_id === payload
//       );
//       return [
//         ...state.slice(0, index),
//         ...state.slice(index + 1),
//       ];
//     }
//     default:
//       return [...state];
//   }
// };

// export default UploadedPhotosReducer;

export const previews = (state = [], { type, payload }) => {
  switch(type) {
    case PHOTOS_FETCHED:
      return [...payload];
    case PHOTOS_UPLOADED: {
      return [...state, payload];
    }
    case DELETE_UPLOADED_PHOTO:
      return state.filter(photo => photo.public_id !== payload);
    default:
      return [...state];
  }
};