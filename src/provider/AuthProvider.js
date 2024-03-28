import axios from 'axios';
import PropTypes from 'prop-types';
import { createContext,  useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError ] = useState('')
  

    const createUser = async(newUser) => {
        console.log('working')
        try{
            const res = await axios.post('http://localhost:8000/v1/user',newUser )
            if(res){
                setUser(res.data)
                return res
            }
        } catch(error){
            setError(error.response.data)
           console.log(error.response.data)

        }
    }

    const loginUser = async(newUser) => {
        try{
            const res = await axios.post('http://localhost:8000/v1/user/login',newUser )
            if(res){
                setUser(res.data)
                return res
            }
        } catch(error){
            setError(error.response.data)
            console.log(error)
        }
        
    }


    const authInfo = { error, user, loading, createUser, loginUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}
