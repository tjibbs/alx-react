import React from 'react';
import MyNotifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <>
      <MyNotifications />
      <div className="App">
        <Header />
          <div className="App-body">
          <Login />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
      </div>
    </>
  );
}

export default App;