import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReduser } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

const contactsPersistConfig = {
    key: 'contacts',
    storage,
};

const persistedContactsReduser = persistReducer(
    contactsPersistConfig,
    contactsReduser,
);
export const store = configureStore({
    reducer: {
        contacts: persistedContactsReduser,
        filter: filterReducer,
    },
});

export const persistor = persistStore(store);