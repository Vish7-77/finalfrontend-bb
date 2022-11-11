import  {createReducer} from "@reduxjs/toolkit"



const intState={
    user:false
}

export const customReducer=createReducer(intState,{
    loginUser:(state,action)=>{
        state.user=true;
    },
    logout:(state,action)=>{
       state.user=false;
    }
});
