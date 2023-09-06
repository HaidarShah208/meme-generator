import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './components/pages/Edit';
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
<Fade>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/edit/' element={<Edit />} />
 </Routes>
</BrowserRouter>
</Fade>
    </div>
  );
}

export default App;
