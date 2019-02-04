//import
//actions
const SAVE_TOKEN = 'SAVE_TOKEN';
//actions creators
const saveToken = token =>{
  return {
    type:SAVE_TOKEN,
    token
  }
};
// API actions
function naverLogin(access_token){
  return dispatch=>{
    fetch('/rest-auth/naver/',{
      method:'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        access_token
      })
    })
      .then(res=>res.json())
      .then(json=>{
        if(json.token){
          localStorage.setItem('jwt',json.token)
          dispatch(saveToken(json.token))
        }
      })
      .catch(err=>console.log(err))
  }
}

// init state
const initialState = {
  isLoggedIn:localStorage.getItem('jwt') ? true : false,
};

// reducer
function reducer(state=initialState, action){
  switch(action.type){
    case SAVE_TOKEN:
      return applySetToken(state,action);
    default:
      return state
  }
}

//reducer func
const applySetToken = (state,action)=>{
  const {token} = action;
  console.log(action)
  return {
    ...state,
    isLoggedIn: true,
    token
  }
}

//export
const actionCreators = {
  naverLogin,
};

export {actionCreators};

//reducer export
export default reducer;