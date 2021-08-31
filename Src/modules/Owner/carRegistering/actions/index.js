import {
  CAR_REGISTER_ERROR,
  CAR_REGISTER_REQUEST,
  CAR_REGISTER_SUCCESS,
  CAR_REGISTER_SETDATA,
  CAR_REGISTER_INPUTDATA
} from '../../../../common/actionsTypes';

import api from '../api';
import SnackBar from 'rn-snackbar';
import color from '../../../../assets/themes/color';
import { OWNERPROFILE } from '../../../../common/rootNames';

export const fetchCarData = (data) => async (dispatch) =>{
  try {
    const res = await api.fetchCarData(data);

    if(res.data.status) {
      // dataStolen

      console.log('data fetching =>', res.data.dataDecode.decode)
      dispatch ({
        type: CAR_REGISTER_SETDATA,
        payload: res.data.dataDecode.decode
      })
    }

  } catch (error) {
    console.log('Fetching error', error)
  }
};

export const setData = (data, props) => async (dispatch) =>{

  
  dispatch ({
    type: CAR_REGISTER_INPUTDATA,
    payload: data
  })

  if(props) {
    const { next } = props;
    next();
  }
};

export const Register = (data, props) => async (dispatch) =>{

  for (const [key, value] of Object.entries(data)) {
    if(key === 'images') {
      value.forEach(element => {
        element.value = "data:image/jpeg;base64," + element.value
      });
    }
  }
  dispatch ({
        type: CAR_REGISTER_REQUEST
  })

  console.log('Put data', data)
  return;
  try {
    const res = await api.insertCarData(data);

    if(res.data.status) {
      dispatch ({
            type: REGISTER_SUCCESS
      })

      SnackBar.show('Inscription réussie', {
        style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
          backgroundColor: color.primary,
          textColor: color.white,
      })

      setTimeout(() => {
        props.navigation.navigate(OWNERPROFILE)
      }, 3000);
    }
    
    
  } catch (error) {
    dispatch ({
          type: CAR_REGISTER_ERROR
    })
  }
};