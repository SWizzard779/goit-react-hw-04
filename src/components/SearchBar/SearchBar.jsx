import css from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';
import { IoIosSearch } from 'react-icons/io';
import { toast } from 'react-hot-toast';

export default function SearchBar({ onSubmit }) {
  return (
    <header className={css.SearchBar_container}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          if (!values.query.trim()) {
            toast.error('Please enter the query text', {
              duration: 5000,
              position: 'top-right',
              style: {
                color: 'blue',
                backgroundColor: 'white',
              },
            });
            actions.resetForm();
            return;
          }
          onSubmit(values.query);
          actions.resetForm();
        }}
      >
        <Form className={css.SearchBar_form}>
          <button className={css.SearchBar_btn} type="submit">
            <IoIosSearch />
          </button>
          <Field
            className={css.SearchBar_input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
}