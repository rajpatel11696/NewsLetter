import { DARK_MODE, SIGN_IN} from "./ActionType"
import { exp } from "react-native-reanimated"

export const changeDarkMode = (value)=>{
   return{
       type:DARK_MODE,
       payload:value
   }
}
export const storeUserId = (value)=>{
    return{
        type:SIGN_IN,
        payload:value
    }
 }