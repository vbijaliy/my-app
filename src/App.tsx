import React, { useState } from 'react';
import { ThemeSwitch, Button, BreadCrumb, Input, validateOne, ValidatorConstants } from 'switch-themes';
import './App.css';


function App() {

  const [theme, setTheme] = useState('light');
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleValidateInput = () => {
    console.log(validateOne({ type: ValidatorConstants.LENGTH_MIN, minLength: 9 }, value))
  }

  return (
      <ThemeSwitch themeState={theme}>
        <Input type="text" placeHolder='text' value={value} onChange={handleInputChange} /><br />

        <Button className='h' label={"validate"} handleClick={handleValidateInput} />
        <BreadCrumb
          className='h'
          arr={[
            { display: 'profile', routeTo: '' },
            { display: 'change-password', routeTo: '' },
          ]} />
        <Button className='hello' label={theme} handleClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      </ThemeSwitch>
  );
}

export default App;
