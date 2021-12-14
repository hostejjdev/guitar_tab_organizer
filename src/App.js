import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { GTOFrame } from './layouts';

function App() {
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <GTOFrame>
      	    </GTOFrame>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default App;
