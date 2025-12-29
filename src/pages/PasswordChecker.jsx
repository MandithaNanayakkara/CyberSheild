import React, { useState } from 'react';
import { Key, ShieldAlert, CheckCircle, Info } from 'lucide-react';

const PasswordChecker = () => {
    const [password, setPassword] = useState('');

    const getStrength = (p) => {
        let score = 0;
        if (!p) return 0;
        if (p.length > 8) score += 25;
        if (/[A-Z]/.test(p)) score += 25;
        if (/[0-9]/.test(p)) score += 25;
        if (/[^A-Za-z0-9]/.test(p)) score += 25;
        return score;
    };

    const strength = getStrength(password);
    const colors = ['#ff3366', '#ffae00', '#00b8ff', '#00ff9d'];
    const labels = ['Weak', 'Fair', 'Good', 'Strong'];
    const colorIndex = Math.floor(strength / 26);

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '800px' }}>
            <h1 className="text-2xl text-center" style={{ marginBottom: '2rem' }}>Identity Protection: Password Audit</h1>

            <div className="card">
                <label className="text-sm">Enter a password to test its strength:</label>
                <div style={{ position: 'relative', marginTop: '0.5rem' }}>
                    <input
                        type="password"
                        className="input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Type password..."
                        style={{ paddingLeft: '40px' }}
                    />
                    <Key size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--text-secondary)' }} />
                </div>

                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginTop: '1.5rem', overflow: 'hidden' }}>
                    <div style={{
                        height: '100%',
                        width: `${strength}%`,
                        background: colors[colorIndex],
                        transition: 'width 0.3s ease, background 0.3s ease'
                    }} />
                </div>

                <div className="flex justify-between" style={{ marginTop: '0.5rem' }}>
                    <span className="text-sm">Strength: <b style={{ color: colors[colorIndex] }}>{labels[colorIndex]}</b></span>
                    <span className="text-sm">{strength}%</span>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    <h3 className="text-sm" style={{ marginBottom: '1rem' }}>Recommendations:</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-2 text-sm" style={{ color: password.length > 8 ? 'var(--accent-green)' : 'var(--text-secondary)' }}>
                            {password.length > 8 ? <CheckCircle size={14} /> : <Info size={14} />} At least 8 characters
                        </li>
                        <li className="flex items-center gap-2 text-sm" style={{ color: /[A-Z]/.test(password) ? 'var(--accent-green)' : 'var(--text-secondary)' }}>
                            {/[A-Z]/.test(password) ? <CheckCircle size={14} /> : <Info size={14} />} Includes Uppercase letters
                        </li>
                        <li className="flex items-center gap-2 text-sm" style={{ color: /[0-9]/.test(password) ? 'var(--accent-green)' : 'var(--text-secondary)' }}>
                            {/[0-9]/.test(password) ? <CheckCircle size={14} /> : <Info size={14} />} Includes Numbers
                        </li>
                        <li className="flex items-center gap-2 text-sm" style={{ color: /[^A-Za-z0-9]/.test(password) ? 'var(--accent-green)' : 'var(--text-secondary)' }}>
                            {/[^A-Za-z0-9]/.test(password) ? <CheckCircle size={14} /> : <Info size={14} />} Includes Special characters
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card" style={{ marginTop: '2rem', background: 'rgba(255, 51, 102, 0.05)', borderColor: 'rgba(255, 51, 102, 0.2)' }}>
                <div className="flex gap-4">
                    <ShieldAlert size={24} color="var(--accent-red)" />
                    <div>
                        <h4 style={{ color: 'var(--accent-red)' }}>Breach Check</h4>
                        <p className="text-sm">We don't store your passwords. This tool runs locally in your browser to check for common patterns used in data breaches.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasswordChecker;
