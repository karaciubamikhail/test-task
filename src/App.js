import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index} from './components/index/Index'
import { Cabinet } from './components/cabinet/Cabinet';
import { Contact } from './components/contact/Contact';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="Cabinet" element={<Cabinet />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
