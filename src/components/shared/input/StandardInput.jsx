import React, { forwardRef } from 'react';

function Input({
  hasError, type, name, label, errorMsg,
}, ref) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} ref={ref} id={name} />
      {hasError && <span>{errorMsg}</span>}
    </div>
  );
}

export default forwardRef(Input);
