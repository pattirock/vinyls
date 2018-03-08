import { connect } from 'react-redux';
import SignIn from './SignIn.js';

// import { SignIn } from '../../reducers/self/actions.js';

// const mapStateToProps = state => ({
//   vinyls: state.vinyl
// });

const mapDispatchToProps = (dispatch) => ({ 
  submit: values => {
    console.log(values)
  }
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);