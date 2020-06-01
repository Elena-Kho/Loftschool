import axios from 'axios';

const token = localStorage.getItem('token');

if (!token) alert('Отсутствует токен')

const requests = axios.create({
  baseURL: 'https://webdev-api.loftschool.com',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});


requests.interceptors.response.use(
  response => response,
  error => {

  const originalRequest = error.config;

    if(error.response.status == 401) {
      const {data} = requests.post('/refreshToken');
      const token = data.token;

      localStorage.setItem('token', token);
      requests.defaults.headers['Authorization'] = `Bearer ${token}`;
      originalRequest.headers['Authorization'] = `Bearer ${token}`;

      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
)

export default requests;
