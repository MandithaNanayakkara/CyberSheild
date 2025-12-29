# 🛡️ CyberShield AI – Unified Cybersecurity Command Center

**CyberShield AI** is a premium, all-in-one cybersecurity application that merges the robust detection capabilities of *CyberGuard* and *PhishGuard* into a single, high-performance platform. Designed with a sleek "Dark/Neon Cyberpunk" aesthetic, it provides 19+ specialized security tools to protect users from modern digital threats.

---

## 🚀 Key Features

### 1. Unified 19-Feature Security Suite
*   **AI Phishing Detection**: Real-time analysis of text messages and SMS for scam patterns.
*   **Advanced Email Analyzer**: Deep-scan email headers (SPF/DKIM) and body content for impersonation.
*   **Malicious URL Scanner**: Instant verification of domain safety using global blacklists.
*   **Secure QR Scanner**: Proactive analysis of QR destinations to prevent "quishing" attacks.
*   **Shield Behavior Monitor**: Heuristic analysis of system sessions to detect social engineering.
*   **Identity Audit**: Local password strength analysis and common breach pattern checking.
*   **Dark Web & Network Surveillance**: Monitors for credential leaks and inspects WiFi integrity.

### 2. Interactive Cyber Academy
*   Gamified learning modules covering Phishing 101, Social Engineering, and Device Protection.
*   Integrated quizzes and progress tracking to verify operative knowledge.

### 3. Secure Onboarding
*   **SMTP Email Verification**: Fully integrated secure signup flow requiring real-time 6-digit code validation.
*   **Secure Session Management**: Protected routes and encrypted local session persistence.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**: Core application framework.
- **Vite**: High-speed build tool and development server.
- **Lucide-React**: Premium iconography for the security interface.
- **Vanilla CSS**: Custom-built design system with glassmorphism and motion effects.

### Backend (Security Gateway)
- **Node.js & Express**: API gateway for sensitive operations.
- **Nodemailer**: SMTP integration for secure email dispatch.
- **Dotenv**: Environment variable security for private credentials.

---

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/CyberShield.git
cd CyberShield
```

### 2. Setup the Security Server (Backend)
Navigate to the server directory, install dependencies, and create a `.env` file:
```bash
cd server
npm install
```
Create a `.env` file with your credentials:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```
Start the server:
```bash
node server.js
```

### 3. Setup the Frontend
Open a new terminal, navigate to the root directory, and run:
```bash
npm install
npm run dev
```
The application will be available at `http://localhost:5173`.

---

## 🎨 Aesthetic Design
CyberShield features a high-end **Cyberpunk UI** including:
- **Vibrant Neon Accents**: Visual cues for safe vs. dangerous data.
- **Glassmorphism**: Transparent, blurred interfaces for a modern feel.
- **Micro-animations**: Dynamic transitions and scan-line effects for an immersive experience.

---

## 📜 Copyright
© 2025 CyberShield. All rights reserved.
