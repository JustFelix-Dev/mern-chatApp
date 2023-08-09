 import { createContext, useCallback, useState } from 'react';
import { baseUrl, postRequest } from '../utils/services';

 export const AuthContext = createContext();

 export const AuthContextProvider=({children})=>{
    const [ user,setUser ] = useState(null);
    const [ registerError,setRegisterError ] = useState(null);
    const [ isRegisterLoading, setIsRegisterLoading] = useState(false);
    const [ registerInfo,setRegisterInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    console.log("Register Info:", registerInfo);

     const updateRegisterInfo = useCallback((info)=>{
          setRegisterInfo(info);
     },[]);

     const registerUser = useCallback(async()=>{
          await postRequest(`${baseUrl}/user/register`,JSON.stringify(registerInfo))
     },[])

    return(
            <AuthContext.Provider value={{user,registerInfo,updateRegisterInfo}}>
            {children}
            </AuthContext.Provider>
    )
 }