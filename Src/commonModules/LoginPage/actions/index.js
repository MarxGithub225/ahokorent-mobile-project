import AsyncStorage from '@react-native-community/async-storage';
import {
    LOGING_REQUEST,
    LOGING_ERROR,
    LOGING_SUCCESS,
    SET_CURRENT_USER
} from '../../../common/actionsTypes';
import { OWNERTABNAVIGATOR } from '../../../common/rootNames';

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

// SET LOGIN
export const login = (data, props) => async (dispatch) =>{

    dispatch ({
        type: LOGING_REQUEST
    });
    try {
        const res = await api.login(data);
    
        if(res.data.status){
            dispatch ({
                type: LOGING_SUCCESS
            })

            await AsyncStorage.setItem('islogged', JSON.stringify(res.data.data));

            dispatch ({
                type: SET_CURRENT_USER,
                payload: res.data.data
            })
            setTimeout(() => {
                props.navigation.navigate(OWNERTABNAVIGATOR);
            }, 1000);
        }else {
             dispatch ({
                type: LOGING_ERROR
            });
            _snackError ('Indentifiants incorrects.');
           
        }
    
      } catch (error) {
        console.log('Login error', error);
        dispatch ({
              type: LOGING_ERROR
        })

        _snackError ('Une erreur est survenue, veuillez réessayer');
      }
};