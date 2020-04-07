import { Api } from '../../utils';

export default Object.freeze({
  create: ({ name, desc, formData }) =>
    Api.post(`/category?name=${name}&desc=${desc}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
});
