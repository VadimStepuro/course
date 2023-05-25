import { createContext, useReducer } from "react";

export const VideocardContext = createContext();

export const VideocardDispatch = createContext();

export default function VideocardProvider({children, initialVideocards}){
    const [state, dispatch] = useReducer(videocardReducer,{
        videocards: initialVideocards
    })

    return(
    <div>
        <VideocardContext.Provider value={state.videocards}>
            <VideocardDispatch.Provider value={dispatch}>
                {children}
            </VideocardDispatch.Provider>
        </VideocardContext.Provider>
    </div>)
}

function videocardReducer(state, action){
    switch(action.type){
        case 'ADD_VIDEOCARD':{
            return {...state, videocards:[...state.videocards, action.item]};
        }
        case 'UPDATE_VIDEOCARD':{
            return{
                ...state, videocards: state.videocards.map((videocard) => {
                    if(videocard.videocardId === action.item.videocardId){
                        videocard = action.item;
                        return{...videocard, videocard:action.item};
                    }
                    return videocard;
                })
            }
        }
        case 'DELETE_VIDEOCARD': {
            return {
                ...state,
                videocards: state.videocards.filter((videocard) => videocard.videocardId !== action.videocardId)
            }
        }
        default:{
            throw new Error("Unknown action");
        }
    }
}