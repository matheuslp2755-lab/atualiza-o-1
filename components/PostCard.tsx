import React from 'react';
import type { Post } from './Layout';
import { HeartIcon, CommentIcon } from './Icons';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden">
      <div className="p-6">
        <div className="flex items-center">
          <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <p className="font-bold text-white">{post.author.name}</p>
            <p className="text-sm text-gray-400">{post.author.handle}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-300 whitespace-pre-wrap">{post.content}</p>
      </div>
        {post.image && (
          <div className="bg-gray-900">
            <img src={post.image} alt="Post content" className="w-full h-auto max-h-[600px] object-contain" />
          </div>
        )}
      <div className="px-6 py-4 border-t border-gray-700">
        <div className="flex items-center space-x-6 text-gray-400">
          <button className="flex items-center space-x-2 hover:text-red-500 transition-colors">
            <HeartIcon className="w-6 h-6" />
            <span className="text-sm font-semibold">Gostar</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-indigo-400 transition-colors">
            <CommentIcon className="w-6 h-6" />
            <span className="text-sm font-semibold">Comentar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
