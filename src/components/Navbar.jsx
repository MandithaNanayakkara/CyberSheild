import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, Scan, Lock, FileText, GraduationCap, Mail, QrCode, Key, Activity, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield color="var(--accent-green)" size={32} />
          <span className="text-xl" style={{ color: 'white' }}>Cyber<span className="text-gradient">Shield</span></span>
        </Link>

        {user ? (
          <>
            <div className="flex gap-6 overflow-x-auto hide-scrollbar" style={{ padding: '0 1rem' }}>
              <Link to="/" className={`nav-link ${isActive('/')}`}>
                <LayoutDashboard size={18} /> <span className="hide-mobile">Dashboard</span>
              </Link>
              <Link to="/detect" className={`nav-link ${isActive('/detect')}`}>
                <Scan size={18} /> <span className="hide-mobile">Detect</span>
              </Link>
              <Link to="/email" className={`nav-link ${isActive('/email')}`}>
                <Mail size={18} /> <span className="hide-mobile">Email</span>
              </Link>
              <Link to="/academy" className={`nav-link ${isActive('/academy')}`}>
                <GraduationCap size={18} /> <span className="hide-mobile">Academy</span>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm" style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px' }}>
                <div style={{ background: 'var(--accent-green)', padding: '4px', borderRadius: '50%', color: 'black' }}>
                  <User size={12} />
                </div>
                <span className="hide-mobile">{user.name}</span>
              </div>
              <button onClick={logout} className="nav-link flex items-center gap-1 cursor-pointer" style={{ border: 'none', background: 'none' }}>
                <LogOut size={18} color="var(--accent-red)" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex gap-4">
            <Link to="/login" className="btn btn-outline" style={{ fontSize: '0.8rem' }}>Log In</Link>
            <Link to="/signup" className="btn btn-primary" style={{ fontSize: '0.8rem' }}>Sign Up</Link>
          </div>
        )}
      </div>

      <style>{`
        .hide-mobile { display: inline; }
        @media (max-width: 900px) {
          .hide-mobile { display: none; }
          .nav-link { font-size: 0; }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </nav>
  );
};

export default Navbar;
