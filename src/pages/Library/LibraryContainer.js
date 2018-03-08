import { connect } from 'react-redux';
import Library from './Library';

import { getVinyls } from '../../reducers/vinyl/actions';

const mapStateToProps = state => ({
  vinyls: state.vinyl,
});

const mapDispatchToProps = dispatch => ({
  getVinyls: () => dispatch(getVinyls()),
});

const LibraryContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Library);

export default LibraryContainer;
