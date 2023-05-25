import { createContext, useReducer } from "react";

export const MealtimeContext = createContext([]);

export const MealtimeDispatch = createContext();

export default function MealtimeProvider({children, initialMealtimes}){
    const [state, dispatch] = useReducer(mealtimeReducer, {
        mealtimes: initialMealtimes
    })

    return(
        <div>
            <MealtimeContext.Provider value={state.mealtimes}>
                <MealtimeDispatch.Provider value={dispatch}>
                    {children}
                </MealtimeDispatch.Provider>
            </MealtimeContext.Provider>
        </div>
    )

}

function mealtimeReducer(state, action){
    switch(action.type){
        default:{
            throw Error('unknown action')
        }
    }
}

