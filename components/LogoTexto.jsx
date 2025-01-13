import React from 'react';

const styles = {
    LogoText: {
    color: '#ffffff',
    fontSize: '24px',
    fontFamily: 'Open Sans',
    letterSpacing: '-0.6px',
    lineHeight: '32px',
  },
};

const defaultProps = {
  text: 'Henry',
};

const LogoText = (props) => {
  return (
    <div style={styles.LogoText}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default LogoText;