import { Link } from 'react-router-dom';
import '../navbar.css'

function Navbar({username}) {

    return (
        
          <div className="container">
            <div className="logo">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTAq_Sx4qhgYsfEvJVqXkMx7oEMRZQtVuiSQ&usqp=CAU' width='200px' height='60px'/>
            </div>
            <div className="nav-elements">
                <ul>
                    <li><Link to="/" className='nav-link'>Home</Link></li>
                    {
                        !username?
                    <li class="navbutton"><Link to="/login" className='nav-link'>login</Link></li>:
                    ''
                    }
                    {username?
                    <>
                    <li><Link to="/scores" className='nav-link'>Scores</Link></li>
                    <li><Link to="/leagues" className='nav-link'>Leagues</Link></li>
                    {/* <li><Link to="/favteams" className='nav-link'>Favorite Teams</Link></li> */}
                    <li><Link to='/logout' className='nav-link'>Logout</Link></li>
                    </>
                    :
                    ''}
                </ul>
            </div>
          </div>
        
      )
    
}

export default Navbar









