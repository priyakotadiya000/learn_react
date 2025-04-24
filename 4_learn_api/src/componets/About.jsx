import { useNavigate } from 'react-router-dom';

const About = () =>{

    const navigate = useNavigate(); 

    return <div>
                <h3>About</h3> 
                 <p>This is About page</p>
                 <button onClick={() => navigate('/Home')}>Home page</button>
           </div>
}

export default About;