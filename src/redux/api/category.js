import { Api } from '../../utils';

export default Object.freeze({
  create: payload =>
    Api.post('/category', payload, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
});
