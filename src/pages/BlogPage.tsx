import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { getBlogPosts, BlogPost } from '../lib/contentful';
import FloatingOrb from '../components/FloatingOrb';

function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getBlogPosts();
        setPosts(fetchedPosts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0d0318] via-[#0d0318] to-black">
        <div className="text-white text-xl">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0d0318] via-[#0d0318] to-black">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0d0318] via-[#0d0318] to-black">
      <FloatingOrb
        color="#9C2Fdf"
        size="300px"
        position="-top-20 -left-20"
        blur="120px"
      />
      <FloatingOrb
        color="#9C2Fdf"
        size="250px"
        position="top-1/5 -right-20"
        blur="100px"
      />
      <FloatingOrb
        color="#5e17eb"
        size="200px"
        position="bottom-20 left-20"
        blur="80px"
      />

      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Latest Security Insights
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest cybersecurity trends, threats, and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group relative bg-gradient-to-br from-[#130423] to-[#220937] rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4 group-hover:text-[#9C27DF] transition-colors">
                  {post.title}
                </h2>

                {post.imageUrl && (
                  <div className="aspect-video overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;