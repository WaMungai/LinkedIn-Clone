import React, { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import { login, logout, selectUser } from './features/user/userSlice';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import {auth} from './firebase'
import Widgets from './components/Widgets';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() =>{
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        //user is logged in
        dispatch(
          login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.dispalyName,
            photoUrl:userAuth.photoURL
          })
          
          )
      } else{
        //user is logged out
        dispatch(logout())
      }
    });
  },[])

  return (
    <div className="app">
      {/**Header**/}
      <Header />
      {!user ? ( 
        <Login /> 
      ):(
        <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
        </div>
      )}
        </div>
      
  );
}

export default App;
