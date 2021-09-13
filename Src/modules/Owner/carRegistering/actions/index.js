import {
  CAR_REGISTER_ERROR,
  CAR_REGISTER_REQUEST,
  CAR_REGISTER_SUCCESS,
  CAR_REGISTER_SETDATA,
  CAR_REGISTER_INPUTDATA,
  SET_CARS,
  SET_FACTURE,
  SET_IMAGES,
} from '../../../../common/actionsTypes';

import api from '../api';
import SnackBar from 'rn-snackbar';
import color from '../../../../assets/themes/color';
import { OWNERPROFILE } from '../../../../common/rootNames';

export const fetchCarData = (data, props) => async (dispatch) =>{
  try {
    const res = await api.fetchCarData(data);

    if(res.data.status) {
      // dataStolen

      console.log(res.data.dataDecode.decode)
      if(res.data.dataDecode.decode)
      {

        dispatch ({
          type: CAR_REGISTER_SETDATA,
          payload: res.data.dataDecode.decode
        })

        const { next } = props;
          // Go to next step
        next();
      }else {
        SnackBar.show('Mauvais chassis: Aucune donnée trouvée', {
          style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
            backgroundColor: color.danger,
            textColor: color.white,
        })
      }
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

  
  dispatch ({
      type: CAR_REGISTER_REQUEST
  })

  try {
    const res = await api.insertCarData(data);

    
    if(res.data.status) {
      dispatch ({
            type: CAR_REGISTER_SUCCESS
      })

      SnackBar.show('Inscription réussie', {
        style: { marginBottom: 10,marginRight: 10, marginLeft: 10, borderRadius: 5, textAlign: 'center' },
          backgroundColor: color.primary,
          textColor: color.white,
      })

     

        const resultCar = await api.getCar();
        if(resultCar)
        {
            dispatch ({
                type: SET_CARS,
                payload: resultCar.data.data
            });
        }
        const resultImages = await api.getImages();
        if(resultImages)
        {
            dispatch ({
                type: SET_IMAGES,
                payload: resultImages.data.data
            });
        }
      const resultFacture = await api.getFacture();
        if(resultFacture)
        {
            dispatch ({
                type: SET_FACTURE,
                payload: resultFacture.data.data
            });
        }

      if(props) {
        const { next } = props;
        next();
      }
    }else {
      dispatch ({
            type: CAR_REGISTER_ERROR
      })
    }
    
    
  } catch (error) {
    console.log(error)
    dispatch ({
          type: CAR_REGISTER_ERROR
    })
  }
};