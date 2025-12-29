import React from 'react';
import {
    ShieldCheck, AlertTriangle, Activity, Globe, Mail, QrCode, Key, Scan,
    Shield, Lock, FileText, GraduationCap, Zap, Eye, Database, Cpu, Network,
    CheckCircle, Search, Layers, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();
    const features = [
        { title: 'Text Analysis', desc: 'AI-based phishing detection.', icon: <Scan />, path: '/detect', status: 'Active' },
        { title: 'Email Deep-Scan', desc: 'Verify headers & tone.', icon: <Mail />, path: '/email', status: 'Active' },
        { title: 'URL Verification', desc: 'Real-time link scanning.', icon: <Search />, path: '/url-scanner', status: 'Active' },
        { title: 'Secure QR', desc: 'Analyze QR destinations.', icon: <QrCode />, path: '/qr-scanner', status: 'Active' },
        { title: 'Identity Audit', desc: 'Check password strength.', icon: <Key />, path: '/password', status: 'Active' },
        { title: 'Shield Monitor', desc: 'Heuristic session logging.', icon: <Activity />, path: '/monitor', status: 'Active' },
        { title: 'Academy', desc: 'Interactive security training.', icon: <GraduationCap />, path: '/academy', status: 'Active' },
        { title: 'Reports', desc: 'Community threat database.', icon: <FileText />, path: '/reports', status: 'Active' },
        { title: 'Attachment Sanity', desc: 'Deep file inspection.', id: 'attachment-scan', status: 'Shielded' },
        { title: 'Domain Reputation', desc: 'Global blacklist check.', id: 'domain-rep', status: 'Shielded' },
        { title: 'SSL Validator', desc: 'Verify certificate chain.', id: 'ssl-val', status: 'Shielded' },
        { title: 'Dark Web Monitor', desc: 'Credential leak alerts.', id: 'dark-web', status: 'Shielded' },
        { title: 'Device Health', desc: 'Local hardware security.', id: 'device-health', status: 'Shielded' },
        { title: 'App Firewall', desc: 'Block malicious traffic.', id: 'firewall', status: 'Shielded' },
        { title: 'Safe Proxy', desc: 'Encrypted traffic routing.', id: 'proxy', status: 'Shielded' },
        { title: '2FA Manager', desc: 'Secure token storage.', id: '2fa', status: 'Shielded' },
        { title: 'Network Security', desc: 'Inspect WiFi integrity.', id: 'network', status: 'Shielded' },
        { title: 'Smart Alerts', desc: 'Instant threat discovery.', id: 'alerts', status: 'Shielded' },
        { title: 'API Integration', desc: 'Third-party protection.', id: 'api', status: 'Shielded' },
    ];

    return (
        <div className="animate-fade-in flex flex-col gap-8">
            {/* Hero Status Section */}
            <section className="card relative overflow-hidden" style={{
                padding: '3rem',
                background: 'linear-gradient(135deg, rgba(10,10,10,0.8), rgba(0, 184, 255, 0.05))',
                border: '1px solid rgba(0, 184, 255, 0.2)',
                borderRadius: '24px'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'var(--accent-blue)',
                    filter: 'blur(100px)',
                    opacity: 0.1
                }}></div>

                <div className="flex justify-between items-center relative z-10">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">Security <span className="text-gradient">Command Center</span></h1>
                        <p className="text-lg opacity-80">Welcome back, <span className="text-white font-semibold">Operative {user?.name}</span>. Shield systems are 100% operational.</p>

                        <div className="flex gap-4 mt-8">
                            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                                <div className="pulse-green"></div>
                                <span className="text-sm font-medium">Core Protection: <span style={{ color: 'var(--accent-green)' }}>Online</span></span>
                            </div>
                            <div className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                                <Activity size={16} color="var(--accent-blue)" />
                                <span className="text-sm font-medium">Network Latency: <span style={{ color: 'var(--accent-blue)' }}>14ms</span></span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center bg-black/40 p-6 rounded-3xl border border-white/10 backdrop-blur-md" style={{ minWidth: '180px' }}>
                        <div className="text-4xl font-bold text-gradient mb-1">100%</div>
                        <div className="text-xs uppercase tracking-widest opacity-60">Safety Score</div>
                        <div style={{ marginTop: '1rem', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                            <div style={{ width: '100%', height: '100%', background: 'var(--accent-green)', borderRadius: '2px', boxShadow: '0 0 10px var(--accent-green)' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
                <div className="card card-cyber p-6 flex items-center gap-4 bg-black/20" style={{ borderLeftColor: 'var(--accent-blue)' }}>
                    <div className="p-3 bg-blue-500/10 rounded-xl"><ShieldCheck size={24} color="var(--accent-blue)" /></div>
                    <div>
                        <div className="text-2xl font-bold">1,420</div>
                        <div className="text-xs opacity-60 uppercase">Threats Neutralized</div>
                    </div>
                </div>
                <div className="card card-cyber p-6 flex items-center gap-4 bg-black/20" style={{ borderLeftColor: 'var(--accent-green)' }}>
                    <div className="p-3 bg-green-500/10 rounded-xl"><Zap size={24} color="var(--accent-green)" /></div>
                    <div>
                        <div className="text-2xl font-bold" style={{ color: 'var(--accent-green)' }}>ACTIVE</div>
                        <div className="text-xs opacity-60 uppercase">Real-time Scanning</div>
                    </div>
                </div>
                <div className="card card-cyber p-6 flex items-center gap-4 bg-black/20" style={{ borderLeftColor: 'var(--accent-red)' }}>
                    <div className="p-3 bg-red-500/10 rounded-xl"><AlertTriangle size={24} color="var(--accent-red)" /></div>
                    <div>
                        <div className="text-2xl font-bold">0</div>
                        <div className="text-xs opacity-60 uppercase">Active Vulnerabilities</div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Layers size={20} color="var(--accent-green)" />
                    Integrated Defensive Suite
                </h2>

                <div className="grid grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <Link
                            key={f.title}
                            to={f.path || `/feature/${f.id}`}
                            className="card group hover:scale-105"
                            style={{ padding: '20px', transition: 'all 0.3s ease' }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 rounded-lg bg-white/5 text-accent-blue group-hover:text-accent-green transition-colors">
                                    {f.icon || <Lock size={20} />}
                                </div>
                                <span className={`text-[10px] uppercase font-bold tracking-tighter px-2 py-1 rounded ${f.status === 'Active' ? 'bg-green-500/10 text-accent-green' : 'bg-blue-500/10 text-accent-blue'}`} style={{
                                    backgroundColor: f.status === 'Active' ? 'rgba(0, 255, 157, 0.1)' : 'rgba(0, 184, 255, 0.1)',
                                    color: f.status === 'Active' ? 'var(--accent-green)' : 'var(--accent-blue)'
                                }}>
                                    {f.status}
                                </span>
                            </div>
                            <h3 className="font-bold text-sm mb-1 group-hover:text-white">{f.title}</h3>
                            <p className="text-xs opacity-60 leading-relaxed">{f.desc}</p>

                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                height: '2px',
                                width: '0%',
                                background: 'linear-gradient(to right, var(--accent-green), var(--accent-blue))',
                                transition: 'width 0.3s ease'
                            }} className="group-hover:w-full"></div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
        .pulse-green {
          width: 8px;
          height: 8px;
          background: var(--accent-green);
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(0, 255, 157, 0.4);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(0, 255, 157, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(0, 255, 157, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 255, 157, 0); }
        }
      `}</style>
        </div>
    );
};

export default Dashboard;
