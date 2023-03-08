import axios from 'axios';
import Constants from 'expo-constants';

const baseUrl = Constants.expoConfig.extra.apiUrl;
const openCageKey = Constants.expoConfig.extra.openCageKey;

export default {
  getExample() {
    return axios({
      method: 'get',
      url: `${baseUrl}/api/example`,
    })
      .then((res) =>
        console.log(`GET Successful-\n${JSON.stringify(res.data, null, 2)}`),
      )
      .catch((err) => console.error(err));
  },

  postToExample(params, data) {
    return axios({
      method: 'post',
      url: `${baseUrl}/api/example`,
      params,
      data,
    })
      .then((res) =>
        console.log(`POST Successful-\n${JSON.stringify(res.data, null, 2)}`),
      )
      .catch((err) => console.error(err));
  },

  getCoordinates({ address1, address2, city, state, postalCode }) {
    return axios({
      method: 'get',
      url: `https://api.opencagedata.com/geocode/v1/json`,
      params: {
        key: openCageKey,
        q: `${address1} ${address2}, ${city}, ${state} ${postalCode}`,
      },
    })
      .then(({ data }) => data.results[0].geometry)
      .catch((err) => console.error(err));
  },
};
