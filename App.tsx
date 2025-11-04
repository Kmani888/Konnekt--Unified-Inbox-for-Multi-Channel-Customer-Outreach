import React, { useState, useEffect } from 'react';
import Splash from './components/Splash';
import UserInfoEntry from './components/UserInfoEntry';
import MainApp from './components/MainApp';
import type { User } from './types';
import AnimatedBackground from './components/AnimatedBackground';

type AppState = 'splash' | 'userInfoEntry' | 'welcome' | 'main';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('splash');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Handle the timed transition for the welcome screen
    if (appState === 'welcome') {
      const timer = setTimeout(() => setAppState('main'), 5000); // Welcome board duration
      return () => clearTimeout(timer);
    }
  }, [appState]);

  const handleProceed = () => {
    setAppState('userInfoEntry');
  };

  const handleInfoSubmit = (submittedUser: User) => {
    setUser(submittedUser);
    setAppState('welcome');
  };

  const renderContent = () => {
    switch (appState) {
      case 'splash':
        return <Splash onProceed={handleProceed} />;
      case 'userInfoEntry':
        return <UserInfoEntry onInfoSubmit={handleInfoSubmit} />;
      case 'welcome':
        return (
          <div className="relative h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden">
             <AnimatedBackground />
             <style>{`
              @keyframes orbit { 0% { transform: rotateY(0deg) rotateX(10deg) translateZ(0); } 100% { transform: rotateY(360deg) rotateX(10deg) translateZ(0); } }
              .animate-orbit { animation: orbit 10s linear infinite; transform-style: preserve-3d; }
              @keyframes fadeInScaleUp { 0% { opacity: 0; transform: scale(0.8); } 100% { opacity: 1; transform: scale(1); } }
              .welcome-board { animation: fadeInScaleUp 1s ease-out forwards; }
              .text-3d {
                transform: rotateX(-10deg) rotateY(10deg);
                text-shadow:
                  1px 1px 0px #1d4ed8,
                  2px 2px 0px #1d4ed8,
                  3px 3px 0px #2563eb,
                  4px 4px 0px #2563eb,
                  5px 5px 0px #3b82f6,
                  6px 6px 10px rgba(0, 0, 0, 0.5);
              }
              @keyframes text-pop-in {
                0% { transform: translateY(20px) scale(0.9); opacity: 0; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
              }
              .animate-text-pop-in {
                animation: text-pop-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
              }
            `}</style>
            
            <div className="relative z-10 welcome-board text-center p-8 rounded-lg">
               {/* 3D Orbiting Logo */}
              <div className="mx-auto mb-6" style={{ perspective: '1000px' }}>
                <div className="relative w-24 h-24 animate-orbit mx-auto">
                  <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50 flex items-center justify-center text-5xl font-bold text-white">
                    K
                  </div>
                </div>
              </div>

              <h1 className="text-2xl text-gray-300 mb-2 animate-text-pop-in" style={{animationDelay: '0.2s'}}>Welcome to</h1>
              <p className="text-6xl font-extrabold text-white tracking-wider mb-6 text-3d animate-text-pop-in" style={{animationDelay: '0.4s'}}>Konnekt</p>
              <p className="text-4xl font-bold text-white text-3d animate-text-pop-in" style={{animationDelay: '0.6s'}}>{user?.name}</p>
            </div>
          </div>
        );
      case 'main':
        return user ? <MainApp user={user} /> : <UserInfoEntry onInfoSubmit={handleInfoSubmit} />;
      default:
        return <Splash onProceed={handleProceed} />;
    }
  };

  return <div className="h-screen w-screen overflow-hidden">{renderContent()}</div>;
};

export default App;