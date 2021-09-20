import {
    UPDATECAR_ERROR,
    UPDATECAR_REQUEST,
    UPDATECAR_SUCCESS,
    SELECT_CAR
} from '../../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false,
    selected : {}
};

const carListReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case UPDATECAR_REQUEST:
            return {...state, loading: true};

        case UPDATECAR_ERROR:
            return {...state, loading: false, error: true};

        case UPDATECAR_SUCCESS:
            return {...state, loading: false, success: true};

        case SELECT_CAR:
                return {...state, selected: payload};
      
      default:
        return state;
    }
  };
  
  export default carListReducer;