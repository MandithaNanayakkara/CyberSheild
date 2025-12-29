import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, Scan, Lock, FileText, GraduationCap, Mail, QrCode, Key, Activity, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar" style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(15px)',
      background: 'rgba(5, 5, 5, 0.8)',
      borderBottom: '1px solid rgba(0, 255, 157, 0.15)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
    }}>
      <div className="container flex justify-between items-center" style={{ height: '70px' }}>
        <Link to="/" className="flex items-center gap-2 group">
          <div style={{
            background: 'linear-gradient(45deg, var(--accent-green), var(--accent-blue))',
            padding: '6px',
            borderRadius: '10px',
            boxShadow: '0 0 15px rgba(0, 255, 157, 0.3)'
          }}>
            <Shield color="black" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight" style={{ color: 'white' }}>
            Cyber<span style={{
              background: 'linear-gradient(to right, var(--accent-green), var(--accent-blue))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 5px rgba(0, 255, 157, 0.3))'
            }}>Shield</span>
          </span>
        </Link>

        {user ? (
          <>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar" style={{ padding: '0 1rem' }}>
              <Link to="/" className={`nav-link-v2 ${isActive('/')}`}>
                <LayoutDashboard size={18} /> <span className="hide-mobile">Dashboard</span>
              </Link>
              <Link to="/detect" className={`nav-link-v2 ${isActive('/detect')}`}>
                <Scan size={18} /> <span className="hide-mobile">Detect</span>
              </Link>
              <Link to="/email" className={`nav-link-v2 ${isActive('/email')}`}>
                <Mail size={18} /> <span className="hide-mobile">Email</span>
              </Link>
              <Link to="/academy" className={`nav-link-v2 ${isActive('/academy')}`}>
                <GraduationCap size={18} /> <span className="hide-mobile">Academy</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm" style={{
                padding: '6px 16px',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'inset 0 0 10px rgba(255,255,255,0.02)'
              }}>
                <div style={{
                  background: 'linear-gradient(45deg, var(--accent-green), var(--accent-blue))',
                  padding: '4px',
                  borderRadius: '50%',
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <User size={12} />
                </div>
                <span className="hide-mobile font-medium">{user.name}</span>
              </div>
              <button onClick={logout} className="nav-link flex items-center gap-1 cursor-pointer transition-transform hover:scale-110" style={{ border: 'none', background: 'none' }}>
                <LogOut size={20} color="var(--accent-red)" style={{ opacity: 0.8 }} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex gap-4">
            <Link to="/login" className="btn btn-outline" style={{ fontSize: '0.9rem', borderRadius: '12px' }}>Log In</Link>
            <Link to="/signup" className="btn btn-primary" style={{ fontSize: '0.9rem', borderRadius: '12px', boxShadow: '0 0 15px rgba(0, 255, 157, 0.2)' }}>Sign Up</Link>
          </div>
        )}
      </div>

      <style>{`
        .hide-mobile { display: inline; }
        .nav-link-v2 {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 12px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: all 0.3s ease;
          font-weight: 500;
          font-size: 0.95rem;
        }
        .nav-link-v2:hover {
          color: white;
          background: rgba(255,255,255,0.05);
        }
        .nav-link-v2.active {
          color: var(--accent-green);
          background: rgba(0, 255, 157, 0.08);
          box-shadow: inset 0 0 10px rgba(0, 255, 157, 0.05);
        }
        @media (max-width: 900px) {
          .hide-mobile { display: none; }
          .nav-link-v2 { padding: 8px; }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
};

export default Navbar;
