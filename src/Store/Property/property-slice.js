import { createSlice } from "@reduxjs/toolkit";

const propertySlice=createSlice({
    name:"property",
    //initial state for the property slice
    initialState:{
        properties:[],
        totalProperties:0,
        searchParams:{},
        error:null,
        loading:false,
    },
    reducers:{
        getRequest(state){
            state.loading=true;
        },
        getProperties(state,action){
            state.properties=action.payload.data;
            state.totalProperties=action.payload.all_properties;
            state.loading=false;
        },
        //action to search parameters
        updateSearchParams:(state,action)=>{
            state.searchParams=Object.keys(action.payload).length ===0 
            ? {} :
            {
                ...state.searchParams,
                ...action.payload,
            };
        },
        //action to update error state
        getErrors(state,action){
            state.error=action.payload;
        },
    },
});

export const propertyAction = propertySlice.actions;

export default propertySlice;