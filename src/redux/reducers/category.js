export const CATEGORY_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/category/set-data',
  CUSTOM_SET: 'myapp/category/custom-set',
  CREATE_REQUEST: 'myapp/category/create-request'
});

export const categoryActions = Object.freeze({
  setData: value => ({
    type: CATEGORY_ACTIONS.SET_DATA,
    value
  }),
  customSet: (field, value) => ({
    type: CATEGORY_ACTIONS.CUSTOM_SET,
    field,
    value
  }),
  createRequest: value => ({
    type: CATEGORY_ACTIONS.CREATE_REQUEST,
    value
  })
});

const initState = {
  name: null,
  image: null,
  loading: null,
  message: null
};

const reducer = (state = initState, { type, value, field }) => {
  switch (type) {
    case CATEGORY_ACTIONS.CUSTOM_SET:
      return {
        ...state,
        [field]: value,
        loading: false
      };
    case CATEGORY_ACTIONS.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CATEGORY_ACTIONS.SET_DATA:
      return {
        ...state,
        name: value.name,
        image: value.image,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
