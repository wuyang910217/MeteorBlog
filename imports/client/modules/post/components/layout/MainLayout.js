import React, { Component, PropTypes } from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { meteorClientConfig } from 'meteor/apollo';

const client = new ApolloClient(meteorClientConfig());

export default class AppLayout extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h1>this is mainlayout.</h1>
          {this.props.content()}
        </div>
      </ApolloProvider>
    );
  }
}

AppLayout.propTypes = {
  content: PropTypes.element.isRequired,
};
