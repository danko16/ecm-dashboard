export const ME_ACTIONS = Object.freeze({
  SET_DATA: 'myapp/me/set-data',
  CUSTOM_SET: 'myapp/me/custom-set',
  LOGIN_REQUEST: 'myapp/me/login/request',
  REGISTER_REQUEST: 'myapp/me/register/request'
});

export const meActions = Object.freeze({
  setData: value => ({
    type: ME_ACTIONS.SET_DATA,
    value
  }),
  customSet: (field, value) => ({
    type: ME_ACTIONS.CUSTOM_SET,
    field,
    value
  }),
  loginRequest: value => ({
    type: ME_ACTIONS.LOGIN_REQUEST,
    value
  }),
  registerRequest: value => ({
    type: ME_ACTIONS.REGISTER_REQUEST,
    value
  })
});

const initState = {
  id: null,
  full_name: null,
  email: null,
  phone: null,
  access_token: null,
  refresh_token: null,
  image: null,
  role: null,
  client_id: null,
  client_secret: null,
  provider: null,
  loading: null,
  message: null
};

const reducer = (state = initState, { type, value, field }) => {
  switch (type) {
    case ME_ACTIONS.CUSTOM_SET:
      return {
        ...state,
        [field]: value,
        loading: false
      };
    case ME_ACTIONS.LOGIN_REQUEST:
    case ME_ACTIONS.REGISTER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ME_ACTIONS.SET_DATA:
      return {
        ...state,
        id: value.id,
        full_name: value.full_name,
        email: value.email,
        phone: value.phone,
        access_token: value.access_token,
        refresh_token: value.refresh_token,
        role: value.role,
        image: value.image,
        client_id: value.client_id,
        client_secret: value.client_secret,
        provider: value.provider,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
