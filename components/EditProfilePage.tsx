import React, { useState, useRef } from 'react';
import { ChevronLeftIcon, UserIcon } from './Icons';
import type { UserProfile } from './Layout';

interface EditProfilePageProps {
    onBack: () => void;
    onSave: (profileData: Partial<UserProfile>) => void;
    userProfile: UserProfile;
}

const EditProfilePage: React.FC<EditProfilePageProps> = ({ onBack, onSave, userProfile }) => {
    const [name, setName] = useState(userProfile.name);
    const [bio, setBio] = useState(userProfile.bio);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(userProfile.avatar || null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave({
        name,
        bio,
        avatar: avatarPreview || '',
      });
    };

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="max-w-2xl mx-auto">
                <div className="flex items-center mb-6">
                    <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-700 transition mr-4">
                        <ChevronLeftIcon className="w-6 h-6 text-white" />
                    </button>
                    <h1 className="text-3xl font-bold text-white">Editar Perfil</h1>
                </div>

                <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col items-center space-y-4">
                            {avatarPreview ? (
                                <img src={avatarPreview} alt="Avatar preview" className="w-32 h-32 rounded-full object-cover border-4 border-gray-600" />
                            ) : (
                                <div className="w-32 h-32 rounded-full border-4 border-gray-600 bg-gray-700 flex items-center justify-center">
                                    <UserIcon className="w-20 h-20 text-gray-500" />
                                </div>
                            )}
                            <div className="flex space-x-2">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    ref={fileInputRef}
                                    className="hidden"
                                />
                                <button
                                    type="button"
                                    onClick={() => fileInputRef.current?.click()}
                                    className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition"
                                >
                                    Mudar foto
                                </button>
                                {avatarPreview && (
                                    <button
                                        type="button"
                                        onClick={() => setAvatarPreview(null)}
                                        className="bg-red-600/20 text-red-400 font-semibold px-4 py-2 rounded-lg text-sm hover:bg-red-600/40 hover:text-red-300 transition"
                                    >
                                        Remover
                                    </button>
                                )}
                            </div>
                        </div>
                        
                        <div>
                            <label className="text-sm font-medium text-gray-300" htmlFor="edit-name">Nome</label>
                            <input
                                id="edit-name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-2 w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium text-gray-300" htmlFor="edit-bio">Bio</label>
                            <textarea
                                id="edit-bio"
                                rows={4}
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="mt-2 w-full px-4 py-2.5 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <div className="flex justify-end space-x-4 pt-4">
                            <button type="button" onClick={onBack} className="bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-gray-500 transition">
                                Cancelar
                            </button>
                            <button type="submit" className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-indigo-500 transition">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default EditProfilePage;