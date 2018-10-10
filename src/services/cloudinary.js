import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';
import axios from 'axios';

// export const cl = new cloudinary.Cloudinary({
//   cloud_name: 'animate', 
//   api_key: 896387744652518,
//   api_secret: '9zt3izabl3b_-rJCqPPx1K2Oc0A',
//   secure: true,
// });


export const url = (publicId, options) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  const cl = CoreCloudinary.new();
  return cl.url(publicId, scOptions);
};

export const openUploadWidget = (options, callback) => {
  const scOptions = Util.withSnakeCaseKeys(options);
  window.cloudinary.openUploadWidget(scOptions, callback);
};

export const fetchPhotos = cloudName => {
  // instead of maintaining the list of images, we rely on the 'myphotoalbum' tag
  // and simply retrieve a list of all images with that tag.
  // the version property is used for cache bust (lists are cached by the CDN for 1 minute)
  // *************************************************************************
  // Note that this practice is DISCOURAGED in production code and is here
  // for demonstration purposes only
  // *************************************************************************
  const options = {
    cloudName: cloudName,
    format: 'json',
    type: 'list',
    version: Math.ceil(new Date().getTime() / 1000),
  };

  const urlPath = url('myphotoalbum', options);

  return fetch(urlPath)
    .then(res => res.text())
    .then(text => (text ? JSON.parse(text).resources : []));
};


export const uploadPhotos = files => {
  // Push all the axios request promise into a single array
  const uploaders = files.map(file => {
    // Initial FormData
    const formData = new FormData();
    formData.append('file', file);
    formData.append('tags', 'photo-essay');
    formData.append('upload_preset', 'jxhco1rb'); // Replace the preset name with your own
    formData.append('api_key', '896387744652518'); // Replace API key with your own Cloudinary key
    formData.append('timestamp', (Date.now() / 1000) | 0);
    
    // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
    return axios.post('https://api.cloudinary.com/v1_1/codeinfuse/image/upload', formData, {
      headers: { 'X-Requested-With': 'XMLHttpRequest' },
    }).then(response => {
      const data = response.data;
      const photoUrl = data.secure_url; // You should store this URL for future references in your app
      return {
        publicId: data.public_id,
        photoUrl
      };
    });
  });

  // Once all the files are uploaded 
  return axios.all(uploaders);
};