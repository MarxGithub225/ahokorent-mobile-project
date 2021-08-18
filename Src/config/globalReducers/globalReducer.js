import {
    SET_FIRST_TIME,
    SET_CURRENT_USER,
    SET_DEFAULT_APP,
    SET_SESSIONS,
    SET_PROFILES,
    SET_OWNERS,
    SET_NUMBER_VERIFY,
    SETINITIALROOT
} from '../../common/actionsTypes';

const initialState = {
    profiles: [],
    owners: [],
    first_time: true,
    numberVerified: false,
    current_user: null,
    default_app: 'owner_app', //user_app, driver_app, owner_app
    sessions: {
        user: null,
        owner: null,
        driver: null
    },
    initialRoot: undefined
};

const globalReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case SET_FIRST_TIME:
            return {...data, first_time: payload};

        case SET_NUMBER_VERIFY:
            return {...data, numberVerified: payload};

        case SET_CURRENT_USER:
            return {...data, current_user: payload};

        case SET_DEFAULT_APP:
            return {...data, default_app: payload};
        
        case SET_SESSIONS:
            return {...data, sessions: payload};

        case SET_PROFILES:
            return {...data, profiles: payload};

        case SET_OWNERS:
            return {...data, owners: payload};
        case SETINITIALROOT:
            return {...data, initialRoot: payload};
      default:
        return data;
    }
  };
  
  export default globalReducer;