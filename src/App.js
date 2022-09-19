import React from 'react';
import FormikForms from './FormikForms';
import JsForms from './JsForms';

function App() {
  for (let i = 0; i < 5; i++) {
    function test() {
      setTimeout(console.log(i), 10000);
    }
    test();
  }
  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
  return (
    <div className='App'>
      {/* <JsForms /> */}
      <FormikForms />
    </div>
  );
}

export default App;
