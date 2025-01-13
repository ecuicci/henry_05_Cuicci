import React from 'react';

const styles = {
  Text: {
    color: '#ffffff',
    fontSize: '48px',
    fontFamily: 'Open Sans',
    fontWeight: 700,
    lineHeight: '57px',
    textAlign: 'center',
  },
};

const defaultProps = {
  text: 'Comienza o acelera tu carrera en tecnología',
};

const HeroSection = (props) => {
  return (
    <div style={styles.Text}>
      {props.text ?? defaultProps.text}
    </div>
  );
};

export default HeroSection;
