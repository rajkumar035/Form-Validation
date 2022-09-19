import React from 'react';

const JsForms = () => {
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
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Polynesia',
    'French West Indies',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
  ];
  const HandlePhone = (e) => {
    var Phoneval = e.target.value;
    const pherror = document.getElementById('Ph-error');
    Phoneval.length >= 8 && Phoneval.length <= 12 ? (pherror.style.display = 'none') : (pherror.style.display = 'block');
  };
  const HandlePass = (e) => {
    var pswval = e.target.value;
    const passerror = document.getElementById('passerror');
    const ptrn = /(?=(.*\d){3})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[!@#$%^&*]){2})/;
    if (ptrn.test(pswval)) {
      passerror.style.display = 'none';
      document.querySelector('#conpswval').disabled = false;
    } else {
      passerror.style.display = 'block';
    }
  };
  const HandleConfrm = () => {
    const pswval = document.querySelector('#psw').value;
    const confrpsw = document.querySelector('#conpswval').value;
    pswval !== confrpsw ? (document.getElementById('error').style.display = 'block') : (document.getElementById('error').style.display = 'none');
  };
  const HandleButton = () => {
    const agree = document.getElementById('agree');
    const recieve = document.getElementById('receive');
    agree.checked && recieve.checked ? (document.getElementById('btn-sub').disabled = false) : (document.getElementById('btn-sub').disabled = true);
  };
  const HandleCheckbox = () => {
    const copy = document.querySelector('#copy');
    var home = document.getElementById('homeAdd').value;
    var office = document.getElementById('offAdd');
    copy.checked ? (office.value = home) : (office.value = '');
  };
  const HandleSubmit = () => {
    const arr = [];
    const firstname = document.getElementById('firstName').value;
    const lastname = document.getElementById('lastName').value;
    const username = document.getElementById('userName').value;
    const phone = document.getElementById('phn').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const company = document.getElementById('company').value;
    const home = document.getElementById('homeAdd').value;
    const office = document.getElementById('offAdd').value;
    const password = document.getElementById('psw').value;
    const countries = document.getElementById('country').value;
    const gender = document.getElementById('gender').value;
    arr.push(firstname, lastname, username, phone, email, date, company, home, office, password, countries, gender);
    alert(arr);
  };
  return (
    <>
      <div class='card' className='main'>
        <h4>Registration Form</h4>
        <div class='cardbody p-3'>
          <form onSubmit={HandleSubmit}>
            <div className='cont'>
              <input id='firstName' placeholder='First Name' type='text' required />
              <input id='lastName' placeholder='Last Name' type='text' required />
            </div>
            <div className='cont'>
              <input id='userName' placeholder='User Name' type='text' required />
              <div>
                <input id='phn' placeholder='Phone Number' type='number' onChange={HandlePhone} required />
                <small id='Ph-error'>9 - 12 Number only</small>
              </div>
            </div>
            <input id='email' type='email' placeholder='Your E-Mail Address' required />
            <div className='cont'>
              <select id='gender' required>
                <option value='' selected disabled style={{fontWeight: 'bolder'}}>
                  Gender
                </option>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
              <input id='date' type='date' placeholder='Date of Birth: DD/MM/YY' required />
            </div>
            <div className='cont'>
              <select id='country' required>
                <option value='' selected disabled style={{fontWeight: 'bolder'}}>
                  Country
                </option>
                {country_list.map((x) => (
                  <option value={x}>{x}</option>
                ))}
              </select>
              <input id='company' placeholder="Your Company's Name" type='text' required />
            </div>
            <div className='cont'>
              <input placeholder='Home Address' id='homeAdd' required />
              <input placeholder='Office Address' id='offAdd' required />
            </div>
            <div className='conts'>
              <input type='checkbox' id='copy' onChange={HandleCheckbox} />
              <label style={{fontSize: '14px'}}>If your home and office address are same</label>
            </div>
            <div className='cont'>
              <div>
                <input placeholder='Password' id='psw' required onChange={HandlePass} />
                <small id='passerror'>Invalid Password</small>
              </div>
              <div id='conpsw'>
                <input placeholder='Confirm Password' id='conpswval' onChange={HandleConfrm} required disabled />
                <small id='error'>password not matched</small>
              </div>
            </div>
            <div className='cont'>
              <div className='conts'>
                <input type='checkbox' id='agree' required onChange={HandleButton} />
                <label style={{fontSize: '14px'}}>I agree with the terms & conditions</label>
              </div>
              <div className='conts'>
                <input type='checkbox' id='receive' required onChange={HandleButton} />
                <label style={{fontSize: '14px'}}>Recieve best offers and updates</label>
              </div>
            </div>
            <button id='btn-sub' type='submit' disabled>
              Register
            </button>
            <small style={{display: 'block', textAlign: 'center'}}>
              <a style={{textDecoration: 'none', fontSize: '13px'}} href='#'>
                Already Having a account ?
              </a>
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default JsForms;
