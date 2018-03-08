import { connect } from 'react-redux';
import { submit } from 'redux-form';
import SignIn from './SignIn';
import { signIn } from '../../reducers/user/actions';
import { goLibrary } from '../../reducers/navigation/actions';

const mapDispatchToProps = dispatch => ({
  handleFormSubmit: () => {
    dispatch(submit('signin'));
  },
  onSubmit: (data) => {
    dispatch(signIn(data))
      .then(({ payload }) => {
        if (payload.data.login) {
          dispatch(goLibrary());
        } else {
          dispatch(goLibrary());
        }
      });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(SignIn);
