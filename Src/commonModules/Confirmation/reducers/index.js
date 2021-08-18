import {
    SMSCONFIRMATION_ERROR,
    SMSCONFIRMATION_REQUEST,
    SMSCONFIRMATION_SUCCESS,
    SMSCONFIRMATION_CONFIRM,
    SET_CONFIRMATION_NUMBER,
    SET_CONFIRMATION_CODE,
    INITIALISE_CONFIRMATION
} from '../../../common/actionsTypes';

const initialState = {
    error: false,
    loading: false,
    success: false,
    codeSended: false,
    confirmation: false,
    number: '',
    code: '',
    country: ''
};

const getCountry  = code => {
    switch (code) {
        case 'CI' :
            return 'Côte d\'Ivoire';
        
        case 'SN' :
            return 'Sénégal';

        case 'GH' :
            return 'Ghana';

        case 'CD' :
            return 'République démocratique du congo';

        case 'CG' :
            return 'Congo';

        case 'NG' :
            return 'Nigéria';

        case 'TZ' :
            return 'Tanzanie';

        case 'RW' :
            return 'Rwanda';

        case 'ET' :
            return 'Ethiopie';

        case 'MZ' :
            return 'Mozambique';
            
        case 'CM' :
            return 'Cameroun';

        case 'ZA' :
            return 'Afrique du sud';
    }
}
const smsconfirmationReducer = (data = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
        case SMSCONFIRMATION_REQUEST:
            return {...data, loading: true, error: false, success: false, confirmation: false};

        case SMSCONFIRMATION_ERROR:
            return {...data, loading: false, error: true};

        case SMSCONFIRMATION_SUCCESS:
            return {...data, loading: false, codeSended: true};
        case SMSCONFIRMATION_CONFIRM:
            return {...data, loading: false, success: true, confirmation: true};

        case SET_CONFIRMATION_NUMBER:
            return {...data, number: payload};
            
        case SET_CONFIRMATION_CODE:
                return {...data, code: payload.code, country: getCountry(payload.country)};

        case INITIALISE_CONFIRMATION:
            return {...data, ...initialState};
      default:
        return data;
    }
  };
  
  export default smsconfirmationReducer;