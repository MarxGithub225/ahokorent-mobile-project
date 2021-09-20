import AsyncStorage from '@react-native-community/async-storage';
import {
    REGISTER_REQUEST,
    REGISTER_ERROR,
    REGISTER_SUCCESS
} from '../../../../common/actionsTypes';

import api from '../api';
import SnackBar from 'rn-snackbar';
import color from '../../../../assets/themes/color';



export const Register = (data) => async (dispatch) =>{

  dispatch ({
        type: REGISTER_REQUEST
  })
  try {
    const res = await api.register(data);

    dispatch ({
          type: REGISTER_SUCCESS
    })

    const driverData = {
        reference : res.data.data.reference,
        date: new Date().getTime()
    }
    try {
        const result = await api.setDriver(driverData);
    
        if(result.data.status)
        {
            SnackBar.show('Inscription réussie', {
                style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
                backgroundColor: color.primary,
                textColor: color.white,
            })
    
        }
    } catch (error) { 
    console.log('Setting Driver Error', error)
    
    }

  } catch (error) {
    dispatch ({
          type: REGISTER_ERROR
    })
  }
};