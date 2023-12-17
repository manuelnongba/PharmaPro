import React from 'react';

function Button({ callback, className, text, type }) {
  return (
    <button onClick={callback} className={className} type={type}>
      {text}
    </button>
  );
}

export default Button;
