import {
    CAR_REGISTER_ERROR,
    CAR_REGISTER_REQUEST,
    CAR_REGISTER_SUCCESS,
    CAR_REGISTER_SETDATA
} from '../../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false,
    data : []
};

const carRegisterReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case CAR_REGISTER_REQUEST:
            return {...state, loading: true};

        case CAR_REGISTER_ERROR:
            return {...state, loading: false, error: true};

        case CAR_REGISTER_SUCCESS:
            return {...state, loading: false, success: true};

         case CAR_REGISTER_SETDATA:
            return {...state, data: payload};
      default:
        return state;
    }
  };
  
  export default carRegisterReducer;