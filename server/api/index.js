const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const FormData = require('form-data');
const axios = require('axios');

module.exports = {
  getCoordinates({ address1, address2, city, state, postalCode }) {
    return axios({
      method: 'get',
      url: `https://api.opencagedata.com/geocode/v1/json`,
      params: {
        key: process.env.OPENCAGE_KEY,
        q: `${address1} ${address2}, ${city}, ${state} ${postalCode}`,
      },
    })
      .then(({ data }) => data.results[0].geometry)
      .catch((err) => console.error(err));
  },

  uploadPhoto(base64Image) {
    if (base64Image === '') return '';
    const formData = new FormData();
    const base64Data = base64Image.replace(
      /^data:image\/(jpg|jpeg|png|gif|bmp|svg);base64,/,
      '',
    );
    formData.append('image', base64Data);
    const options = {
      url: 'https://api.imgbb.com/1/upload',
      method: 'post',
      headers: { 'content-type': 'multipart/form-data' },
      params: { key: process.env.IMGBB_KEY },
      data: formData,
    };
    return axios(options)
      .then(({ data }) => data.data.url)
      .catch((err) => console.error(err));
  },

  uploadPhotos(base64Images) {
    if (!base64Images.length) return [];
    const options = base64Images.map((base64Image) => {
      const formData = new FormData();
      const base64Data = base64Image.replace(
        /^data:image\/(jpg|jpeg|png|gif|bmp|svg);base64,/,
        '',
      );
      formData.append('image', base64Data);
      return {
        url: 'https://api.imgbb.com/1/upload',
        method: 'post',
        headers: { 'content-type': 'multipart/form-data' },
        params: { key: process.env.IMGBB_KEY },
        data: formData,
      };
    });
    return axios
      .all(options.map((config) => axios(config)))
      .then((results) => results.map((result) => result.data.data.url))
      .catch((err) => console.error(err));
  },

  uploadPhotoNoPrefix(base64Image) {
    if (base64Image === '') return '';
    const formData = new FormData();
    formData.append('image', base64Image);
    const options = {
      url: 'https://api.imgbb.com/1/upload',
      method: 'post',
      headers: { 'content-type': 'multipart/form-data' },
      params: { key: process.env.IMGBB_KEY },
      data: formData,
    };
    return axios(options)
      .then(({ data }) => data.data.url)
      .catch((err) => console.error(err));
  },

  uploadPhotosNoPrefix(base64Images) {
    if (!base64Images.length) return [];
    const options = base64Images.map((base64Image) => {
      const formData = new FormData();
      formData.append('image', base64Image);
      return {
        url: 'https://api.imgbb.com/1/upload',
        method: 'post',
        headers: { 'content-type': 'multipart/form-data' },
        params: { key: process.env.IMGBB_KEY },
        data: formData,
      };
    });
    return axios
      .all(options.map((config) => axios(config)))
      .then((results) => results.map((result) => result.data.data.url))
      .catch((err) => console.error(err));
  },
};
