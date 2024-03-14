import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import  'react-bootstrap-icons';
import { 
  BrowserRouter as Router ,
  Routes ,
  Route ,
  Link
} from 'react-router-dom';
// import { Router } from 'react-bootstrap-icons';
import Home from '../Home';
import './Nav.scss'

function Navbar(){
    return(
        <>    
        {/* <Router >
            <div>
              <Link to='react/build/Home'>Home</Link>
              <Link to='react/build/About'>About</Link>
              <Routes>
                <Route
                path='react/build/Home'
                element={<Home />}
                />
              </Routes>
            </div>
        </Router> */}
     
     <Router > 
     <ul className='size'>
	<li>
		<Link to='/'>
		<i class="bi bi-speedometer2"></i>
			<span>Dashboard</span>
		</Link>
	</li>
	<li>
		<Link to='/Home'>
    <i class="bi bi-image-fill"></i>
  			<span>Images</span>
		</Link>
	</li>	
	<li>
		<Link href="#">
    <i class="bi bi-file-earmark-medical"></i>
    			<span>Files</span>
		</Link>
	</li>
	<li>
		<Link href="#">
		<i class="bi bi-controller"></i>
			<span>Games</span>
		</Link>
	</li>	
	<li>
		<Link href="#">
    <i class="bi bi-book"></i>
			<span>Books</span>
		</Link>
	</li>
	<li>
		<Link href="#">
    <i class="bi bi-bell-fill"></i>
			<span>Notifications</span>
		</Link>
	</li>
	<li>	
		<Link href="#">
    <i class="bi bi-gear"></i>
			<span>Settings</span>
		</Link>
	</li>
	<li>
		<Link href="#">
    <i class="bi bi-person"></i>
			<span>Profile</span>
		</Link>
	</li>

 
</ul>
<Routes>
                <Route
                path='/'
                element={<Home />}
                />
              </Routes>
</Router>
        </>
    );
}

// A.U.E_Technology
export default Navbar ;