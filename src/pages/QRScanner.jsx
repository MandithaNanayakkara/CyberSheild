import React, { useState } from 'react';
import { QrCode, ShieldAlert, CheckCircle, Upload } from 'lucide-react';

const QRScanner = () => {
    const [scanning, setScanning] = useState(false);
    const [result, setResult] = useState(null);

    const simulateScan = () => {
        setScanning(true);
        setResult(null);
        setTimeout(() => {
            setScanning(false);
            const isDangerous = Math.random() > 0.7;
            setResult({
                safe: !isDangerous,
                url: isDangerous ? "http://malicious-site.xyz/login" : "https://official-service.com",
                details: isDangerous ? "Hidden redirect to known phishing domain." : "Verified QR destination."
            });
        }, 2500);
    };

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '800px' }}>
            <h1 className="text-2xl text-center" style={{ marginBottom: '2rem' }}>Secure QR Scanner</h1>

            <div className="card text-center" style={{ padding: '3rem' }}>
                <div style={{
                    width: '200px',
                    height: '200px',
                    border: '2px dashed var(--accent-blue)',
                    margin: '0 auto 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '12px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {scanning ? (
                        <div style={{
                            width: '100%',
                            height: '2px',
                            background: 'var(--accent-blue)',
                            position: 'absolute',
                            top: 0,
                            animation: 'scanLine 2s linear infinite'
                        }} />
                    ) : null}
                    <QrCode size={80} style={{ opacity: 0.5 }} />
                </div>

                <p className="text-sm" style={{ marginBottom: '2rem' }}>
                    Upload a QR code image to analyze its destination before you visit it.
                </p>

                <button className="btn btn-primary" onClick={simulateScan} disabled={scanning}>
                    {scanning ? 'Analyzing QR...' : <><Upload size={18} /> Upload & Scan</>}
                </button>
            </div>

            {result && (
                <div className={`card animate-fade-in`} style={{
                    marginTop: '2rem',
                    borderColor: result.safe ? 'var(--accent-green)' : 'var(--accent-red)'
                }}>
                    <div className="flex items-center gap-4">
                        {result.safe ? (
                            <CheckCircle size={40} color="var(--accent-green)" />
                        ) : (
                            <ShieldAlert size={40} color="var(--accent-red)" />
                        )}
                        <div>
                            <h2 className="text-xl">{result.safe ? 'Safe QR Code' : 'Dangerous Link Detected'}</h2>
                            <p className="text-sm" style={{ fontFamily: 'monospace' }}>{result.url}</p>
                        </div>
                    </div>
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>{result.details}</p>
                </div>
            )}

            <style>{`
        @keyframes scanLine {
          0% { top: 0; }
          100% { top: 100%; }
        }
      `}</style>
        </div>
    );
};

export default QRScanner;
