import axios from 'axios';
import Constants from 'expo-constants';

const baseUrl = Constants.expoConfig.extra.apiUrl;

export default {
  getUserProfile(userId) {
    return axios({
      method: 'get',
      url: `${baseUrl}api/dogs/${userId}/one`,
    })
      .then((res) => {
        console.log(
          `GET one profile success: ${JSON.stringify(res.data, null, 2)}`,
        );
        return res.data;
      })
      .catch((err) => console.error(err));
  },

  patchUserProfile(userId, data) {
    return axios({
      method: 'patch',
      url: `${baseUrl}api/dogs/${userId}`,
      data,
    })
      .then((res) => {
        console.log(
          `PATCH one profile success: ${JSON.stringify(res.data, null, 2)}`,
        );
      })
      .catch((err) => console.error(err));
  },
};

// getExample() {
//   return axios({
//     method: 'get',
//     url: `${baseUrl}/api/example`,
//   })
//     .then((res) =>
//       console.log(`GET Successful-\n${JSON.stringify(res.data, null, 2)}`),
//     )
//     .catch((err) => console.error(err));
// },

// postToExample(params, data) {
//   return axios({
//     method: 'post',
//     url: `${baseUrl}/api/example`,
//     params,
//     data,
//   })
//     .then((res) =>
//       console.log(`POST Successful-\n${JSON.stringify(res.data, null, 2)}`),
//     )
//     .catch((err) => console.error(err));
// },
