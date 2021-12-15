import React from 'react';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
import { GTOFrame } from './layouts';
import Background from "./images/guitar.jpg"

export default class App extends React.Component {
  sayHello() {
    alert('Hello!');
  }

  render () {
    return (
      <div style={{ backgroundImage: `url(${Background})`}}>
        <Authenticator>
          {({ signOut, user }) => (
            <div className="App">
              <GTOFrame myfunc={this.sayHello}>
      	      </GTOFrame>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
      </div>
    );
  }
}
