import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

export default (state, action) => {
    console.log(action);
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS: {
      return {
        ...state,
        users: [],
        loadin: false,
      };
    }
    case GET_REPOS:{
      return{
        ...state,
        repos: action.payload,
        laoading: false
      }
    }

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
