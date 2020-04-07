export const CATEGORY_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/category/set-data',
  CREATE_REQUEST: 'myapp/category/create-request',
  CREATE_RESPONSE: 'myapp/category/create-response',
  CREATE_ERROR: 'myapp/category/create-error'
});

export const categoryActions = Object.freeze({
  setData: (field, value) => ({
    type: CATEGORY_ACTIONS.SET_DATA,
    field,
    value
  }),
  createRequest: value => ({
    type: CATEGORY_ACTIONS.CREATE_REQUEST,
    value
  }),
  createResponse: value => ({
    type: CATEGORY_ACTIONS.CREATE_RESPONSE,
    value
  }),
  createError: value => ({
    type: CATEGORY_ACTIONS.CREATE_ERROR,
    value
  })
});

const initState = {
  data: [],
  message: '',
  loading: false,
  isError: false
};

const reducer = (state = initState, { type, value, field }) => {
  switch (type) {
    case CATEGORY_ACTIONS.SET_DATA:
      return {
        ...state,
        [field]: value
      };
    case CATEGORY_ACTIONS.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CATEGORY_ACTIONS.CREATE_RESPONSE:
      return {
        ...state,
        data: value.categories,
        message: value.message,
        isError: false,
        loading: false
      };
    case CATEGORY_ACTIONS.CREATE_ERROR:
      return {
        ...state,
        message: value.message,
        isError: true,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
