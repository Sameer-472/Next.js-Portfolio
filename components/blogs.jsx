"use client"

import BlogCard from "./blogsCard";

const blogs = [
    {
        title: "Mastering React Hooks",
        description: "An in-depth guide to understanding and using React Hooks effectively in modern web development.",
        date: "Feb 2024",
        tags: ["React", "Hooks", "JavaScript"],
        link: "https://yourblogsite.com/react-hooks",
    },
    {
        title: "Next.js 14 New Features",
        description: "Explore all the exciting new features and improvements in Next.js 14.",
        date: "Jan 2024",
        tags: ["Next.js", "Web Development", "JavaScript"],
        link: "https://yourblogsite.com/nextjs-14-features",
    },
    {
        title: "State Management in React",
        description: "Comparing Redux, Zustand, and Jotai for managing state in React applications.",
        date: "Dec 2023",
        tags: ["React", "Redux", "Zustand"],
        link: "https://yourblogsite.com/react-state-management",
    },
];

export default function Blogs() {
    return (
        <div className="flex items-center justify-center flex-col">
            <h2 className="text-3xl font-bold mb-2 text-white">My Blogs and Post</h2>
            <p className="text-gray-400 mb-8">Read my latest articles and posts</p>
            <div className="relative w-full max-w-4xl mx-auto grid grid-cols-12 gap-6">
                {blogs.map((blog, index) => (
                    <div key={index} className="col-span-6">
                        <BlogCard
                            key={index}
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            tags={blog.tags}
                            link={blog.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
