import React, { useState } from 'react';
import { Lock, Globe, AlertTriangle, ShieldCheck } from 'lucide-react';

const UrlScanner = () => {
    const [url, setUrl] = useState('');
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState(null);

    const handleScan = () => {
        if (!url) return;
        setScanning(true);
        setResult(null);

        // Simulated scan
        setTimeout(() => {
            setScanning(false);
            // Mock logic
            const isBad = url.includes('xyz') || url.includes('free') || url.includes('login');
            setResult({
                safe: !isBad,
                domain: new URL(url.startsWith('http') ? url : `https://${url}`).hostname,
                score: isBad ? 20 : 95
            });
        }, 2000);
    };

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '800px' }}>
            <h1 className="text-2xl text-center" style={{ marginBottom: '2rem' }}>Malicious URL Scanner</h1>

            <div className="card text-center" style={{ padding: '3rem 2rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <Globe size={64} color="var(--accent-blue)" style={{ opacity: 0.8 }} />
                </div>
                <div className="flex gap-4">
                    <input
                        type="text"
                        className="input"
                        placeholder="Enter website URL (e.g. www.example.com)"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        style={{ marginBottom: 0 }}
                    />
                    <button className="btn btn-primary" onClick={handleScan} disabled={scanning}>
                        {scanning ? 'Scanning...' : 'Scan URL'}
                    </button>
                </div>
            </div>

            {result && (
                <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{ marginTop: '2rem' }}>
                    <div className="card flex flex-col items-center justify-center">
                        {result.safe ? (
                            <ShieldCheck size={64} color="var(--accent-green)" />
                        ) : (
                            <AlertTriangle size={64} color="var(--accent-red)" />
                        )}
                        <h2 className="text-xl" style={{ marginTop: '1rem' }}>
                            {result.safe ? 'Safe to Visit' : 'Unsafe Domain'}
                        </h2>
                    </div>
                    <div className="card">
                        <h3 className="text-xl" style={{ marginBottom: '1rem' }}>Scan Details</h3>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <span className="text-sm">Domain:</span>
                                <span>{result.domain}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Trust Score:</span>
                                <span style={{ color: result.safe ? 'var(--accent-green)' : 'var(--accent-red)' }}>
                                    {result.score}/100
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">SSL Certificate:</span>
                                <span>Valid</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm">Blacklist Status:</span>
                                <span>{result.safe ? 'Clean' : 'Listed'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UrlScanner;
