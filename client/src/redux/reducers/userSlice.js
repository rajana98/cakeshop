import {ADD_USER_DETAILS,REMOVE_USER_DETAILS_LOGOUT,} from "../actionTypes/actionTypes";
  
  const initialState = {
    firstName:"",
    email: "",
    phoneNumber:"",
    token: "",
    _id:""
  };
  
  const userSlice = (state = initialState, action) => {
    switch (action.type) {
      case ADD_USER_DETAILS:
        const { email,phoneNumber,firstName,token,_id } = action.payload;
        return {
          ...state,
          firstName,
          email,
          phoneNumber,
          token,
          _id
        };
        case REMOVE_USER_DETAILS_LOGOUT:
      return {
        ...state,
        firstName:"",
        email:"",
        phoneNumber:"",
        token:"",
        _id:""
      };
      default:
        return state;
    }
  };
  
  export default userSlice;