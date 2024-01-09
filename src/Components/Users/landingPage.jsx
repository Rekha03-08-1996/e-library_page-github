import '../Style/landingPage.css';
import { Link } from "react-router-dom";
const LandingPage = () => {
    return ( 
        <div className="land">
            {/* <img src={"https://libraries.muswellbrook.nsw.gov.au/wp-content/uploads/2021/02/background-15.jpg"} alt="" /> */}
            <div className="landingpage">
            <h1>Book Sanctuary</h1>
            <div className="loginOptions">
                <Link to="/adminLogin" id='alogin'>admin login</Link>
                <Link to="/userLogin" id='ulogin'>user login</Link>
            </div>
        </div>
        </div>
     );
}
 
export default LandingPage;