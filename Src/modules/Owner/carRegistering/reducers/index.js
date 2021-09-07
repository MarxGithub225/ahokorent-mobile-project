import {
    CAR_REGISTER_ERROR,
    CAR_REGISTER_REQUEST,
    CAR_REGISTER_SUCCESS,
    CAR_REGISTER_SETDATA,
    CAR_REGISTER_INPUTDATA
} from '../../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false,
    data : [],
    inputData: {
        VIN : null
    }
};

const initialize  = {
    error: false,
    loading: false,
    success: false,
    data : [],
    inputData: {
        VIN : null
    }
};

const carRegisterReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case CAR_REGISTER_REQUEST:
            return {...state, loading: true};

        case CAR_REGISTER_ERROR:
            return {...state, loading: false, error: true};

        case CAR_REGISTER_SUCCESS:
            return {...state, ...initialize};
            // return {...state, loading: false, success: true};

         case CAR_REGISTER_SETDATA:
            return {...state, data: payload};
        case CAR_REGISTER_INPUTDATA:
            return {...state, inputData: {...state.inputData,...payload}};
      default:
        return state;
    }
  };
  
  export default carRegisterReducer;