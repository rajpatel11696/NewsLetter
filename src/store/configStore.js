import { createStore } from "redux";
import reducer from '../reducer/index'
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";


export default function configureStore(){
    const persistConfig = {
        key: "root",    
        storage: AsyncStorage
    };
    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = createStore(persistedReducer)
    const persistor = persistStore(store);

    return store
}