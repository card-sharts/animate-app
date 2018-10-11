import {
  PHOTOS_FETCHED,
  PHOTOS_UPLOADED,
  DELETE_UPLOADED_PHOTO,
  UPDATE_UPLOADED_PHOTO,
} from './reducers';

export const photosFetched = photos => ({
  type: PHOTOS_FETCHED,
  payload: photos,
});

export const onPhotosUpload = photos => ({
  type: PHOTOS_UPLOADED,
  payload: photos,
});

export const updateUploadedPhoto = uploadedPhoto => ({
  type: UPDATE_UPLOADED_PHOTO,
  payload: uploadedPhoto,
});

export const deleteUploadedPhoto = publicId => ({
  type: DELETE_UPLOADED_PHOTO,
  payload: publicId,
});
