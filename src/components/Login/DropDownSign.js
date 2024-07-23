import React, { useState } from 'react';
import styles from './LogSign.module.css'
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'Alumni', label: 'Alumni' },
    { value: 'Mentor', label: 'Mentor' },
    { value: 'Organization', label: 'Organization' },
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdowncontainer}>
      <button className={styles.dropdowntoggle} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : 'Select an option'}
        <span className={`arrow ${isOpen ? 'open' : ''}`} />
      </button>
      {isOpen && (
        <ul className= {styles.dropdownmenu}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;