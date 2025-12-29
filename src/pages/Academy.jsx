import React, { useState } from 'react';
import { GraduationCap, PlayCircle, BookOpen, ChevronLeft, CheckCircle, Award } from 'lucide-react';

const Academy = () => {
    const [activeModule, setActiveModule] = useState(null);
    const [completed, setCompleted] = useState([]);

    const modules = [
        {
            id: 1,
            title: 'Phishing 101',
            desc: 'Learn how to spot the 5 most common signs of a phishing email.',
            duration: '5 mins',
            level: 'Beginner',
            content: [
                'Phishing is a type of social engineering where an attacker sends a fraudulent message designed to trick a person.',
                'Common signs include: Generic greetings like "Dear Customer".',
                'Urgent or threatening language (e.g., "Account suspended!").',
                'Suspicious links that don\'t match the official website.',
                'Unusual sender email addresses.'
            ],
            quiz: {
                question: 'Which of these is a common sign of a phishing email?',
                options: ['An urgent request for sensitive info', 'A personalized greeting', 'A link to a verified corporate domain'],
                answer: 0
            }
        },
        {
            id: 2,
            title: 'Password Security',
            desc: 'Why "Password123" is not enough and how to manage keys.',
            duration: '8 mins',
            level: 'Beginner',
            content: [
                'A strong password should be at least 12 characters long.',
                'Use a mix of uppercase, lowercase, numbers, and special characters.',
                'Never reuse the same password across multiple sites.',
                'Use a Password Manager (like Bitwarden or 1Password) to keep track.',
                'Enable Two-Factor Authentication (2FA) whenever possible.'
            ],
            quiz: {
                question: 'What is the recommended minimum length for a secure password?',
                options: ['4 characters', '8 characters', '12 characters'],
                answer: 2
            }
        },
        {
            id: 3,
            title: 'Social Engineering',
            desc: 'Understanding how attackers manipulate human psychology.',
            duration: '12 mins',
            level: 'Intermediate',
            content: [
                'Social engineering is the art of manipulating people so they give up confidential information.',
                'Pretexting: Creating a fabricated scenario to steal info.',
                'Baiting: Leaving a malware-infected USB drive in a public place.',
                'Quid Pro Quo: Offering a service (like tech support) in exchange for login data.',
                'Always verify the identity of anyone asking for credentials.'
            ],
            quiz: {
                question: 'What is "Baiting" in the context of cyber security?',
                options: ['Sending a fake invoice', 'Leaving infected hardware for someone to find', 'Calling and pretending to be IT'],
                answer: 1
            }
        },
        {
            id: 4,
            title: 'Device Protection',
            desc: 'Securing your mobile and laptop against malware.',
            duration: '10 mins',
            level: 'Intermediate',
            content: [
                'Keep your Operating System (Windows/OSX/iOS/Android) up to date.',
                'Only install apps from official stores (App Store/Google Play).',
                'Avoid connecting to public unencrypted WiFi for sensitive work.',
                'Use a firewall and a reputable antivirus solution.',
                'Encrypt your storage drives.'
            ],
            quiz: {
                question: 'Where should you primarily download apps from?',
                options: ['Official App Stores', 'Third-party APK sites', 'Links in emails'],
                answer: 0
            }
        }
    ];

    const handleCompleteModule = (id) => {
        if (!completed.includes(id)) {
            setCompleted([...completed, id]);
        }
        setActiveModule(null);
    };

    if (activeModule) {
        return (
            <div className="animate-fade-in container" style={{ maxWidth: '800px' }}>
                <button className="btn btn-outline" onClick={() => setActiveModule(null)} style={{ marginBottom: '2rem' }}>
                    <ChevronLeft size={18} /> Back to Modules
                </button>

                <div className="card">
                    <h2 className="text-2xl" style={{ marginBottom: '1.5rem', color: 'var(--accent-blue)' }}>{activeModule.title}</h2>

                    <div className="flex flex-col gap-4" style={{ marginBottom: '2rem' }}>
                        {activeModule.content.map((point, i) => (
                            <div key={i} className="flex gap-3">
                                <div style={{ color: 'var(--accent-green)', marginTop: '4px' }}><CheckCircle size={18} /></div>
                                <p>{point}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', marginTop: '2rem' }}>
                        <h3 className="text-xl" style={{ marginBottom: '1rem' }}>Final Quiz</h3>
                        <p style={{ marginBottom: '1.5rem' }}>{activeModule.quiz.question}</p>
                        <div className="flex flex-col gap-3">
                            {activeModule.quiz.options.map((opt, i) => (
                                <button
                                    key={i}
                                    className="btn btn-outline"
                                    style={{ textAlign: 'left', display: 'block' }}
                                    onClick={() => {
                                        if (i === activeModule.quiz.answer) {
                                            alert('Correct! Module Completed.');
                                            handleCompleteModule(activeModule.id);
                                        } else {
                                            alert('Incorrect. Try again.');
                                        }
                                    }}
                                >
                                    {i + 1}. {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in container" style={{ maxWidth: '1000px' }}>
            <header className="flex justify-between items-end" style={{ marginBottom: '3rem' }}>
                <div>
                    <h1 className="text-2xl flex items-center gap-2">
                        <GraduationCap size={32} color="var(--accent-blue)" />
                        Cyber Academy
                    </h1>
                    <p className="text-sm" style={{ marginTop: '0.5rem' }}>Completed: {completed.length} / {modules.length} Modules</p>
                </div>
                {completed.length === modules.length && (
                    <div className="badge badge-safe flex items-center gap-2" style={{ padding: '8px 16px' }}>
                        <Award size={18} /> Mastered
                    </div>
                )}
            </header>

            <div className="grid grid-cols-2 gap-8">
                {modules.map((mod) => (
                    <div key={mod.id} className="card relative overflow-hidden group">
                        {completed.includes(mod.id) && (
                            <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px', color: 'var(--accent-green)' }}>
                                <CheckCircle size={24} />
                            </div>
                        )}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: completed.includes(mod.id) ? 'var(--accent-green)' : 'var(--accent-blue)'
                        }}></div>
                        <div className="flex justify-between items-start" style={{ marginBottom: '1rem' }}>
                            <h3 className="text-xl">{mod.title}</h3>
                            <span className="badge badge-safe" style={{ background: completed.includes(mod.id) ? 'rgba(0, 255, 157, 0.2)' : 'rgba(0, 184, 255, 0.1)', color: completed.includes(mod.id) ? 'var(--accent-green)' : 'var(--accent-blue)' }}>
                                {mod.level}
                            </span>
                        </div>
                        <p className="text-sm" style={{ marginBottom: '1.5rem', minHeight: '40px' }}>{mod.desc}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm flex items-center gap-1">
                                <PlayCircle size={14} /> {mod.duration}
                            </span>
                            <button
                                className={`btn ${completed.includes(mod.id) ? 'btn-outline' : 'btn-primary'}`}
                                style={{ padding: '6px 12px', fontSize: '0.875rem' }}
                                onClick={() => setActiveModule(mod)}
                            >
                                {completed.includes(mod.id) ? 'Review Module' : 'Start Module'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card text-center" style={{ marginTop: '3rem', background: 'linear-gradient(45deg, var(--bg-card), rgba(0, 184, 255, 0.1))' }}>
                <BookOpen size={48} style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }} />
                <h2 className="text-xl">Stay Ahead of Threats</h2>
                <p className="text-sm" style={{ margin: '1rem 0' }}>New modules are added weekly based on the latest cyber threat landscape.</p>
                <button className="btn btn-primary">Subscribe to Updates</button>
            </div>
        </div>
    );
};

export default Academy;
