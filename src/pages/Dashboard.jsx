import React from 'react';
import { ShieldCheck, AlertTriangle, Activity, Globe, Mail, QrCode, Key, Scan, Shield, Lock, FileText, GraduationCap, Zap, Eye, Database, Cpu, Network, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const features = [
        // Existing core features
        { title: 'Text Analysis', icon: <Scan />, path: '/detect', color: 'var(--accent-green)', desc: 'AI-based phishing detection.' },
        { title: 'Email Deep-Scan', icon: <Mail />, path: '/email', color: 'var(--accent-blue)', desc: 'Verify headers & tone.' },
        { title: 'URL Verification', icon: <Globe />, path: '/url-scanner', color: 'var(--accent-blue)', desc: 'Check malicious domains.' },
        { title: 'Secure QR', icon: <QrCode />, path: '/qr-scanner', color: 'var(--accent-green)', desc: 'Analyze QR destinations.' },
        { title: 'Identity Audit', icon: <Key />, path: '/password', color: 'var(--accent-red)', desc: 'Password strength check.' },
        { title: 'Shield Monitor', icon: <Activity />, path: '/monitor', color: 'var(--accent-green)', desc: 'Behavioral scanning.' },

        // Additional PhishGuard 19 Features
        { title: 'Attachment Sanity', icon: <Zap />, path: '/feature/attachment-scan', color: 'var(--accent-blue)', desc: 'Scan files for malware.' },
        { title: 'Domain Reputation', icon: <Database />, path: '/feature/domain-rep', color: 'var(--accent-green)', desc: 'Whois & age analysis.' },
        { title: 'SSL Validator', icon: <Lock />, path: '/feature/ssl-check', color: 'var(--accent-blue)', desc: 'Verify cert encryption.' },
        { title: 'Dark Web Monitor', icon: <Eye />, path: '/feature/dark-web', color: 'var(--accent-red)', desc: 'Credential leak alerts.' },
        { title: 'Simulation Quiz', icon: <GraduationCap />, path: '/academy', color: 'var(--accent-green)', desc: 'Test your phishing IQ.' },
        { title: 'Device Health', icon: <Cpu />, path: '/feature/device-health', color: 'var(--accent-blue)', desc: 'System integrity check.' },
        { title: 'App Firewall', icon: <Shield />, path: '/feature/app-firewall', color: 'var(--accent-red)', desc: 'Review risky permissions.' },
        { title: 'Safe Proxy', icon: <Globe />, path: '/feature/safe-proxy', color: 'var(--accent-green)', desc: 'Anonymized browsing.' },
        { title: '2FA Manager', icon: <Key />, path: '/feature/2fa-manager', color: 'var(--accent-blue)', desc: 'Multi-factor assistance.' },
        { title: 'Incident Reports', icon: <FileText />, path: '/reports', color: 'var(--accent-green)', desc: 'Actionable scam insights.' },
        { title: 'Network Security', icon: <Network />, path: '/feature/network-sec', color: 'var(--accent-blue)', desc: 'WiFi & DNS inspection.' },
        { title: 'Smart Alerts', icon: <Zap />, path: '/feature/alerts', color: 'var(--accent-red)', desc: 'Instant threat discovery.' },
        { title: 'API Integration', icon: <Database />, path: '/feature/api', color: 'var(--accent-blue)', desc: 'Third-party protection.' },
    ];

    return (
        <div className="animate-fade-in">
            <header className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                <div>
                    <h1 className="text-2xl">Security Command Center</h1>
                    <p className="text-sm">Unified 19-Feature Protection | © 2025 CyberShield</p>
                </div>
                <div className="badge badge-safe flex items-center gap-2" style={{ padding: '8px 16px', fontSize: '1rem' }}>
                    <ShieldCheck size={20} /> System Fully Protected
                </div>
            </header>

            {/* Main Stats Grid */}
            <div className="grid grid-cols-3 gap-4" style={{ marginBottom: '2rem' }}>
                <div className="card flex flex-col items-center text-center">
                    <div style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>
                        <Activity size={40} />
                    </div>
                    <h2 className="text-2xl">100%</h2>
                    <p className="text-sm">Safety Score</p>
                </div>
                <div className="card flex flex-col items-center text-center">
                    <div style={{ color: 'var(--accent-blue)', marginBottom: '1rem' }}>
                        <Globe size={40} />
                    </div>
                    <h2 className="text-2xl">1,420</h2>
                    <p className="text-sm">Threats Monitored</p>
                </div>
                <div className="card flex flex-col items-center text-center">
                    <div style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}>
                        <AlertTriangle size={40} />
                    </div>
                    <h2 className="text-2xl">0</h2>
                    <p className="text-sm">Active Vulnerabilities</p>
                </div>
            </div>

            <h3 className="text-xl" style={{ marginBottom: '1.5rem' }}>Active 19-Feature Suite</h3>
            <div className="grid grid-cols-4 gap-4" style={{ marginBottom: '3rem' }}>
                {features.map((f, i) => (
                    <Link key={i} to={f.path} className="card flex flex-col gap-2 hover:border-accent-blue" style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit', padding: '16px' }}>
                        <div style={{ color: f.color, display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {f.icon}
                            <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Active</span>
                        </div>
                        <h4 style={{ fontWeight: 'bold', fontSize: '1rem' }}>{f.title}</h4>
                        <p className="text-sm" style={{ fontSize: '0.75rem', lineHeight: '1.2' }}>{f.desc}</p>
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl" style={{ marginBottom: '1rem' }}>Real-time Log</h3>
                    <div className="flex flex-col gap-4">
                        {[1, 2].map((i) => (
                            <div key={i} className="card flex justify-between items-center" style={{ padding: '16px' }}>
                                <div className="flex items-center gap-4">
                                    <div style={{ background: 'rgba(0, 255, 157, 0.1)', padding: '8px', borderRadius: '50%' }}>
                                        <CheckCircle size={20} color="var(--accent-green)" />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 600 }}>Heuristic Scan Done</p>
                                        <p className="text-sm">No anomalies in background processes.</p>
                                    </div>
                                </div>
                                <span className="text-sm">Just now</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="card">
                    <h3 className="text-xl" style={{ marginBottom: '1rem' }}>2025 Shield Updates</h3>
                    <p className="text-sm" style={{ marginBottom: '1rem' }}>Your subscription includes all 19 current PhishGuard features. Next update scheduled for Jan 2025.</p>
                    <button className="btn btn-outline w-full">View Update Notes</button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
