"use client";

import { Element } from "react-scroll";
import BlogCard from "./blogsCard";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "How to Upload files on IPFS using React",
    img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fiuixn0s0spkymwse1y6r.png",
    description:
      "In this article youi will learn how you can upload files on IPFS using react",
    demo: "https://dev.to/sameer472/how-to-upload-files-on-ipfs-infuraio-using-react-56g",
    code: "https://github.com/Sameer-472/expense-tracker-rebuild",
    tech: ["Javascript", "React", "IPFS", "Infura.io", "web3"],
  },
  {
    title: "Quick overview of layer 2 solutions in blockchain",
    img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpk9yj1x2hii78j4c8vfh.jpg",
    description: "Quick overview of layer 2 solutions in blockchain",
    demo: "https://dev.to/sameer472/quick-guide-about-layer-2-scaling-solutions-5d9p",
    code: "https://github.com/Sameer-472/expense-tracker-rebuild",
    tech: ["Blockchain", "Research", "web3"],
  },
  {
    title: "What the hell is Closure in JS?",
    img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwreybj2ze7kimsgz13np.png",
    description: "In-depth overview of Closure in JS ",
    demo: "https://dev.to/sameer472/what-the-fk-is-closure-in-js-1j4o",
    code: "https://github.com/Sameer-472/expense-tracker-rebuild",
    tech: ["Javascript", "frontend", "react", "webdev"],
  },
];

export default function Blogs() {
    const pathName = usePathname();
    const isBlogPage = pathName === '/blogs'
  return (
    <Element name="blogs">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        viewport={{ once: false }}
        className="flex justify-start flex-col my-5 w-full mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2 dark:text-white text-gray-800">
          Blogs
        </h2>
        <p className="dark:text-gray-400 mb-8 text-start  text-gray-500">
          Explore my thoughts on software development, emerging tech, and
          industry trends.
        </p>
        <div className="relative grid grid-cols-12 gap-6 w-full">
          {blogs.map((blog, index) => (
            <div key={index} className="col-span-12 md:col-span-6">
              <BlogCard
                key={index}
                title={blog.title}
                description={blog.description}
                tags={blog.tech}
                link={blog.demo}
              />
            </div>
          ))}
        </div>
        {!isBlogPage && (
          <div className="mt-6 flex justify-center w-full">
            <Link href="/blogs" className="w-full focus-ring rounded-lg">
              <div className="w-full bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg shadow-primary/15 transition-all py-3 border border-border flex items-center justify-center gap-2 hover:text-primary/80 hover:bg-accent/30">
                <span>View more</span>
                <ArrowRight className="inline-block w-[18px] h-[18px]" />
              </div>
            </Link>
          </div>
        )}
      </motion.div>
    </Element>
  );
}
