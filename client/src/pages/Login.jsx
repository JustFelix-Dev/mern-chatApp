import { Alert,Button,Form,Row,Col,Stack} from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

const Login = () => {
    const { loginUser,loginInfo,updateLoginInfo,isLoginLoading,loginError } = useContext(AuthContext);
    return ( 
          <>
          <Form onSubmit={loginUser}>
            <Row style={{height:'80vh',justifyContent:'center',paddingTop:'7%'}}>
                <Col xs={6}>
                    <Stack gap={3}>
                      <h2>LogIn</h2>
                      <Form.Control type='email' placeholder='Email' onChange={(e)=> updateLoginInfo({...loginInfo,email:e.target.value})} />
                      <Form.Control type='password' placeholder='Password' onChange={(e)=> updateLoginInfo({...loginInfo,password:e.target.value})}/>
                      <Button variant='primary' type='submit'>{ isLoginLoading ? 'Submitting...':"LogIn"}</Button>
                      { loginError?.error && <Alert variant='danger'>
                        <p>{loginError?.message}</p>
                      </Alert>}
                    </Stack>
                </Col>
            </Row>
          </Form>
          </>
     );
}
 
export default Login;