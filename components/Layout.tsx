import React, { useState } from 'react';
import { LogoIcon, HomeIcon, UserIcon, SearchIcon, MessageIcon, PlusCircleIcon } from './Icons';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import MessagesPage from './MessagesPage';
import ProfilePage from './ProfilePage';
import EditProfilePage from './EditProfilePage';
import CreatePostModal from './CreatePostModal';

export type Post = {
  id: number;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  content: string;
  image?: string;
};

type Page = 'home' | 'search' | 'messages' | 'profile' | 'editProfile';

const initialPosts: Post[] = [
  {
    id: 1,
    author: {
      name: 'Alice',
      handle: '@alice',
      avatar: 'https://i.pravatar.cc/150?u=alice',
    },
    content: 'Que dia lindo para um passeio no parque! ☀️🌳 #natureza',
  },
  {
    id: 2,
    author: {
      name: 'Bob',
      handle: '@bob',
      avatar: 'https://i.pravatar.cc/150?u=bob',
    },
    content: 'Acabei de terminar um projeto incrível de programação. Tão satisfeito com o resultado! 💻🚀 #devlife',
  }
];

interface LayoutProps {
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ onLogout }) => {
  const [activePage, setActivePage] = useState<Page>('home');
  const [isCreatePostModalOpen, setCreatePostModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  // Fix: Updated handleAddPost to accept an optional image URL.
  const handleAddPost = (content: string, image?: string) => {
    const newPost: Post = {
      id: Date.now(),
      author: {
        name: 'Seu Nome',
        handle: '@seunome',
        avatar: 'https://i.pravatar.cc/150?u=currentuser',
      },
      content,
      image,
    };
    setPosts([newPost, ...posts]);
    setCreatePostModalOpen(false);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <HomePage posts={posts} />;
      case 'search':
        return <SearchPage />;
      case 'messages':
        return <MessagesPage />;
      case 'profile':
        return <ProfilePage onEditProfile={() => setActivePage('editProfile')} onLogout={onLogout} />;
      case 'editProfile':
        return <EditProfilePage onBack={() => setActivePage('profile')} />;
      default:
        return <HomePage posts={posts} />;
    }
  };

  const NavButton: React.FC<{ page: Page, children: React.ReactNode }> = ({ page, children }) => (
    <button
      onClick={() => setActivePage(page)}
      aria-label={`Go to ${page}`}
      className={`p-2 rounded-full transition-colors ${activePage === page ? 'text-indigo-400 bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <header className="sticky top-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActivePage('home')}>
              <div className="text-indigo-400">
                <LogoIcon />
              </div>
              <span className="text-xl font-bold text-white">Mundo Aberto</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <NavButton page="home"><HomeIcon className="w-6 h-6" /></NavButton>
              <button
                onClick={() => setCreatePostModalOpen(true)}
                aria-label="Create new post"
                className="p-2 rounded-full text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
              >
                <PlusCircleIcon className="w-6 h-6" />
              </button>
              <NavButton page="search"><SearchIcon className="w-6 h-6" /></NavButton>
              {/* Fix: Corrected the broken navigation buttons. */}
              <NavButton page="messages"><MessageIcon className="w-6 h-6" /></NavButton>
              <NavButton page="profile"><UserIcon className="w-6 h-6" /></NavButton>
            </div>
          </div>
        </nav>
      </header>
      
      <div className="flex-grow">
        {renderContent()}
      </div>

      {isCreatePostModalOpen && (
        <CreatePostModal 
          onClose={() => setCreatePostModalOpen(false)}
          onAddPost={handleAddPost}
        />
      )}
    </div>
  );
};

export default Layout;