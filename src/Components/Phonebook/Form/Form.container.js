import { connect } from 'react-redux';
import phoneBookActions from '../../../redux/Phonebook/phoneBook-action';
import Form from './Form';

const mapStateToProps = state => ({
  contactName: state.phoneList.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(phoneBookActions.addPhone(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
