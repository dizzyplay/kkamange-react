//import
//actions

//actions creators

// init state
const initState = {
  isLoggedIn:localStorage.getItem('jwt') || false,
}
// reducer
function reducer(state=initState, action){
  switch(action.type){
    default:
      return state
  }
}

//reducer func

//export

//reducer export
export default reducer;