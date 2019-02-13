//import
//actions
const SAVE_TOKEN = 'SAVE_TOKEN';
const LOGOUT = 'LOGOUT';
const SAVE_USER = 'SAVE_USER';

//actions creators
const saveToken = token =>{
  return {
    type:SAVE_TOKEN,
    token
  }
};

const saveUser = data =>{
  console.log(data)
  return{
    type:SAVE_USER,
    token:data.token,
    username:data.username
  }
};
const logout = ()=>{
  return{
    type:LOGOUT,
  }
};
// API actions
function getUserInformation(){
  const token = localStorage.getItem('jwt')
  return dispatch=>{
    fetch('/api-token-verify/',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        token
      })
    })
      .then(res=>res.json())
      .then(json=>dispatch(saveUser(json)))
  }
}
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
  token: localStorage.getItem('jwt'),
  username:''
};

// reducer
function reducer(state=initialState, action){
  switch(action.type){
    case SAVE_USER:
      return applyUserInformation(state,action);
    case SAVE_TOKEN:
      return applySetToken(state,action);
    case LOGOUT:
      return applyLogout(state,action);
    default:
      return state
  }
}

//reducer func
const applyUserInformation = (state, action)=>{
  const {username} = action;
  return{
    ...state,
    username
  }
};

const applySetToken = (state,action)=>{
  const {token} = action;
  localStorage.setItem('jwt',token);
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
  getUserInformation,
  naverLogin,
  usernameLogin,
  userSignup,
  logout,
};

export {actionCreators};

//reducer export
export default reducer;