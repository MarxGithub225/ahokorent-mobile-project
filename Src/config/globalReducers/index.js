import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import loginReducer from "../../commonModules/LoginPage/reducers";
import smsconfirmationReducer from "../../commonModules/Confirmation/reducers";
import registerOwnerReducer from "../../modules/Owner/registerOwner/reducers";
import passForgotReducer from "../../commonModules/PassForgot/reducers";
export default combineReducers({
    globalReducer,
    loginReducer,
    passForgotReducer,
    smsconfirmationReducer,
    registerOwnerReducer
});