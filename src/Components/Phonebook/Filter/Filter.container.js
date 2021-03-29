import { connect } from 'react-redux';
import phoneBookActions from '../../../redux/Phonebook/phoneBook-action';
import Filter from './Filter';

const mapStateToProps = state => ({
  value: state.phoneList.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(phoneBookActions.changeFilter(e.target.value)),
  onBlur: () => dispatch(phoneBookActions.clearFilter('')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
