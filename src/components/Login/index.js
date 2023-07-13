import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import './Login.css'
import { login } from '../../features/user/userSlice'
import {auth} from '../../firebase'

export default function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")
  const [profilePic,setProfilePic] = useState("")
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()
    
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth =>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        profileUrl:userAuth.user.photoURL,
      }))
    }).catch(error => alert(error))
  };

  const register = () => {
    if(!name){
      return alert("Please enter full name")
    }
    auth.createUserWithEmailAndPassword(email,password).then(
      (userAuth) => {
        userAuth.user
        .updateProfile({
          displayName:name,
          photURL:profilePic,
        })
        .then(() => {
          dispatch(
            login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoUrl:profilePic
          }));
        });
      }).catch((error) => alert(error));
  }

  return (
    <div className="login">
       <img  src="https://upload.wikimedia.org/wikipedia/commons/b/b1/LinkedIn_Logo_2013_%282%29.svg" alt=""/>
       <form>
        <input 
        placeholder='Full name(required if registering' 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        
        />
        <input 
        placeholder='Profile pic URL(optional)' 
        type="text"
        value={profilePic}
        onChange={(e) => setProfilePic(e.target.value)}
        />
        <input 
        placeholder='Email' 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input 
        placeholder='Password' 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>Sign in</button>
       </form>
       <p>Not a member? {" "}
       <span className="login__register" onClick={register}>Register now</span>
       </p>
    </div>
  )
}
