import React from 'react';
import { SettingsIcon, LogOutIcon, UserIcon } from './Icons';
import type { UserProfile } from './Layout';

interface ProfilePageProps {
  onEditProfile: () => void;
  onLogout: () => void;
  userProfile: UserProfile;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onEditProfile, onLogout, userProfile }) => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
          <div className="flex flex-col items-center sm:flex-row sm:items-start text-center sm:text-left">
            {userProfile.avatar ? (
              <img 
                src={userProfile.avatar}
                alt="User Avatar" 
                className="w-32 h-32 rounded-full border-4 border-gray-600 object-cover"
              />
            ) : (
              <div className="w-32 h-32 rounded-full border-4 border-gray-600 bg-gray-700 flex items-center justify-center">
                <UserIcon className="w-20 h-20 text-gray-500" />
              </div>
            )}
            <div className="mt-4 sm:mt-0 sm:ml-6 flex-grow">
              <div className="flex items-center justify-center sm:justify-between">
                  <h1 className="text-3xl font-bold text-white">{userProfile.name}</h1>
                  <button 
                    onClick={onEditProfile}
                    className="hidden sm:flex items-center space-x-2 bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
                  >
                    <SettingsIcon className="w-4 h-4" />
                    <span>Editar Perfil</span>
                  </button>
              </div>
              <p className="text-indigo-400 mt-1">{userProfile.handle}</p>
              <p className="text-gray-300 mt-4 whitespace-pre-wrap">
                {userProfile.bio}
              </p>
               <button 
                    onClick={onEditProfile}
                    className="mt-4 sm:hidden w-full flex items-center justify-center space-x-2 bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
                  >
                    <SettingsIcon className="w-4 h-4" />
                    <span>Editar Perfil</span>
                  </button>
            </div>
          </div>
          <div className="mt-6 border-t border-gray-700 pt-6">
              <button
                  onClick={onLogout}
                  className="w-full flex items-center justify-center space-x-2 bg-red-600/20 text-red-400 font-semibold px-4 py-3 rounded-lg hover:bg-red-600/40 hover:text-red-300 transition"
                  aria-label="Sair da conta"
              >
                  <LogOutIcon className="w-5 h-5" />
                  <span>Sair da Conta</span>
              </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;