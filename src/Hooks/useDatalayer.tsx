import React, { createContext, useContext, useReducer } from 'react';

// Prepare the dataLayer
export const DataLayerContext = createContext<any>('');


interface dataLayerProps {
    reducer: any
    initialState: any,
    children: any
}
// Wrap our app and provide the dataLayer
export const DataLayer: React.FC<dataLayerProps> = ({ reducer, initialState, children}) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </DataLayerContext.Provider>
);

// Pull information from the data layer
export const useDataLayerValue = () => useContext(DataLayerContext)