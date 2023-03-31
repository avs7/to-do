import { auth, googleProvider } from '../config/firebase'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useState } from 'react'

function Auth() {
  const [login, setLogin] = useState({ email: '', password: '' })

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, login.email, login.password)
    } catch (err) {
      console.error(err)
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.error(err)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className='flex flex-col justify-center pt-6 items-center m-4'>
      <input
        placeholder='Email'
        onChange={e => setLogin(prev => ({ ...prev, email: e.target.value }))}
      />
      <input
        placeholder='Password'
        onChange={e =>
          setLogin(prev => ({ ...prev, password: e.target.value }))
        }
      />
      <div className='flex flex-col items-center pt-4'>
        <button className='bg-sky-200 p-2 rounded-lg m-1' onClick={signIn}>
          Sign in
        </button>
        <button
          className='bg-sky-200 p-2 rounded-lg m-1'
          onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <button className='bg-rose-400 p-2 rounded-lg m-1' onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Auth
