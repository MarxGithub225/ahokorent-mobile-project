import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import {
    SMSCONFIRMATION_ERROR,
    SMSCONFIRMATION_REQUEST,
    SMSCONFIRMATION_SUCCESS,
    SMSCONFIRMATION_CONFIRM,
    SET_CONFIRMATION_NUMBER,
    SET_CONFIRMATION_CODE,
    INITIALISE_CONFIRMATION
} from '../../../common/actionsTypes';

import api from '../api';

export const setConfirmationNumber = (number) => async (dispatch) =>{
   
  dispatch ({
        type: SET_CONFIRMATION_NUMBER,
        payload: number
  })

};

export const initialize = () => async (dispatch) =>{
   
  dispatch ({
        type: INITIALISE_CONFIRMATION
  })

};
export const sendCode = (data) => async (dispatch) =>{

  
  dispatch ({
        type: SMSCONFIRMATION_REQUEST
  })
  try {
    await api.sendCode(data);

    dispatch ({
          type: SMSCONFIRMATION_SUCCESS
    })
  } catch (error) {
    dispatch ({
          type: SMSCONFIRMATION_ERROR
    })
  }


};

export const confirmCode = (data, code, country, props) => async (dispatch) =>{


  dispatch ({
    type: SMSCONFIRMATION_REQUEST
  })
  try {
    const res = await api.confirmCode(data);
    if (res.data.status) {
      dispatch ({
        type: SMSCONFIRMATION_SUCCESS
      }) 

      dispatch ({
            type: SMSCONFIRMATION_CONFIRM
      })
      
      dispatch ({
            type: SET_CONFIRMATION_CODE,
            payload: {code: code, country: country}
      })

      await AsyncStorage.setItem('numberVerify', JSON.stringify({country: country, phone: data.phone, cca2: data.cca2}))

      await api.updateCode({code: code, state: 1});

      const { next } = props;
      next();
    }
    else {
      dispatch ({
        type: SMSCONFIRMATION_ERROR
      }) 
    }

    
  } catch (error) {

    dispatch ({
          type: SMSCONFIRMATION_ERROR
    })
  }

};


export const updateCode = (data) => async (dispatch) =>{
  dispatch ({
    type: SMSCONFIRMATION_REQUEST
  })

  try {
    await api.updateCode(data);
    
    dispatch ({
          type: SMSCONFIRMATION_SUCCESS
    })
    
  } catch (error) {

    dispatch ({
          type: SMSCONFIRMATION_ERROR
    })
  }

};