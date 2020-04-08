export const CATEGORY_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/category/set-data',
  ERROR: 'myapp/category/error',
  CREATE_REQUEST: 'myapp/category/create-request',
  CREATE_RESPONSE: 'myapp/category/create-response',
  GET_REQUEST: 'myapp/category/get-request',
  GET_RESPONSE: 'myapp/category/get-response'
});

export const categoryActions = Object.freeze({
  setData: (field, value) => ({
    type: CATEGORY_ACTIONS.SET_DATA,
    field,
    value
  }),
  error: value => ({
    type: CATEGORY_ACTIONS.ERROR,
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
  getRequest: () => ({
    type: CATEGORY_ACTIONS.GET_REQUEST
  }),
  getResponse: value => ({
    type: CATEGORY_ACTIONS.GET_RESPONSE,
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
    case CATEGORY_ACTIONS.GET_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CATEGORY_ACTIONS.CREATE_RESPONSE:
    case CATEGORY_ACTIONS.GET_RESPONSE:
      return {
        ...state,
        data: value.categories,
        message: value.message,
        isError: false,
        loading: false
      };
    case CATEGORY_ACTIONS.ERROR:
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
