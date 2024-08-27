import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage/index.jsx'
import RegisterPage from '../src/pages/RegisterPage/index.jsx';
import ServicesPage from '../src/pages/ServicesPage/index.jsx';
import ConsultingPage from '../src/pages/ConsultingPage/index.jsx'
// import DashboardPage from '../src/pages/DashboardPage/index.jsx';
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        {/* <Route path="/dasboard" element={<DashboardPage />} /> */}

      </Routes>
    </Router>
  )
}

export default App
