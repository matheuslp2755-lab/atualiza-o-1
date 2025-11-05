import React from 'react';
import { SearchIcon } from './Icons';

const dummyUsers = [
  { id: 1, name: 'Alice', handle: '@alice', avatar: 'https://i.pravatar.cc/150?u=alice' },
  { id: 2, name: 'Bob', handle: '@bob', avatar: 'https://i.pravatar.cc/150?u=bob' },
  { id: 3, name: 'Charlie', handle: '@charlie', avatar: 'https://i.pravatar.cc/150?u=charlie' },
  { id: 4, name: 'Diana', handle: '@diana', avatar: 'https://i.pravatar.cc/150?u=diana' },
];

const SearchPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Pesquisar</h1>
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Pesquisar usuários..."
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Sugestões</h2>
          {dummyUsers.map(user => (
            <div key={user.id} className="flex items-center justify-between bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4">
                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold text-white">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.handle}</p>
                </div>
              </div>
              <button className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-lg text-sm hover:bg-indigo-500 transition">
                Seguir
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SearchPage;
