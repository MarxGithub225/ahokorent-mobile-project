import {
    UPDATEOWNER_ERROR,
    UPDATEOWNER_REQUEST,
    UPDATEOWNER_SUCCESS,
} from '../../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false,
};

const ownerSettingsReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case UPDATEOWNER_REQUEST:
            return {...state, loading: true};

        case UPDATEOWNER_ERROR:
            return {...state, loading: false, error: true};

        case UPDATEOWNER_SUCCESS:
            return {...state, loading: false, success: true};
      
      default:
        return state;
    }
  };
  
  export default ownerSettingsReducer;