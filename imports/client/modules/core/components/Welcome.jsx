import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Welcome extends Component {
  getStyles(){
    return {
      container: {
        margin: '0',
        padding: '0',
        backgroundImage: 'url(/images/bg-running-man.jpg)',
        backgroundPosition: 'center center',
        backgroundRepead: 'no-repeat',
        backgroundSize: 'cover',
        heigth: '100vh',
      },
      home: {
        display: 'flex',
        heigth: '100%',
        background: 'rgba(0,0,0,0.3)',
        alignItems: 'flex-end',
        justifyContent: 'center',
      },
      link: {
        display: 'inline-block',
        padding: '15px 25px',
        color: '#fff',
        fontSize: '20px',
        letterSpacing: '3px',
        borderRadius: '5px',
        textDecoration: 'none',
      },
    };
  }

  render(){
    const styles = this.getStyles();
    return(
      <div style={ styles.container }>
        <div style={ styles.home }>
          <a href="#" style={ styles.link }>去首页</a>
        </div>
      </div>
    );
  }
}

