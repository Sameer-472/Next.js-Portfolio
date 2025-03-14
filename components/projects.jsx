"use client"
import ProjectCard from "./projectCard";

const blogs = [
    {
        title: "How to Upload files on IPFS using React",
        img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fiuixn0s0spkymwse1y6r.png",
        description: "In this article you will learn how you can upload files on IPFS using react",
        demo: "https://dev.to/sameer472/how-to-upload-files-on-ipfs-infuraio-using-react-56g",
        code: "https://github.com/Sameer-472/expense-tracker-rebuild",
        tech: ["Javascript", "React", "IPFS", "Infura.io", "web3"]
    },
    {
        title: "Quick overview of layer 2 solutions in blockchain",
        img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpk9yj1x2hii78j4c8vfh.jpg",
        description: "Quick overview of layer 2 solutions in blockchain",
        demo: "https://dev.to/sameer472/quick-guide-about-layer-2-scaling-solutions-5d9p",
        code: "https://github.com/Sameer-472/expense-tracker-rebuild",
        tech: ["Blockchain", "Research", "web3"]
    },
    {
        title: "What the hell is Closure in JS?",
        img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwreybj2ze7kimsgz13np.png",
        description: "In-depth overview of Closure in JS ",
        demo: "https://dev.to/sameer472/what-the-fk-is-closure-in-js-1j4o",
        code: "https://github.com/Sameer-472/expense-tracker-rebuild",
        tech: ["Javascript", "frontend", "react", "webdev"]
    },
]


export default function Projects() {
    return (
        <div className="flex items-center justify-center flex-col my-10">
            <h2 className="text-3xl font-bold mb-2 text-white">Recent featured projects</h2>
            <p className="text-gray-400 mb-8">Explore some of my personal and proffesional projects</p>
            <div className="relative w-full max-w-5xl mx-auto grid grid-cols-12 gap-6">
                {blogs.map((blog, index) => (
                    <div key={index} className="col-span-6">
                        <ProjectCard
                            key={index}
                            title={blog.title}
                            description={blog.description}
                            tags={blog.tech}
                            link={blog.demo}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
