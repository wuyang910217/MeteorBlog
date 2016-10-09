import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { white, cyan500 } from 'material-ui/styles/colors';

class NotFound extends Component {
  getStyles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column wrap',
        minHeight: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cyan500,
      },
      text: {
        margin: '20px',
        color: white,
        fontSize: '30px',
      },
      btn: {
        fontSize: '18px',
        padding: '20px 40px',
      },
    };
  }

  render() {
    const styles = this.getStyles();
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={styles.container}>
          <h2 style={styles.text}>404 此页面还不存在!</h2>
          <RaisedButton
            href="/" label="去首页"
            secondary={true}
            labelStyle={styles.btn}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NotFound;
