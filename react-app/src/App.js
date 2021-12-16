import './App.css';
import React from 'react';
import { store } from './actions/store';
import DCandidates from './components/DCandidates';
import { Provider } from 'react-redux'
import { Container } from '@material-ui/core'
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <Provider store={store}>
      <ToastProvider autoDismiss={true}>
        <Container maxWidth="lg">

          <DCandidates />

        </Container>
      </ToastProvider>

    </Provider>
  );
}

export default App;
