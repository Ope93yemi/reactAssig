import Logo from "../../assets/images/logo.svg/"
import './Nav.css'

const Nav = () =>{
    return(
        <div className="Container">
            
            <img src={Logo} alt="logo" />
            

            <div className="Navigation">
                <nav>Features</nav>
                <nav>Company</nav>
                <nav>Careers</nav>
                <nav>About</nav>
            </div>

            <div className="Login">
                <nav>Login</nav>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Nav;