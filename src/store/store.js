import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer'
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { persistReducer } from 'redux-persist';
import { useMemo } from 'react';
let store;

const encryptor = encryptTransform({
    secretKey: "masdis-eureka-key",
})

const persistConfig = {
    key: 'primary',
    storage,
    transforms: [encryptor]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

function makeStore() {
    return createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export const initializeStore = () => {
    let _store = store ?? makeStore()

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (store) {
        _store = makeStore({
            ...store.getState(),
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore() {
    const store = useMemo(() => initializeStore(), [])
    return store
}
