import React, { useState } from 'react';
import './PasswordGenerator.css';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const numbers = '0123456789';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()_+{}:"<>?|';

    let validChars = '';
    if (includeNumbers) validChars += numbers;
    if (includeUppercase) validChars += upperCaseLetters;
    if (includeLowercase) validChars += lowerCaseLetters;
    if (includeSymbols) validChars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  return (
    <div className="password-generator">
      <h1>Password Generator</h1>
      <div className="password-generator__control">
        <label>Password Length: </label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="password-generator__input"
        />
      </div>
      <div className="password-generator__control">
        <label>Include Numbers: </label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          className="password-generator__checkbox"
        />
      </div>
      <div className="password-generator__control">
        <label>Include Uppercase Letters: </label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
          className="password-generator__checkbox"
        />
      </div>
      <div className="password-generator__control">
        <label>Include Lowercase Letters: </label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
          className="password-generator__checkbox"
        />
      </div>
      <div className="password-generator__control">
        <label>Include Symbols: </label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
          className="password-generator__checkbox"
        />
      </div>
      <button className="password-generator__button" onClick={generatePassword}>Generate Password</button>
      <div className="password-generator__result">
        <label>Generated Password: </label>
        <input className="password-generator__password" type="text" value={password} readOnly />
      </div>
    </div>
  );
};

export default PasswordGenerator;
