import AsyncStorage from '@react-native-community/async-storage';
import {
    UPDATEOWNER_ERROR,
    UPDATEOWNER_REQUEST,
    UPDATEOWNER_SUCCESS,
} from '../../../../common/actionsTypes';

import api from '../api';
import SnackBar from 'rn-snackbar';
import color from '../../../../assets/themes/color';



export const Update = (data) => async (dispatch) =>{

  dispatch ({
        type: UPDATEOWNER_REQUEST
  })
  try {
    const res = await api.update(data);

    dispatch ({
          type: UPDATEOWNER_SUCCESS
    })

    const ownerData = {
        reference : res.data.data.reference,
        date: new Date().getTime()
    }
    try {
        const result = await api.setOwner(ownerData);
    
        if(result.data.status)
        {
            SnackBar.show('Inscription réussie', {
                style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
                backgroundColor: color.primary,
                textColor: color.white,
            })
    
        }
    } catch (error) { 
    console.log('Setting Owner Error', error)
    
    }

  } catch (error) {
    dispatch ({
          type: UPDATEOWNER_ERROR
    })
  }
};