import {
  CAR_REGISTER_ERROR,
  CAR_REGISTER_REQUEST,
  CAR_REGISTER_SUCCESS,
  CAR_REGISTER_SETDATA
} from '../../../../common/actionsTypes';

import api from '../api';
import SnackBar from 'rn-snackbar';
import color from '../../../../assets/themes/color';

export const fetchCarData = (data) => async (dispatch) =>{
 
  try {
    const res = await api.fetchCarData(data);

    if(res.data.status) {

      console.log(res.data.dataDecode.decode)
      // dataStolen
      dispatch ({
        type: CAR_REGISTER_SETDATA,
        payload: res.data.dataDecode.decode
      })
    }

  } catch (error) {
    console.log('Fetching error', error)
  }
};

export const setData = (data) => async (dispatch) =>{

  dispatch ({
        type: CAR_REGISTER_REQUEST
  })
  try {
    const res = await api.register(data);

    dispatch ({
          type: REGISTER_SUCCESS
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
          type: CAR_REGISTER_ERROR
    })
  }
};

export const Register = (data) => async (dispatch) =>{

  dispatch ({
        type: CAR_REGISTER_REQUEST
  })
  try {
    const res = await api.register(data);

    dispatch ({
          type: REGISTER_SUCCESS
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
          type: CAR_REGISTER_ERROR
    })
  }
};