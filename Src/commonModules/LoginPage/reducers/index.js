import {
    LOGING_ERROR,
    LOGING_REQUEST,
    LOGING_SUCCESS
} from '../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false
};

const loginReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case LOGING_REQUEST:
            return {...data, loading: true};

        case LOGING_ERROR:
            return {...data, loading: false, error: true};

        case LOGING_SUCCESS:
            return {...data, loading: false, success: true};
      
      default:
        return data;
    }
  };
  
  export default loginReducer;