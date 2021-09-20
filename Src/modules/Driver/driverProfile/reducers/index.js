import {
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    SET_REGISTERING_DATA
} from '../../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false,
};

const registerDriverReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case REGISTER_REQUEST:
            return {...state, loading: true};

        case REGISTER_ERROR:
            return {...state, loading: false, error: true};

        case REGISTER_SUCCESS:
            return {...state, loading: false, success: true};
      
      default:
        return state;
    }
  };
  
  export default registerDriverReducer;