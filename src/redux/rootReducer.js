import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

const initState={
    cities:[],
    FilterCities:[],
    Itinerary:[],
    Activity:[],
    Account:[]
}

const rootReducer=(state=initState,action) =>{
    // console.log(action);
    
    switch (action.type){
        case 'GET_CITIES': return {
            ...state,
            cities:action.payload,
            FilterCities:action.payload
        }
        case 'FILTER_CITIES': return{
            ...state,
            FilterCities:action.payload
        }
        case 'GET_ITINERARY': return{
            ...state,
            Itinerary:action.payload
        }
        case 'GET_ACTIVITIES': return{
            ...state,
            Activity:action.payload
        }
        case 'GET_ACCOUNT':return{
            ...state,
            Account:action.payload
        }
        default: return state
    }

}

export default createStore(rootReducer, applyMiddleware(thunk));