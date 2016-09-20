import React, { Component } from 'react';
import Radium from 'radium';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class Welcome extends Component {
  getStyles(){
    return {
      container: {
        margin: '0',
        padding: '0',
        backgroundImage: 'url(/images/bg-running-man.jpg)',
        backgroundPosition: 'center center',
        backgroundRepead: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%',
        position: 'absolute',
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
        color: '#fff',
        fontSize: '20px',
        letterSpacing: '3px',
        borderRadius: '5px',
        textDecoration: 'none',
        ':hover': {
          transform: 'scale(1.2)'
        }
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

export default Radium(Welcome);
