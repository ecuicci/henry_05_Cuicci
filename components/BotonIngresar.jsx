import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '104px',
    left: '1153px',
    width: '113px',
    height: '30px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#e90005',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '24px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Ingresar',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;