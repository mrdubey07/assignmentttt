import { AddStatsToRedux, AddUserToRedux, SEARCH, SETPRODUCTS, SETVALUE } from "../actions/ActionConstants";


const defaultState = {
    users:[],
    stats:[],
    search: [],
    value: '',
    searchedProduct: []
}

const userReducer = (state = defaultState, action) => {
    switch(action.type){
        case AddUserToRedux:
            return {
                ...state,
                users: action.payload
            }

        case AddStatsToRedux:
            return {
                ...state,
                stats: action.payload
            }

        case SETVALUE: {
            return {
                ...state,
                value: action.payload
            }
        }

        case SETPRODUCTS :{
            return {
                ...state,
                search: state.users
            }
        }

        case SEARCH: {
            const value = state.value;
            // console.log(value)
            if(value !== ""){
            const searchArrayUsers = state.search.filter((user) => user.name.toLowerCase().includes(value.trim().toLowerCase()));
            // console.log(searchArrayUsers);
            return {
                ...state, 
                searchedProduct: searchArrayUsers
            };
        }
        return {...state};
        }

        default: 
            return state;
    }
}

export default userReducer;