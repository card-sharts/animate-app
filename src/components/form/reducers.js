export const PHOTOS_FETCHED = 'PHOTOS_FETCHED';
export const PHOTOS_UPLOADED = 'PHOTOS_UPLOADED';
export const DELETE_UPLOADED_PHOTO = 'DELETE_UPLOADED_PHOTO';
export const UPDATE_UPLOADED_PHOTO = 'UPDATE_UPLOADED_PHOTO';


const UploadedPhotosReducer = (uploadedPhotos = [], action) => {
  switch(action.type) {
    case UPDATE_UPLOADED_PHOTO: {
      let photoIndex = -1;
      const updatedPhotos = uploadedPhotos.map((photo, index) => {
        if(photo.id === action.uploadedPhoto.id) {
          photoIndex = index;
          return { ...photo, ...action.uploadedPhoto };
        }

        return photo;
      });

      return photoIndex !== -1
        ? updatedPhotos
        : [action.uploadedPhoto, ...uploadedPhotos];
    }
    case DELETE_UPLOADED_PHOTO: {
      const index = uploadedPhotos.findIndex(
        current => current.response.body.public_id === action.publicId
      );
      return [
        ...uploadedPhotos.slice(0, index),
        ...uploadedPhotos.slice(index + 1),
      ];
    }
    default:
      return [...uploadedPhotos];
  }
};

export default UploadedPhotosReducer;
