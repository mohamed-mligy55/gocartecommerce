"use client"
import React from 'react'
import { Provider } from 'react-redux'
import {store,persistor} from "./store"
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
const Providerredux = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
      {children}
      </QueryClientProvider>
      </PersistGate>
      </Provider>
  )
}

export default Providerredux