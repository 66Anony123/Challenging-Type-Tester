import './Home.css'
import {useHistory} from 'react-router-dom'

const Home =()=>{

const history = useHistory();

    


    

return(

    <div className="welcome_container">

<h2>Welcome To The Typing Tester</h2>
    <button onClick={e=>history.push('/track')}>Commence</button>
    </div>
)
}
 
export default Home;
