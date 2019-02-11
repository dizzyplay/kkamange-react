//import
//actions
const SAVE_TOKEN = 'SAVE_TOKEN';
const LOGOUT = 'LOGOUT';

//actions creators
const saveToken = token =>{
  return {
    type:SAVE_TOKEN,
    token
  }
};

const logout = ()=>{
  return{
    type:LOGOUT,
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
      .catch(err=>alert("로그인중 오류가 발생했습니다.\n"+err))
  }
}

const userSignup = ({username,email,nickname,password1,password2})=>{
  return dispatch=>{
    fetch('/rest-auth/registration/',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username,
        email,
        nickname,
        password1,
        password2
      })
    })
      .then(res=>res.json())
      .then(json=>{
        if(json.token){
          localStorage.setItem('jwt',json.token);
          dispatch(saveToken(json.token))
        }
      })
      .catch(err=>console.log(err))
  }
};

const usernameLogin = (username, password)=>{
  return dispatch=>{
    fetch('/rest-auth/login/',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        username,
        password
      })
    })
      .then(res=> res.json())
      .then(json=>{
        if(json.token){
          localStorage.setItem('jwt',json.token);
          dispatch(saveToken(json.token));
        }
        else{
          alert('로그인정보가 잘못되었습니다.')
        }
      })
      .catch(err=>{
        console.log(err)
      })
  }
};

// init state
const initialState = {
  isLoggedIn:localStorage.getItem('jwt') ? true : false,
  token: localStorage.getItem('jwt')
};

// reducer
function reducer(state=initialState, action){
  switch(action.type){
    case SAVE_TOKEN:
      return applySetToken(state,action);
    case LOGOUT:
      return applyLogout(state,action);
    default:
      return state
  }
}

//reducer func
const applySetToken = (state,action)=>{
  const {token} = action;
  return {
    ...state,
    isLoggedIn: true,
    token
  }
};

const applyLogout = (state,action)=>{
  localStorage.removeItem('jwt');
  return {
    isLoggedIn: false,
  }
};
//export
const actionCreators = {
  naverLogin,
  usernameLogin,
  userSignup,
  logout,
};

export {actionCreators};

//reducer export
export default reducer;