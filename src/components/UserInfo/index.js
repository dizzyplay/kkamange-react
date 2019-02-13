import {connect} from 'react-redux'
import Container from './container';
import {actionCreators as userActions} from 'redux/modules/user'

const mapStateToProps =(state)=> {
  return{username:state.user.username}
};

const mapDispatchToProps = {
  getUserInformation: userActions.getUserInformation
};
export default connect(mapStateToProps,mapDispatchToProps)(Container);