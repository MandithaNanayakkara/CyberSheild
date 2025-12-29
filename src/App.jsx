import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PhishDetector from './pages/PhishDetector';
import UrlScanner from './pages/UrlScanner';
import EmailAnalyzer from './pages/EmailAnalyzer';
import QRScanner from './pages/QRScanner';
import PasswordChecker from './pages/PasswordChecker';
import Reports from './pages/Reports';
import Academy from './pages/Academy';
import BehavioralMonitor from './pages/BehavioralMonitor';
import FeaturePlaceholder from './pages/FeaturePlaceholder';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Protected Route Wrapper
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
};

// Helper for Auth Pages (redirect if already logged in)
const AuthRoute = ({ children }) => {
  const { user } = useAuth();
  if (user) return <Navigate to="/" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="container" style={{ flex: 1, paddingTop: '2rem', paddingBottom: '2rem' }}>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
              <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>} />

              {/* Protected Protected Routes */}
              <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/detect" element={<ProtectedRoute><PhishDetector /></ProtectedRoute>} />
              <Route path="/email" element={<ProtectedRoute><EmailAnalyzer /></ProtectedRoute>} />
              <Route path="/url-scanner" element={<ProtectedRoute><UrlScanner /></ProtectedRoute>} />
              <Route path="/qr-scanner" element={<ProtectedRoute><QRScanner /></ProtectedRoute>} />
              <Route path="/password" element={<ProtectedRoute><PasswordChecker /></ProtectedRoute>} />
              <Route path="/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
              <Route path="/academy" element={<ProtectedRoute><Academy /></ProtectedRoute>} />
              <Route path="/monitor" element={<ProtectedRoute><BehavioralMonitor /></ProtectedRoute>} />
              <Route path="/feature/:featureId" element={<ProtectedRoute><FeaturePlaceholder /></ProtectedRoute>} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <footer className="text-center text-sm" style={{ padding: '1rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
            <p>© 2025 CyberShield</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
