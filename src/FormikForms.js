import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const FormikForms = () => {
  var country_list = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Anguilla',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Botswana',
    'Brazil',
    'British Virgin Islands',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Cape Verde',
    'Cayman Islands',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Cote D Ivoire',
    'Croatia',
    'Cruise Ship',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
  ];
  const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    phoneNumber: '',
    gender: '',
    email: '',
    date: '',
    country: '',
    company: '',
    officeaddress: '',
    homeaddress: '',
    Addressvalidation: '',
    password: '',
    confirmpassword: '',
  };
  const onSubmit = (values) => {
    console.log('Form Values', values);
  };
  const validate = (values) => {
    let error = {};
    const phonenumber = document.getElementById('phoneNumber').value;
    for (const key in values) {
      if (!values[key]) {
        error[key] = `${key} is required!`;
      }
      if (!/(?=(.*\d){3})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%^&*]){2})/.test(values.password)) {
        error.password = ' must contains 2 Uppercase, Lowercase, specialcharacters and 3 numerics';
      }
      if (values.password !== values.confirmpassword) {
        error.confirmpassword = ' Not matched with the password';
      }
      if (phonenumber.length < 8 || phonenumber.length > 12) {
        error.phoneNumber = 'Invalid';
      }
      values.Addressvalidation === true ? (values.officeaddress = values.homeaddress) : (values.officeaddress = '');
    }
    return error;
  };
  return (
    <>
      <div class='card' className='main'>
        <h4>Registration Form</h4>
        <div class='cardbody p-3'>
          <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <Form>
              <div className='cont'>
                <div>
                  <Field placeholder='First Name' type='text' id='firstName' name='firstName' />
                  <ErrorMessage className='error' component='small' name='firstName' />
                </div>
                <div>
                  <Field placeholder='Last Name' type='text' id='lastName' name='lastName' />
                  <ErrorMessage className='error' component='small' name='lastName' />
                </div>
              </div>
              <div className='cont'>
                <div>
                  <Field placeholder='User Name' type='text' id='userName' name='userName' />
                  <ErrorMessage className='error' component='small' name='userName' />
                </div>
                <div>
                  <Field placeholder='Phone Number' type='number' id='phoneNumber' name='phoneNumber' />
                  <ErrorMessage className='error' component='small' name='phoneNumber' />
                </div>
              </div>
              <div>
                <Field type='email' placeholder='Your E-Mail Address' name='email' />
                <ErrorMessage className='error' component='small' name='email' />
              </div>
              <div className='cont'>
                <div>
                  <Field component='select' id='gender' name='gender'>
                    <option value='' disabled>
                      <b>Gender</b>
                    </option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </Field>
                  <ErrorMessage className='error' component='small' name='gender' />
                </div>
                <div>
                  <Field placeholder='DD-MM-YYYY' type='date' name='date' />
                  <ErrorMessage className='error' component='small' name='date' />
                </div>
              </div>
              <div className='cont'>
                <div>
                  <Field component='select' name='country' id='country'>
                    <option value='' disabled>
                      <b>Countries</b>
                    </option>
                    {country_list.map((x) => (
                      <option value={x}>{x}</option>
                    ))}
                  </Field>
                  <ErrorMessage component='small' className='error' name='country' />
                </div>
                <div>
                  <Field placeholder='Company' type='text' name='company' />
                  <ErrorMessage name='company' component='small' className='error' />
                </div>
              </div>
              <div className='cont'>
                <div>
                  <Field placeholder='Home Address' type='text' name='homeaddress' />
                  <ErrorMessage component='small' className='error' name='homeaddress' />
                </div>
                <div>
                  <Field placeholder='Office Address' type='text' name='officeaddress' />
                  <ErrorMessage component='small' className='error' name='officeaddress' />
                </div>
              </div>
              <div className='conts'>
                <Field type='checkbox' name='Addressvalidation' />
                <label className='checkLabel'>If your Home and Office address are same</label>
              </div>
              <div className='cont'>
                <div>
                  <Field placeholder='Password' type='text' name='password' />
                  <ErrorMessage component='small' className='error' name='password' />
                </div>
                <div>
                  <Field placeholder='Confirm Password' type='text' name='confirmpassword' />
                  <ErrorMessage component='small' className='error' name='confirmpassword' />
                </div>
              </div>
              <button id='btn-sub' type='submit'>
                Register
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default FormikForms;
