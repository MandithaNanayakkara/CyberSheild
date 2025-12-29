import React, { useState } from 'react';
import { FileText, Send } from 'lucide-react';

const Reports = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '800px' }}>
            <h1 className="text-2xl text-center" style={{ marginBottom: '2rem' }}>Community Reporting</h1>

            <div className="grid grid-cols-1 gap-8">
                <div className="card">
                    <h2 className="text-xl flex items-center gap-2" style={{ marginBottom: '1.5rem' }}>
                        <FileText size={24} color="var(--accent-green)" />
                        Report a Scam
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm">Scam Type</label>
                                <select className="input" style={{ marginTop: '0.5rem' }}>
                                    <option>Phishing Email</option>
                                    <option>Fake Website</option>
                                    <option>SMS Fraud</option>
                                    <option>Identity Theft</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-sm">Description</label>
                                <textarea className="input" rows="4" placeholder="Describe what happened..." style={{ marginTop: '0.5rem' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-full flex justify-center">
                                {submitted ? 'Report Sent!' : <><Send size={18} /> Submit Report</>}
                            </button>
                        </div>
                    </form>
                </div>

                <div>
                    <h3 className="text-xl" style={{ marginBottom: '1rem' }}>Recent Community Reports</h3>
                    <div className="flex flex-col gap-4">
                        <div className="card" style={{ padding: '16px' }}>
                            <div className="flex justify-between">
                                <span style={{ fontWeight: 600, color: 'var(--accent-red)' }}>Phishing Email</span>
                                <span className="text-sm">10 mins ago</span>
                            </div>
                            <p className="text-sm" style={{ marginTop: '0.5rem' }}>User reported a fake Netflix renewal email asking for credit card details.</p>
                        </div>
                        <div className="card" style={{ padding: '16px' }}>
                            <div className="flex justify-between">
                                <span style={{ fontWeight: 600, color: 'var(--accent-green)' }}>Resolved</span>
                                <span className="text-sm">1 hour ago</span>
                            </div>
                            <p className="text-sm" style={{ marginTop: '0.5rem' }}>The reported domain secure-login-bank.com has been taken down.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reports;
