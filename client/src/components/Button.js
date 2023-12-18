import React from 'react';

function Button({ callback, className, text, type, icon, disabled }) {
  return (
    <button
      onClick={callback}
      className={className}
      type={type}
      disabled={disabled}
    >
      {text}
      {icon}
    </button>
  );
}

export default Button;
