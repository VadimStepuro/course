import { createContext, useReducer } from "react";

export const RamContext = createContext();

export const RamDispatch = createContext();

export default function RamProvider({children, initialRam}){
    const [state, dispatch] = useReducer(ramReducer,{
        ram: initialRam
    })

    return(
    <div>
        <RamContext.Provider value={state.ram}>
            <RamDispatch.Provider value={dispatch}>
                {children}
            </RamDispatch.Provider>
        </RamContext.Provider>
    </div>)
}

function ramReducer(state, action){
    switch(action.type){
        case 'ADD_RAM':{
            return {...state, ram:[...state.ram, action.item]};
        }
        case 'UPDATE_RAM':{
            console.log(action.item)
            return{
                ...state, ram: state.ram.map((ram) => {
                    if(ram.ramId === action.item.ramId){
                        ram = action.item;
                        return{...ram, ram:action.item};
                    }
                    return ram;
                })
            }
        }
        case 'DELETE_RAM': {
            return {
                ...state,
                ram: state.ram.filter((ram) => ram.ramId !== action.ramId)
            }
        }
        default:{
            throw new Error("Unknown action");
        }
    }
}