import {
    PASSFORGOT_REQUEST,
    PASSFORGOT_ERROR,
    PASSFORGOT_SUCCESS
} from '../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false
};

const passForgotReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case PASSFORGOT_REQUEST:
            return {...data, loading: true};

        case PASSFORGOT_ERROR:
            return {...data, loading: false, error: true};

        case PASSFORGOT_SUCCESS:
            return {...data, loading: false, success: true};
      
      default:
        return data;
    }
  };
  
  export default passForgotReducer;