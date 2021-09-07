import AsyncStorage from '@react-native-community/async-storage';
import {
  SET_CURRENT_USER,
  SET_PROFILES,
    UPDATEOWNER_ERROR,
    UPDATEOWNER_REQUEST,
    UPDATEOWNER_SUCCESS,
} from '../../../../common/actionsTypes';

import api from '../api';
import SnackBar from 'rn-snackbar';
import color from '../../../../assets/themes/color';
import { LOGIN, OWNERSETTINGSSCREEN } from '../../../../common/rootNames';

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

export const Update = (data, props) => async (dispatch) =>{

  dispatch ({
        type: UPDATEOWNER_REQUEST
  })
  try {
    const res = await api.update(data);

    dispatch ({
          type: UPDATEOWNER_SUCCESS
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
          type: UPDATEOWNER_ERROR
    })

    _snackError ('Une erreur est survénue, veuillez réessayer');
  }
};


export const sendNewPass = (data, props) => async (dispatch) =>{

  try {
      const res = await api.passforgot(data);
  
      
      if(res.data){
          _snackSuccess ('Votre mot de passe a été rénitialisé, vous recevrez un email.');
          props.navigation.navigate(OWNERSETTINGSSCREEN)
      }else {
          dispatch ({
              type: PASSFORGOT_ERROR
          })
          _snackError ('Une erreur est survenue, veuillez réessayer.');
      }
  
    } catch (error) {
      dispatch ({
            type: PASSFORGOT_ERROR
      })
      _snackError ('Une erreur est survenue, veuillez réessayer.');
    }
};

export const LogOut = (props) => async (dispatch) =>{

  await AsyncStorage.removeItem('islogged');

    dispatch ({
        type: SET_CURRENT_USER,
        payload: null
    })

    
    _snackSuccess ('Vous êtes déconnecté');

    props.navigation.navigate(LOGIN)
};