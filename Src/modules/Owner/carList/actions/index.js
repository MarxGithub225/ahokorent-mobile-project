import AsyncStorage from '@react-native-community/async-storage';
import {
  SELECT_CAR,
    UPDATECAR_ERROR,
    UPADTECAR_REQUEST,
    UPADTECAR_SUCCESS,
} from '../../../../common/actionsTypes';

import api from '../api';
import SnackBar from 'rn-snackbar';
import color from '../../../../assets/themes/color';

const _snackError = (text) => {
  return (
    SnackBar.show(text, {
      style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
      backgroundColor: color.danger,
      textColor: color.white,
    })
  )
}

const _snackSuccess = (text) => {
  return (
    SnackBar.show(text, {
      style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
      backgroundColor: color.primary,
      textColor: color.white,
    })
  )
}

export const selectData = (data) => async (dispatch) =>{

  dispatch ({
        type: SELECT_CAR,
        payload: data
  })
};


export const Update = (data, props) => async (dispatch) =>{

  dispatch ({
        type: UPDATECAR_REQUEST
  })
  try {
    const res = await api.update(data);

    dispatch ({
          type: UPDATECAR_SUCCESS
    })

    
    if(res.data.status)
    {
      _snackSuccess ('Modification réussie');

        const result = await api.getProfiles();
        if(result)
        {
          
          const user = result.data.data.filter(u => u.email === data.email)[0]
          
          await AsyncStorage.setItem('islogged', JSON.stringify(user));

            dispatch ({
                type: SET_CURRENT_USER,
                payload: user
            })
            dispatch ({
                type: SET_PROFILES,
                payload: result.data.data
            });

            props.navigation.navigate(OWNERSETTINGSSCREEN)
        }

    }else {
     
    _snackError ('Une erreur est survénue, veuillez réessayer');
    }
  } catch (error) {
    dispatch ({
          type: UPDATECAR_ERROR
    })

    _snackError ('Une erreur est survénue, veuillez réessayer');
  }
};