//import
//actions

//actions creators

// init state
const initialState = {
  isLoggedIn:localStorage.getItem('jwt') || false,
}
// reducer
function reducer(state=initialState, action){
  switch(action.type){
    default:
      return state
  }
}

//reducer func

//export

//reducer export
export default reducer;