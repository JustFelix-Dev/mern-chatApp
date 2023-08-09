import { Alert,Button,Form,Row,Col,Stack} from 'react-bootstrap';

const Register = () => {
    return ( 
          <>
          <Form>
            <Row style={{height:'80vh',justifyContent:'center',paddingTop:'7%'}}>
                <Col xs={6}>
                    <Stack gap={3}>
                      <h2>Register</h2>
                      <Form.Control type='text' placeholder='Your Name'/>
                      <Form.Control type='email' placeholder='Email'/>
                      <Form.Control type='password' placeholder='Password'/>
                      <Button variant='primary' type='submit'>Register</Button>
                      <Alert variant='danger'>
                        <p>An error occurred!</p>
                      </Alert>
                    </Stack>
                </Col>
            </Row>
          </Form>
          </>
     );
}
 
export default Register;