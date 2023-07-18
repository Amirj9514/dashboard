import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Template from './templates/template';
import "primereact/resources/themes/saga-blue/theme.css"; // Choose your theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './styles/main.scss';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<Template/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
