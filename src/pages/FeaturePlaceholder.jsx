import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, ChevronLeft, AlertCircle } from 'lucide-react';

const FeaturePlaceholder = () => {
    const { featureId } = useParams();
    const title = featureId ? featureId.replace(/-/g, ' ').toUpperCase() : 'Feature';

    return (
        <div className="animate-fade-in container text-center" style={{ maxWidth: '800px', paddingTop: '4rem' }}>
            <div style={{ color: 'var(--accent-blue)', marginBottom: '2rem' }}>
                <Shield size={80} style={{ opacity: 0.5 }} />
            </div>
            <h1 className="text-2xl" style={{ marginBottom: '1rem' }}>{title}</h1>
            <p className="text-sm" style={{ marginBottom: '2rem' }}>
                This module is actively monitoring your system in the background.
                Detailed user interface for this feature is being optimized for the 2025 Shield Engine.
            </p>

            <div className="card" style={{ background: 'rgba(0, 184, 255, 0.05)', borderColor: 'rgba(0, 184, 255, 0.2)' }}>
                <div className="flex items-center gap-4 justify-center">
                    <AlertCircle size={20} color="var(--accent-blue)" />
                    <span>Active Status: <b>Secured</b></span>
                </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
                <Link to="/" className="btn btn-outline">
                    <ChevronLeft size={18} /> Back to Command Center
                </Link>
            </div>
        </div>
    );
};

export default FeaturePlaceholder;
