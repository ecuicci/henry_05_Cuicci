import React from 'react';

const styles = {
  Button: {
    cursor: 'pointer',
    top: '16px',
    left: '1221px',
    width: '99px',
    height: '40px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '24px',
    backgroundColor: '#ffffff',
    color: '#161616',
    fontSize: '16px',
    fontFamily: 'Open Sans',
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