import { Action } from '@remix-run/router';
import React, { createContext, useContext, useReducer } from 'react'
const FavStateContext= createContext();
const FavDispatchContext=createContext();

const reducer = (state,action)=>{

}

export const Fav =({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return (
              <FavDispatchContext.Provider value={dispatch}>
                <FavStateContext.Provider value={state}>
                    {children}
                </FavStateContext.Provider>
              </FavDispatchContext.Provider>
    )
}
export const useFav = ()=>useContext(FavStateContext);
export const useDispatchFav = ()=>useContext(FavDispatchContext);
