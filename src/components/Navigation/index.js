import {connect} from 'react-redux'
import Container from './container'
import {actionCreators} from 'redux/modules/user'

const mapDispatchToProps=(dispatch)=>{
  return{
    logout:()=>{dispatch(actionCreators.logout())}
  }
};
export default connect(null,mapDispatchToProps)(Container)