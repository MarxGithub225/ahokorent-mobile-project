import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import loginReducer from "../../commonModules/LoginPage/reducers";
import smsconfirmationReducer from "../../commonModules/Confirmation/reducers";
import registerOwnerReducer from "../../modules/Owner/registerOwner/reducers";
import passForgotReducer from "../../commonModules/PassForgot/reducers";
import carRegisterReducer from "../../modules/Owner/carRegistering/reducers";
import ownerSettingsReducer from "../../modules/Owner/ownerSettings/reducers";


import carListReducer from "../../modules/Owner/carList/reducers";
export default combineReducers({
    globalReducer,
    loginReducer,
    passForgotReducer,
    smsconfirmationReducer,
    registerOwnerReducer,
    carRegisterReducer,
    ownerSettingsReducer,
    carListReducer 
});