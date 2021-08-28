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
} from '../../common/actionsTypes';

import api from './api';

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

