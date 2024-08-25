import './App.css'
import Header from '../src/components/Header/index.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/index.jsx'; // Importa tu nueva página aquí


function App() {
  

  return (
    <Router>
      <Header/>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  )
}

export default App
