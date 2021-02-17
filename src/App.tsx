import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Dashboard from './Components/Dashboard';

const client = new ApolloClient({
  uri: `https://pangaea-interviews.now.sh/api/graphql`
})

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Dashboard />
    </ApolloProvider>
  )
}

export default App;
