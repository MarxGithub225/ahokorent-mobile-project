import {
    UPDATEDRIVER_ERROR,
    UPDATEDRIVER_REQUEST,
    UPDATEDRIVER_SUCCESS,
} from '../../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false,
};

const driverSettingsReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case UPDATEDRIVER_REQUEST:
            return {...state, loading: true};

        case UPDATEDRIVER_ERROR:
            return {...state, loading: false, error: true};

        case UPDATEDRIVER_SUCCESS:
            return {...state, loading: false, success: true};
      
      default:
        return state;
    }
  };
  
  export default driverSettingsReducer;