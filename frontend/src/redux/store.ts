import {configureStore} from "@reduxjs/toolkit";
// import registerReducer from "./Register/registerSlice";
// import loginReducer from "./Login/loginSlice";
// import tokenReducer from "./Auth/tokenSlice";
import storage from "redux-persist/lib/storage/session";
import {combineReducers} from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
//   loginSlice: loginReducer,
//   tokenSlice: tokenReducer, 
//   registerSlice: registerReducer
});

  const persistConfig = {
    key: "root",
    storage,
    blacklist: ["registerSlice"]
  };

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persistedReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch