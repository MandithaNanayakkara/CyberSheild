import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Mail, Lock, UserPlus, ArrowRight, ShieldCheck, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [step, setStep] = useState(1); // 1: Info, 2: Verification
    const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
    const [verificationCode, setVerificationCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInitialSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setIsLoading(true);
        setError('');

        // Generate a random 6-digit code
        const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
        setVerificationCode(''); // Clear previous
        window.sessionStorage.setItem('shield_temp_code', generatedCode);

        try {
            const response = await fetch('http://localhost:5000/api/send-code', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email, code: generatedCode })
            });

            if (response.ok) {
                setIsLoading(false);
                setStep(2);
            } else {
                throw new Error('Server rejected email request');
            }
        } catch (err) {
            setError('Failed to send verification email. Is the backend server running?');
            setIsLoading(false);
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const savedCode = window.sessionStorage.getItem('shield_temp_code');

        // Simulate code validation
        setTimeout(() => {
            if (verificationCode === savedCode) {
                signup({ email: formData.email, name: formData.email.split('@')[0] });
                window.sessionStorage.removeItem('shield_temp_code');
                navigate('/');
            } else {
                setError('Invalid verification code. Please check your email.');
                setIsLoading(false);
            }
        }, 1500);
    };

    if (step === 2) {
        return (
            <div className="flex auth-center min-h-[80vh] flex-col animate-fade-in">
                <div className="card w-full max-w-[400px]">
                    <div className="text-center" style={{ marginBottom: '2rem' }}>
                        <div style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>
                            <ShieldCheck size={64} style={{ margin: '0 auto' }} />
                        </div>
                        <h1 className="text-2xl">Verify Identity</h1>
                        <p className="text-sm">We've sent a 6-digit code to <br /><b className="text-gradient">{formData.email}</b></p>
                    </div>

                    {error && (
                        <div className="badge-danger flex items-center gap-2 p-3 rounded-lg mb-4 text-sm">
                            <ShieldCheck size={16} /> {error}
                        </div>
                    )}

                    <form onSubmit={handleVerify}>
                        <div className="mb-6">
                            <label className="text-sm block mb-2 text-center">Enter Verification Code</label>
                            <input
                                type="text"
                                className="input text-center text-2xl tracking-[1rem]"
                                maxLength="6"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                placeholder="000000"
                                style={{ height: '60px', borderRadius: '12px' }}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full justify-center" disabled={isLoading}>
                            {isLoading ? 'Validating...' : 'Verify & Setup Shield'}
                        </button>

                        <button
                            type="button"
                            className="btn btn-outline w-full justify-center mt-3"
                            onClick={() => setStep(1)}
                            disabled={isLoading}
                        >
                            Back
                        </button>
                    </form>

                    <p className="text-center text-sm mt-6 flex items-center justify-center gap-2 opacity-60">
                        <RefreshCw size={14} /> Didn't receive code? <span className="cursor-pointer hover:text-white transition-colors">Resend</span>
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex auth-center min-h-[80vh] flex-col animate-fade-in">
            <div className="card w-full max-w-[400px]">
                <div className="text-center" style={{ marginBottom: '2rem' }}>
                    <UserPlus size={48} color="var(--accent-green)" style={{ margin: '0 auto 1rem' }} />
                    <h1 className="text-2xl">Create Operative</h1>
                    <p className="text-sm">Initialize your CyberShield account</p>
                </div>

                {error && (
                    <div className="badge-danger p-3 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleInitialSubmit}>
                    <div className="mb-4">
                        <label className="text-sm block mb-1">Secure Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                className="input"
                                style={{ paddingLeft: '40px', marginBottom: 0 }}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="you@agency.com"
                                required
                            />
                            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '12px', opacity: 0.5 }} />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-sm block mb-1">Master Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="input"
                                style={{ paddingLeft: '40px', paddingRight: '40px', marginBottom: 0 }}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

                    <div className="mb-6">
                        <label className="text-sm block mb-1">Confirm Master Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="input"
                                style={{ paddingLeft: '40px', paddingRight: '40px', marginBottom: 0 }}
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                placeholder="••••••••"
                                required
                            />
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '12px', opacity: 0.5 }} />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-full justify-center" disabled={isLoading}>
                        {isLoading ? 'Processing...' : <><ArrowRight size={18} /> Send Verification Code</>}
                    </button>
                </form>

                <p className="text-center text-sm mt-6">
                    Already verified? <Link to="/login" className="text-gradient">Operational Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
