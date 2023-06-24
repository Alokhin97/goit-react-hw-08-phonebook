import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  FormButton,
  FormContact,
  FormInput,
  FormLabel,
} from './ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contactData = { name, number };
    form.reset();
    if (contacts.find(contact => contact.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return false;
    }

    dispatch(addContact(contactData));
    form.reset();
  };

  return (
    <>
      <FormContact onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            required
          />
        </FormLabel>
        <FormLabel className="Form_label">
          Number
          <FormInput
            type="tel"
            name="number"
            required
          />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </FormContact>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.object,
};