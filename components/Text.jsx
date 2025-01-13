import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Open Sans',
    fontWeight: 700,
    lineHeight: '24px',
  },
};

const defaultProps = {
  text: 'Para estudiantes',
};

const Text = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default Text;