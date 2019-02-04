import {connect} from 'react-redux';
import Container from './container'
import {actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps)=>{
  return{
    naverLogin:(access_token)=>{
      dispatch(userActions.naverLogin(access_token))
    },
    usernameLogin:(username,pwd)=>{
      dispatch(userActions.usernameLogin(username,pwd))
    }
  }
};

export default connect(null,mapDispatchToProps)(Container);