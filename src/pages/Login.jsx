import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Mail, Lock, LogIn, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulated login delay
        setTimeout(() => {
            if (email && password) {
                login({ email, name: email.split('@')[0] });
                navigate('/');
            } else {
                setError('Invalid credentials. Please try again.');
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <div className="flex auth-center min-h-[80vh] flex-col animate-fade-in">
            <div className="card w-full max-w-[400px]">
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <Shield size={48} color="var(--accent-blue)" style={{ margin: '0 auto 1rem' }} />
                    <h1 className="text-2xl">Access Shield</h1>
                    <p className="text-sm">Secure login to your command center</p>
                </div>

                {error && (
                    <div className="badge-danger flex items-center gap-2 p-3 rounded-lg mb-4 text-sm">
                        <AlertCircle size={16} /> {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="text-sm block mb-1">Secure Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="input"
                                style={{ paddingLeft: '40px', marginBottom: 0 }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="agent@cybershield.com"
                                required
                            />
                            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '12px', opacity: 0.5 }} />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="text-sm block mb-1">Access Key</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input"
                                style={{ paddingLeft: '40px', paddingRight: '40px', marginBottom: 0 }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', opacity: 0.5 }} />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '12px',
                                    top: '12px',
                                    background: 'none',
                                    border: 'none',
                                    color: 'var(--text-secondary)',
                                    cursor: 'pointer',
                                    opacity: 0.5,
                                    padding: '4px'
                                }}
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-full justify-center" disabled={isLoading}>
                        {isLoading ? 'Decrypting...' : <><LogIn size={18} /> Enter System</>}
                    </button>
                </form>

                <p className="text-center text-sm mt-6">
                    New operative? <Link to="/signup" className="text-gradient">Request Access</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
