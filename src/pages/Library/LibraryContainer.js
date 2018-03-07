import { connect } from 'react-redux';
import Library from './Library.js';

import { getVinyls } from '../../reducers/vinyl/actions.js';

const mapStateToProps = state => ({
  vinyls: state.vinyl
});

const mapDispatchToProps = (dispatch) => ({ 
  getVinyls: () => dispatch(getVinyls()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Library);