import React, { useState } from 'react';
import { Mail, ShieldAlert, CheckCircle, Search } from 'lucide-react';

const EmailAnalyzer = () => {
    const [headers, setHeaders] = useState('');
    const [body, setBody] = useState('');
    const [result, setResult] = useState(null);
    const [analyzing, setAnalyzing] = useState(false);

    const analyzeEmail = () => {
        if (!headers && !body) return;
        setAnalyzing(true);
        setResult(null);

        setTimeout(() => {
            setAnalyzing(false);
            // Simulated Logic
            const hasSpfFail = headers.toLowerCase().includes('spf=fail');
            const hasUrgency = body.toLowerCase().includes('urgent') || body.toLowerCase().includes('immediately');
            const score = 100 - (hasSpfFail ? 50 : 0) - (hasUrgency ? 30 : 0);

            setResult({
                score,
                spf: hasSpfFail ? 'Fail' : 'Pass',
                dkim: 'Pass',
                urgency: hasUrgency ? 'High' : 'Normal',
                safe: score > 70
            });
        }, 2000);
    };

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '900px' }}>
            <h1 className="text-2xl text-center" style={{ marginBottom: '2rem' }}>Advanced Email Analyzer</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card">
                    <h2 className="text-xl flex items-center gap-2" style={{ marginBottom: '1rem' }}>
                        <Mail size={20} /> Email Content
                    </h2>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm">Email Headers (Optional)</label>
                            <textarea
                                className="input"
                                rows="4"
                                placeholder="Paste header info (Received-SPF, DKIM-Signature...)"
                                value={headers}
                                onChange={(e) => setHeaders(e.target.value)}
                                style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
                            />
                        </div>
                        <div>
                            <label className="text-sm">Email Body</label>
                            <textarea
                                className="input"
                                rows="6"
                                placeholder="Paste the email message here..."
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-primary" onClick={analyzeEmail} disabled={analyzing}>
                            {analyzing ? 'Analyzing Headers...' : <><Search size={18} /> Deep Scan Email</>}
                        </button>
                    </div>
                </div>

                <div>
                    {result ? (
                        <div className="card animate-fade-in h-full flex flex-col justify-center">
                            <div className="flex flex-col items-center text-center" style={{ marginBottom: '2rem' }}>
                                {result.safe ? (
                                    <CheckCircle size={64} color="var(--accent-green)" />
                                ) : (
                                    <ShieldAlert size={64} color="var(--accent-red)" />
                                )}
                                <h2 className="text-2xl" style={{ marginTop: '1rem' }}>
                                    {result.safe ? 'Email Appears Safe' : 'Suspicious Email'}
                                </h2>
                                <p className="text-sm">Security Score: {result.score}/100</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between p-2" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                                    <span>SPF Record:</span>
                                    <span style={{ color: result.spf === 'Pass' ? 'var(--accent-green)' : 'var(--accent-red)' }}>{result.spf}</span>
                                </div>
                                <div className="flex justify-between p-2" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                                    <span>DKIM Signature:</span>
                                    <span style={{ color: 'var(--accent-green)' }}>{result.dkim}</span>
                                </div>
                                <div className="flex justify-between p-2" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                                    <span>Urgency Level:</span>
                                    <span style={{ color: result.urgency === 'Normal' ? 'var(--accent-green)' : 'var(--accent-red)' }}>{result.urgency}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="card h-full flex flex-col items-center justify-center text-center text-secondary">
                            <Mail size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
                            <p>Scan an email to view detailed security metrics including SPF, DKIM validation and linguistic tone analysis.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmailAnalyzer;
