import './App.css';
import Header from './components/Header';
import Options from './components/Options';
import Read from './components/Read';
import Create from './components/Create';
import Update from './components/Update';
import Delete from './components/Delete';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';



function App() {
  return (
    <>
    <Router>
      <Header/>
      <Options/>
      <Routes>
        <Route path="/" element={<Read/>}></Route>
        <Route path="/createUser" element={<Create/>}></Route>
        <Route path="/updateUser" element={<Update/>}></Route>
        <Route path="/deleteUser" element={<Delete/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
