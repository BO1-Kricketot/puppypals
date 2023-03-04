import axios from 'axios';
import Config from 'react-native-config';

const baseUrl = `${Config.API_URL}`;

module.exports = {
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
};
