import { useNavigate } from 'react-router-dom';

const Home = () =>{

    const navigate = useNavigate(); 

    return <div>  
                  <h3>Home</h3>
                  <button onClick={() => navigate('/about')}>About</button>
                  <button onClick={() => navigate('/')}> Logout</button>
           </div>
}

export default Home;