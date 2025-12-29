import React, { useState, useEffect } from 'react';
import { Activity, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const BehavioralMonitor = () => {
    const [logs, setLogs] = useState([
        { id: 1, time: '16:01:22', event: 'System Identity Verified', status: 'normal' },
        { id: 2, time: '16:02:45', event: 'Network Handshake: secure-channel-01', status: 'normal' },
    ]);

    const [scanning, setScanning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = {
                id: Date.now(),
                time: new Date().toLocaleTimeString(),
                event: Math.random() > 0.8 ? 'Suspicious URL Pattern Detected' : 'Monitoring Encrypted Traffic',
                status: Math.random() > 0.8 ? 'warning' : 'normal'
            };
            setLogs(prev => [newLog, ...prev].slice(0, 8));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '800px' }}>
            <h1 className="text-2xl text-center" style={{ marginBottom: '2rem' }}>Shield Behavior Monitor</h1>

            <div className="grid grid-cols-1 gap-6">
                <div className="card flex items-center justify-between" style={{ padding: '2rem' }}>
                    <div className="flex items-center gap-4">
                        <div className={`animate-pulse`} style={{ color: scanning ? 'var(--accent-green)' : 'var(--text-secondary)' }}>
                            <Shield size={48} />
                        </div>
                        <div>
                            <h2 className="text-xl">Active Protection</h2>
                            <p className="text-sm">AI is currently analyzing background processes for anomalies.</p>
                        </div>
                    </div>
                    <div className="badge badge-safe">Online</div>
                </div>

                <div className="card">
                    <h3 className="text-xl flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
                        <Activity size={20} color="var(--accent-blue)" />
                        Real-time Pattern Log
                    </h3>
                    <div className="flex flex-col gap-3">
                        {logs.map(log => (
                            <div key={log.id} className="flex justify-between items-center p-3" style={{
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '8px',
                                borderLeft: `4px solid ${log.status === 'warning' ? 'var(--accent-red)' : 'var(--accent-green)'}`
                            }}>
                                <div className="flex items-center gap-3">
                                    {log.status === 'warning' ? <AlertCircle size={16} color="var(--accent-red)" /> : <CheckCircle size={16} color="var(--accent-green)" />}
                                    <span>{log.event}</span>
                                </div>
                                <span className="text-sm font-mono opacity-50">{log.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="card" style={{ background: 'linear-gradient(90deg, var(--bg-card), rgba(0, 255, 157, 0.05))' }}>
                    <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Behavioral AI Engine v2.4</h4>
                    <p className="text-sm">Using heuristic analysis to detect patterns of social engineering and automated bot activity across your sessions.</p>
                </div>
            </div>
        </div>
    );
};

export default BehavioralMonitor;
