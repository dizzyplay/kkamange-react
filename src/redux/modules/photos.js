import {actionCreators as userActions} from "./user";
//actions
const SET_FEED = "SET_FEED";

//action creators
function setFeed(feed){
  return{
    type:SET_FEED,
    feed
  };
}

//API action
function getFeed(){
  return (dispatch, getState)=>{
    const { user:{token}} = getState();
    fetch("/blog/api/",{
      headers:{
        Authorization: `JWT ${token}`
      }
    })
      .then(res=>{
        if(res.status === 401){
          dispatch(userActions.logout());
        }
        return res.json()
      })
      .then(json=>{
        dispatch(setFeed(json))
      })
  }
}

//initState
const initialState = {};

//reducer
const reducer = (state=initialState,action)=>{
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state,action)
    default:
      return state;
  }
};

//reducer func
function applySetFeed(state, action){
  const {feed} =action;
  return {
    ...state,
    feed
  };
}

//export
const actionCreators={
  getFeed,
};

export {actionCreators};

export default reducer;