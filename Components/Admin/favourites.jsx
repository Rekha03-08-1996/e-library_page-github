import '../Style/favourites.css';
const Favourites = ({cart,setCart}) => {
    return ( 
        <div className="favourites">
            {cart.map((data)=>(
                <div className="fav_book">
                    <h1>{data.title}</h1>
                </div>
            ))}
        </div>
     );
}
 
export default Favourites;