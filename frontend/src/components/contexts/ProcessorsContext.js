import { createContext, useReducer } from "react";

export const ProcessorsContext = createContext();

export const ProcessorDispatch = createContext();

export default function ProcessorProvider({children, initialProcessors}){
    const [state, dispatch] = useReducer(processorReducer,{
        processors: initialProcessors
    })

    return(
    <div>
        <ProcessorsContext.Provider value={state.processors}>
            <ProcessorDispatch.Provider value={dispatch}>
                {children}
            </ProcessorDispatch.Provider>
        </ProcessorsContext.Provider>
    </div>)
}

function processorReducer(state, action){
    switch(action.type){
        case 'ADD_PROCESSOR':{
            return {...state, processors:[...state.processors, action.item]};
        }
        case 'UPDATE_PROCESSOR':{
            return{
                ...state, processors: state.processors.map((processor) => {
                    if(processor.processorId === action.item.processorId){
                        processor = action.item;
                        return{...processor, processor:action.item};
                    }
                    return processor;
                })
            }
        }
        case 'DELETE_PROCESSOR': {
            console.log(state.processors.filter(
                (processor) => 
                processor.processorId !== action.processorId
            ));
            return {
                ...state,
                processors: state.processors.filter((processor) => processor.processorId !== action.processorId)
            }
        }
        default:{
            throw new Error("Unknown action");
        }
    }
}