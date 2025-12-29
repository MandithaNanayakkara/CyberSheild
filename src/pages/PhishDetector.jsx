import React, { useState } from 'react';
import { Scan, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const PhishDetector = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleAnalyze = () => {
        if (!text.trim()) return;
        setLoading(true);
        setResult(null);

        // Simulate AI analysis
        setTimeout(() => {
            setLoading(false);
            const isPhish = text.toLowerCase().includes('urgent') || text.toLowerCase().includes('click here') || text.toLowerCase().includes('bank');
            if (isPhish) {
                setResult({
                    status: 'danger',
                    score: 85,
                    message: 'High probability of Phishing detected.',
                    details: ['Urgency detected', 'Suspicious keywords found']
                });
            } else {
                setResult({
                    status: 'safe',
                    score: 10,
                    message: 'Message appears safe.',
                    details: []
                });
            }
        }, 1500);
    };

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '800px' }}>
            <h1 className="text-2xl text-center" style={{ marginBottom: '2rem' }}>AI Phishing Detector</h1>

            <div className="card">
                <label style={{ display: 'block', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    Paste the email content or SMS text below for analysis:
                </label>
                <textarea
                    className="input"
                    style={{ height: '150px', resize: 'vertical' }}
                    placeholder="e.g. URGENT: Your bank account has been locked. Click here to verify..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />

                <div className="flex justify-between items-center" style={{ marginTop: '1rem' }}>
                    <button className="btn btn-outline" onClick={() => setText('')}>Clear</button>
                    <button className="btn btn-primary" onClick={handleAnalyze} disabled={loading}>
                        {loading ? 'Analyzing...' : <><Scan size={20} /> Analyze Text</>}
                    </button>
                </div>
            </div>

            {result && (
                <div className="card animate-fade-in" style={{ marginTop: '2rem', borderColor: result.status === 'safe' ? 'var(--accent-green)' : 'var(--accent-red)' }}>
                    <div className="flex items-center gap-4" style={{ marginBottom: '1rem' }}>
                        {result.status === 'safe' ? (
                            <CheckCircle size={40} color="var(--accent-green)" />
                        ) : (
                            <XCircle size={40} color="var(--accent-red)" />
                        )}
                        <div>
                            <h2 className="text-xl">{result.status === 'safe' ? 'Safe Message' : 'Potential Threat Detected'}</h2>
                            <p className="text-sm">Confidence Score: {result.score}%</p>
                        </div>
                    </div>
                    <p>{result.message}</p>
                    {result.details.length > 0 && (
                        <ul style={{ marginTop: '1rem', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                            {result.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};

export default PhishDetector;
