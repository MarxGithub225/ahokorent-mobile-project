import {
    SET_FIRST_TIME,
    SET_CURRENT_USER,
    SET_DEFAULT_APP,
    SET_SESSIONS,
    SET_PROFILES,
    SET_OWNERS,
    SET_NUMBER_VERIFY,
    SETINITIALROOT,
    SET_BRANDS,
    SET_MODELS,
    SET_TYPES,
    SET_CARACTERISTICS,
    SET_GEARBOX,
    SET_CARS,
    SET_FACTURE,
    SET_IMAGES,
    SET_HIDE,
    SETCOMMENT_REQUEST,
    SETCOMMENT_ERROR,
    SETCOMMENT_SUCCESS,
    SETRATING_REQUEST,
    SETRATING_ERROR,
    SETRATING_SUCCESS,
    SETSHARING_REQUEST,
    SETSHARING_ERROR,
    SETSHARING_SUCCESS,
    SET_COMMENTS,
    SET_RATINGS,
    SET_SHARINGS,
} from '../../common/actionsTypes';

import api from './api';
import SnackBar from 'rn-snackbar';
import color from '../../assets/themes/color';

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

// SET HIDE
export const setHide = (data) => (dispatch) =>{

    dispatch ({
        type: SET_HIDE,
        payload: data
    });
};

// SET IF I'TS FIRST TIME OPENNING THE APP OR NOT
export const setInitialRoot = (data) => (dispatch) =>{

    dispatch ({
        type: SETINITIALROOT,
        payload: data
    });
};
// SET IF I'TS FIRST TIME OPENNING THE APP OR NOT
export const setFirsTime = (data) => (dispatch) =>{

    dispatch ({
        type: SET_FIRST_TIME,
        payload: data
    });
};

// SET CURRENT USER
export const setCurrentUser = (data) => (dispatch) =>{
    dispatch ({
        type: SET_CURRENT_USER,
        payload: data
    });
};


// SET THE DEFAULT APP FOR LAUNCHING APP
export const setDefaultApp = (data) => (dispatch) =>{
    dispatch ({
        type: SET_DEFAULT_APP,
        payload: data
    });
};


// SET DIFFERENTS SESSION OR APPS RUNNING
export const setSessions = (data) => async (dispatch) =>{
    dispatch ({
        type: SET_SESSIONS,
        payload: data
    });
};

// SET NUMBER VERIFYING
export const setNumberVerify = (data) => async (dispatch) =>{
    dispatch ({
        type: SET_NUMBER_VERIFY,
        payload: data
    });
};


// GET PROFILES
export const getProfiles = () => async (dispatch) =>{
    
    try {
        const result = await api.getProfiles();
        if(result)
        {
            dispatch ({
                type: SET_PROFILES,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting profiles Error', error)
    
    }
};


// GET OWNERS
export const getOwners = () => async (dispatch) =>{
    try {
        const result = await api.getOwners();
    
        if(result.data.status)
        {
            dispatch ({
                type: SET_OWNERS,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting owner Error', error)
    
    }
};

// GET BRANDS
export const getBrands = () => async (dispatch) =>{
    
    try {
        const result = await api.getBrands();
        if(result)
        {
            dispatch ({
                type: SET_BRANDS    ,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting brands Error', error)
    
    }
};


// GET MODELS
export const getModels = () => async (dispatch) =>{
    try {
        const result = await api.getModels();
    
        if(result.data.status)
        {
            dispatch ({
                type: SET_MODELS,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting models Error', error)
    
    }
};

// GET CARACTERISTICS
export const getCaracteristics = () => async (dispatch) =>{
    
    try {
        const result = await api.getCaracteristics();
        if(result)
        {
            dispatch ({
                type: SET_CARACTERISTICS,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting caracteristics Error', error)
    
    }
};


// GET TYPES
export const getTypes = () => async (dispatch) =>{
    try {
        const result = await api.getTypes();
    
        if(result.data.status)
        {
            dispatch ({
                type: SET_TYPES,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting types Error', error)
    
    }
};


// GET GEARBOX
export const getGearbox = () => async (dispatch) =>{
    
    try {
        const result = await api.getGearbox();
        if(result)
        {
            dispatch ({
                type: SET_GEARBOX,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting gearbox Error', error)
    
    }
};


// GET CARS
export const getCar = () => async (dispatch) =>{
    
    try {
        const result = await api.getCar();
        if(result)
        {
            dispatch ({
                type: SET_CARS,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting cars Error', error)
    
    }
};

// GET IMAGES
export const getImages = () => async (dispatch) =>{
    
    try {
        const result = await api.getImages();
        if(result)
        {
            dispatch ({
                type: SET_IMAGES,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting images Error', error)
    
    }
};

// GET FACTURES
export const getFacture = () => async (dispatch) =>{
   
    try {
        const result = await api.getFacture();
        if(result)
        {
            dispatch ({
                type: SET_FACTURE,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting cars Error', error)
    
    }
};

// GET COMMENTS
export const getComments = () => async (dispatch) =>{
   
    try {
        const result = await api.getComments();
        if(result)
        {
            dispatch ({
                type: SET_COMMENTS,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting comments Error', error)
    
    }
};

// GET FACTURES
export const getRatings = () => async (dispatch) =>{
   
    try {
        const result = await api.getRatings();
        if(result)
        {
            dispatch ({
                type: SET_RATINGS,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting ratings Error', error)
    
    }
};

// GET FACTURES
export const getSharings = () => async (dispatch) =>{
   
    try {
        const result = await api.getSharings();
        if(result)
        {
            dispatch ({
                type: SET_SHARINGS,
                payload: result.data.data
            });
        }
    } catch (error) {
    console.log('Getting sharings Error', error)
    
    }
};


export const setComment = (data) => async (dispatch) =>{

    console.log(data)
    dispatch ({
          type: SETCOMMENT_REQUEST
    })
    try {
      const res = await api.setComment(data);
  
      console.log(res.data)
      if(res.data.status){
        const result = await api.getComments();
        if(result)
        {
            dispatch ({
                type: SET_COMMENTS,
                payload: result.data.data
            });
        }

        dispatch ({
            type: SETCOMMENT_SUCCESS
        })
        _snackSuccess ('Commentaire enregistré');

        
    }else {
        dispatch ({
            type: SETCOMMENT_ERROR
        })
        _snackError ('Une erreur est survénue, veuillez réessayer.');
       
    }
  
    } catch (error) {
      dispatch ({
            type: SETCOMMENT_ERROR
      })
      _snackError ('Une erreur est survénue, veuillez réessayer.');
    }
};

export const setRating = (data) => async (dispatch) =>{

    dispatch ({
          type: SETRATING_REQUEST
    })
    try {
      const res = await api.setRating(data);
  
      if(res.data.status){
        
        const result = await api.getRatings();
        if(result)
        {
            dispatch ({
                type: SET_RATINGS,
                payload: result.data.data
            });
        }

        dispatch ({
            type: SETRATING_SUCCESS
        })
        _snackSuccess ('Note enregistrée');
    }else {
        dispatch ({
            type: SETRATING_ERROR
        })
        _snackError ('Une erreur est survénue, veuillez réessayer.');
       
    }
  
    } catch (error) {
      dispatch ({
            type: SETRATING_ERROR
      })
      _snackError ('Une erreur est survénue, veuillez réessayer.');
    }
};

export const setSharing = (data) => async (dispatch) =>{

    dispatch ({
          type: SETSHARING_REQUEST
    })
    try {
      const res = await api.setSharing(data);
  
      if(res.data.status){
        
        const result = await api.getSharings();
        if(result)
        {
            dispatch ({
                type: SET_SHARINGS,
                payload: result.data.data
            });
        }

        dispatch ({
            type: SETSHARING_SUCCESS
        })


    }else {
        dispatch ({
            type: SETSHARING_ERROR
        })
        _snackError ('Une erreur est survénue, veuillez réessayer.');
       
    }
  
    } catch (error) {
      dispatch ({
            type: SETSHARING_ERROR
      })
      _snackError ('Une erreur est survénue, veuillez réessayer.');
    }
};