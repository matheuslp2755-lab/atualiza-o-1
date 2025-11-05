import React from 'react';
import PostCard from './PostCard';
import type { Post } from './Layout';

interface HomePageProps {
  posts: Post[];
}

const HomePage: React.FC<HomePageProps> = ({ posts }) => {
  return (
    <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        ) : (
          <div className="text-center mt-16">
            <h2 className="text-3xl font-semibold text-white">Página Inicial</h2>
            <p className="mt-4 text-gray-400">As publicações e mensagens apareceriam aqui.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default HomePage;
