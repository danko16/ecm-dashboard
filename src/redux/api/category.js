import { Api } from '../../utils';

export default Object.freeze({
  get: () => Api.get('/category', { headers: { 'Content-Type': 'application/json' } }),
  deleteCategory: ({ id }) =>
    Api.delete(`/category/${id}`, { headers: { 'Content-Type': 'application/json' } }),
  create: ({ name, desc, formData }) =>
    Api.post(`/category?name=${name}&desc=${desc}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
});
