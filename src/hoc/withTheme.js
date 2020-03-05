import React from 'react';
import ThemeContext from '../context/ThemeContext'


const withTheme = WrappedComponent => {
  return function withTheme(props) {
    return(
      <ThemeContext.Consumer>
        {value => <WrappedComponent {...props} {...value}/>}
      </ThemeContext.Consumer>
    )
  }
}

export default withTheme;