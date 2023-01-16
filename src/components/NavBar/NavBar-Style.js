const style = (styleName, theme) => {

  const style = {
    'appBar-style': {
      position: 'relative',
      paddingRight: '0px !important',
      backgroundColor: 'inherit',
      boxShadow: 'none',
    },
    'navBar-links': {
      color: '#000',
      fontFamily: 'poppins',
      size: 80,
    }
  };
  return style[styleName];
};
export default style;