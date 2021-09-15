import {
    SET_FIRST_TIME,
    SET_CURRENT_USER,
    SET_DEFAULT_APP,
    SET_SESSIONS,
    SET_PROFILES,
    SET_OWNERS,
    SET_NUMBER_VERIFY,
    SETINITIALROOT,
    SET_BRANDS,
    SET_MODELS,
    SET_TYPES,
    SET_CARACTERISTICS,
    SET_GEARBOX,
    SET_CARS,
    SET_FACTURE,
    SET_IMAGES,
    SET_HIDE,
    SETCOMMENT_REQUEST,
    SETCOMMENT_ERROR,
    SETCOMMENT_SUCCESS,
    SETRATING_REQUEST,
    SETRATING_ERROR,
    SETRATING_SUCCESS,
   SETSHARING_REQUEST,
   SETSHARING_ERROR,
   SETSHARING_SUCCESS,
   SET_COMMENTS,
    SET_RATINGS,
    SET_SHARINGS,
} from '../../common/actionsTypes';

const initialState = {
    hide: false,
    profiles: [],
    owners: [],
    brands: [],
    models: [],
    types: [],
    caracteristics: [],
    gearbox: [],
    first_time: true,
    numberVerified: false,
    current_user: null,
    default_app: 'owner_app', //user_app, driver_app, owner_app
    sessions: {
        user: null,
        owner: null,
        driver: null
    },
    initialRoot: undefined,
    cars : [],
    factures : [],
    images : [],
    comments : [],
    ratings : [],
    sharings : [],
    loading : false,
    error: false,
    success: false,
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
        
        case SET_MODELS:
            return {...data, models: payload};
            
        case SET_CARACTERISTICS:
            return {...data, caracteristics: payload};
           
        case SET_TYPES:
            return {...data, types: payload};
            
        case SET_GEARBOX:
            return {...data, gearbox: payload};
            
        case SET_BRANDS:
            return {...data, brands: payload};
        
        case SET_CARS:
            return {...data, cars: payload};
            
        case SET_IMAGES:
            return {...data, images: payload};
            
        case SET_FACTURE:
            return {...data, factures: payload};

            case SET_COMMENTS:
            return {...data, comments: payload};

            case SET_RATINGS:
            return {...data, ratings : payload};

            case SET_SHARINGS:
            return {...data, sharings: payload};
        
        case SET_HIDE:
            return {...data, hide: payload};

        case SETINITIALROOT:
            return {...data, initialRoot: payload};

        case SETCOMMENT_REQUEST:
            return {...data, loading: true};

        case SETCOMMENT_SUCCESS:
            return {...data, loading: false, success: true};

        case SETCOMMENT_ERROR:
            return {...data, loading: false, error: true};

        case SETRATING_REQUEST:
            return {...data, loading: true};

        case SETRATING_SUCCESS:
            return {...data, loading: true, success: true};

        case SETRATING_ERROR:
            return {...data, loading: true, error: true};

        case SETSHARING_REQUEST:
            return {...data, loading: true};

        case SETSHARING_SUCCESS:
            return {...data, loading: true, success: true};

        case SETSHARING_ERROR:
            return {...data, loading: true, error: true};
            
      default:
        return data;
    }
  };
  
  export default globalReducer;