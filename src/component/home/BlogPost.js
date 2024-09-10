import React from 'react';

const BlogPost = ({ title, date, author, imageUrl }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="text-sm text-gray-500">Blog</span>
        <h3 className="text-lg font-semibold mt-2 mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{date} / By {author}</p>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Here are 15 Sure-Shot Ways to Fix “Netflix Error Code”',
      date: '14 Feb, 2024',
      author: 'Anna Rosé',
      imageUrl: '/image/blog1.jpeg',
    },
    {
      title: 'The Appeals Court to Hear the Legal Challenges to the TikTok Ban',
      date: '14 Feb, 2024',
      author: 'Anna Rosé',
      imageUrl: '/image/blog2.jpg', // Replace with actual image URL
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-between py-10 px-4 w-[80%] mx-auto mt-2">
      {/* Left Section */}
      <div className="lg:w-1/3">
        <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-500">
          Biz Pro Blogs
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-4">
          Recent <span className="text-blue-600">Blog Posts</span> & <span className="text-blue-600">News Biz Pro</span>
        </h2>
        <p className="text-gray-500 mb-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          Read More <span className="ml-2">➔</span>
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-2/3 flex space-x-4 mt-8 lg:mt-0">
        {blogPosts.map((post, index) => (
          <BlogPost key={index} title={post.title} date={post.date} author={post.author} imageUrl={post.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
