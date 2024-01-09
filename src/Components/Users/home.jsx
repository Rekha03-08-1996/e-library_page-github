import { Link } from "react-router-dom";
import '../Style/home.css'
const Home = () => {
    return ( 
        <div className="home">
            <img src={"https://www.greenwichlibrary.org/wp-content/uploads/2021/06/IMG_5534-1536x906.jpg"} alt="" />
            <div>
            <div className='landy'>
            <img src="/landing.jpg" id='landyimg' />
            <div className='landy1'>
            <h1>Digital Library</h1>
            <p>When the Libraries are closed, use our convenient book drops to return materials. Visit our Digital Library for 24/7 access to eBooks, audiobooks, magazines, movies, music, learning and more.</p>
           </div>
           </div>
            </div>
            <div className="buttonlink">
            <Link>Explore</Link>
            <Link>Learn</Link>
            <Link>Support</Link>
            <Link>About</Link>
            <Link>Help</Link>
            </div>
            <div>
                <div>
                <center><img src="/background.jpg" alt="" className="homeimg" /></center>
                </div>
                <div>

                </div>
            </div>
            
        </div>
     );
}
 
export default Home;