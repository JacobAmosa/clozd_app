import './App.css';
import List from './components/List';
import Details from './components/Details';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
 
function App() {
 
 return (
   <Router>
     <div className="App">
       <header className="App-header">
         <Routes>
           <Route path="/" element={<List />} />
           <Route path="/details"  element={<Details />} />
         </Routes>
       </header>
     </div>
   </Router>
 
 
 );
}
 
export default App;
