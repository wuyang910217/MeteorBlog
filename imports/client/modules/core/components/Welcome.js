import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Welcome extends Component {
  getStyles() {
    return {
      container: {
        backgroundImage: 'url(/images/bg-running-man.jpg)',
        backgroundPosition: 'center center',
        backgroundRepead: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        position: 'absolute',
      },
      home: {
        textAlign: 'center',
        margin: '0 auto',
        width: '100%',
        height: '100vh',
        background: 'rgba(0,0,0,0.3)',
        marginTop: '150px',
      },
      link: {
        display: 'inline-block',
        color: '#fff',
        background: '#0277BD',
        border: '2px solid #fff',
        padding: '10px 20px',
        fontSize: '20px',
        borderRadius: '5px',
        textDecoration: 'none',
      },
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.container}>
        <div style={styles.home}>
          <a href="/" style={styles.link}>去首页</a>
        </div>
      </div>
    );
  }
}

export default Welcome;
