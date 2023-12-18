import React from 'react';

function Button({ callback, className, text, type, icon }) {
  return (
    <button onClick={callback} className={className} type={type}>
      {text}
      {icon}
    </button>
  );
}

export default Button;
