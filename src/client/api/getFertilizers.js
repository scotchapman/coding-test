
import fertilizerService from './fertilizerService';

const getFertilizers = () => {
  return fertilizerService.get('/fertilizers').then((res) => {
    return res.data;
  });
}

export default getFertilizers;