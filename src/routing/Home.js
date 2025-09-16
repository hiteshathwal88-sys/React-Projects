import { useNavigate } from 'react-router-dom';

const Home=()=>
{
   const navigate = useNavigate() ; // initilize the useNavigate hook
   const goToAbout = () => {
    navigate("/about"); // Navigate to the "about" page
   };
   return(
    <div>
    <h2> home page</h2>
    <button onClick={goToAbout}> Go to About Pagee</button>
    <img src={ require('../images/Land Rover Defender Front Caricos.jpg')}
    alt='this is not found' width={400} height={300}/>
    </div>
   );
   
    
}
export default Home;



