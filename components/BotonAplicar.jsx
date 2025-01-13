import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '104px',
    left: '1300px',
    width: '134px',
    height: '30px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#ffffff',
    color: '#161616',
    fontSize: '16px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '24px',
    outline: 'none',
  },
};

const defaultProps = {
  label: 'Aplicar',
};

const Button = (props) => {
  return (
    <button style={styles.Button}>
      {props.label ?? defaultProps.label}
    </button>
  );
};

export default Button;