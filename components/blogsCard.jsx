import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const BlogCard = ({ title, description, date, tags, link }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{
        scale: 1.01, // Slight zoom
        boxShadow: "0px 4px 25px rgba(80, 130, 255, 0.3)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="block p-6 bg-gray-900 rounded-lg border border-gray-600 shadow-lg w-full"
    >
      <h3 className="text-xl font-semibold text-white flex justify-between items-center gap-2">
        {title}
        <ArrowUpRight className="w-5 h-5 text-blue-400" />
      </h3>
      <p className="text-gray-400 text-sm mt-1">{date}</p>
      <p className="text-gray-300 mt-2 line-clamp-3">{description}</p>
      <div className="flex gap-2 mt-3 flex-wrap">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-blue-500 text-white text-sm rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default BlogCard;
