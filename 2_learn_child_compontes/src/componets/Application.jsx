import Header from "./Header";
import Sidebar from "./Sidebar";
import Maincontant from "./Maincontant";
import Footer from "./Footer";

const Application = () =>{
    return  <div>
             <Header></Header>
             <div style={{ display: 'flex', height: '70vh' }}>
                  <Sidebar />
                  <Maincontant></Maincontant>
             </div>
             <Footer></Footer>
    </div>
             
}

export default Application;