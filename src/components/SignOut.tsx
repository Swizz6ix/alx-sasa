import React, { useEffect } from 'react'
import '../styles/SignOut.css';
import { useDataLayerValue } from '../Hooks/useDatalayer';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Hooks/firebase';

function SignOut() {
    const [{ user }, dispatch ] = useDataLayerValue();

    const logOut = () => {
        if (user) {
            signOut(auth)
            console.log("sign out")
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        });
    
        return () => {
            unsubscribe()
        }
    }, [])
    
    return (
        <div className='signOut'>
            <button className='signOut__btn' type="submit" onClick={logOut}>sign out</button>
        </div>
    )
}

export default SignOut
