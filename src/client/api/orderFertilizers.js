
import fertilizerService from './fertilizerService';

const orderFertilizers = (id) => {
  return fertilizerService.post('/fertilizers/order', {
    id: id,
  }).then((res) => {
    return res;
  });
}

export default orderFertilizers;