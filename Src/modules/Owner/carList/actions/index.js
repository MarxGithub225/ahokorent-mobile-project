import AsyncStorage from '@react-native-community/async-storage';
import {
  SELECT_CAR,
    UPDATECAR_ERROR,
    UPDATECAR_REQUEST,
    UPDATECAR_SUCCESS,
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

    if(res.data.status)
    {
      _snackSuccess ('Modification réussie');
        
      dispatch ({
            type: UPDATECAR_SUCCESS 
      })

      props.getCar();
      props.getImages();
      props.getFacture();
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

export const updateImage = (data, props) => async (dispatch) =>{

  dispatch ({
        type: UPDATECAR_REQUEST
  })
  try {
    const res = await api.updateImage(data);


    if(res.data.status)
    {
      _snackSuccess ('Modification réussie');
        
      dispatch ({
            type: UPDATECAR_SUCCESS
      })

      props.getCar();
      props.getImages();
      props.getFacture();
    }else {
    _snackError ('Une erreur est survénue, veuillez réessayer');
    }
  } catch (error) {
    console.log(error) 
    dispatch ({
          type: UPDATECAR_ERROR
    })

    _snackError ('Une erreur est survénue, veuillez réessayer');
  }
};