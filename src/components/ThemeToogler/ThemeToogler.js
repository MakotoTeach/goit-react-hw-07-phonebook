import React from 'react';
import withTheme from '../../hoc/withTheme'


const  ThemeToogler = ({themeType, toggleTheme})  => (
  <div className="theme-selector">
    <span className="label">Toogle theme({themeType})</span>
    <label className="switch">
      <input type="checkbox" checked={themeType === 'light'} onChange={toggleTheme} />
      <span className="slider round"></span>
    </label>
  </div>
)
  
  
  


export default withTheme(ThemeToogler);