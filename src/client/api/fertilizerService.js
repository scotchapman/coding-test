import axios from 'axios';

const fertilizerService = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export default fertilizerService;