import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CompanyRequests from './pages/CompanyRequests';
import Dashboard from './pages/Dashboard';
import Administration from './pages/Administration';
import Destinations from './pages/Destinations';
import RootLayout from './components/RootLayout'

function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Destinations />} />
          <Route path="/requests" element={<CompanyRequests />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/administration" element={<Administration />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;