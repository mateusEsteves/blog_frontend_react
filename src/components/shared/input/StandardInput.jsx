import React, { forwardRef } from 'react';
import styles from './StandardInput.module.css';

function Input({
  hasError, type, name, label, errorMsg, inputContainerClass,
}, ref) {
  return (
    <div className={inputContainerClass}>
      <label htmlFor={name} className={styles.Label}>{label}</label>
      <input type={type} name={name} ref={ref} id={name} className={styles.Input} />
      {hasError && <p className={styles.ErrorMsg}>{errorMsg}</p>}
    </div>
  );
}

export default forwardRef(Input);
