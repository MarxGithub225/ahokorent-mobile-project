import AsyncStorage from '@react-native-community/async-storage';
import {
    PASSFORGOT_REQUEST,
    PASSFORGOT_ERROR,
    PASSFORGOT_SUCCESS
} from '../../../common/actionsTypes';
import { LOGIN } from '../../../common/rootNames';

import SnackBar from 'rn-snackbar';
import api from '../api'
import color from '../../../assets/themes/color';

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

// SET LOGIN
export const login = (data, props) => async (dispatch) =>{

    dispatch ({
        type: PASSFORGOT_REQUEST
    });

    
    try {
        const res = await api.passforgot(data);
    
        if(res.data.status){
            dispatch ({
                type: PASSFORGOT_SUCCESS
            })

            _snackError ('Mot de passe envoyé.');
            setTimeout(() => {
                props.navigation.navigate(LOGIN);
            }, 2000);
        }else {
            dispatch ({
                type: PASSFORGOT_ERROR
            })
            _snackError ('Cet e-mail ou ce téléphone n\'existe pas.');
        }
    
      } catch (error) {
          console.log('Login error', error)
        dispatch ({
              type: PASSFORGOT_ERROR
        })
        _snackError ('Une erreur est survenue, veuillez réessayer.');
      }
};