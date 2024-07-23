import './App.css';
import AddEmployee from './components/AddEmployee';
import Navbar from './components/Navbar';

function App() {
  return ( 
    // we wraped Navbar and AddEmployee in empty brackets <> </>
    // these are called framents of react. this is done because
    // you can return only one component, so to return multiple
    // components use <> </> (fragment)
    <>    
    <Navbar/>
    <AddEmployee/>
    </>
  );
}

export default App;
