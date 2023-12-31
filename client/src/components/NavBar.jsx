import { useContext } from 'react';
import { Container,Nav,Navbar,Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
   const { user,logoutUser } = useContext(AuthContext);

    return ( 
         <Navbar bg='dark' className='mb-4' style={{height:'3.75rem'}}>
            <Container>
                <h2>
                    <Link to={'/'} className='link-light text-decoration-none'>ChatApp</Link>
                    </h2>
                    <span className="text-warning">{ user ?(`Logged in as ${user.name.split(' ')[0]}`):''}</span>
                <Nav>
                    <Stack direction='horizontal' gap={3}>
                   { !user ? <><Link to={'/login'} className='link-light text-decoration-none'>LogIn</Link>
                    <Link to={'/register'} className='link-light text-decoration-none'>Register</Link></>:(<Link onClick={()=>logoutUser()} to={'/login'} className='link-light text-decoration-none'>LogOut</Link>)}
                    </Stack>
                </Nav>
            </Container>
         </Navbar>
            );
}
 
export default NavBar;