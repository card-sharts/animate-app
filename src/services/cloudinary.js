import { Cloudinary as CoreCloudinary, Util } from 'cloudinary-core';

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
