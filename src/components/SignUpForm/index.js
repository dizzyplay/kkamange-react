import {connect} from 'react-redux';
import Container from './container'
import {actionCreators as userActions} from 'redux/modules/user'

const mapDispatchToProps = (dispatch)=>{
  return{
    userSignup:(username,email,password1, password2, nickname, gender)=>{
      dispatch(userActions.userSignup(username,email,nickname, password1,password2,gender))
    }
  }
}
export default connect(null,mapDispatchToProps)(Container);