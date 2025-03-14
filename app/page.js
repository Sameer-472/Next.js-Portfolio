import Blogs from "@/components/blogs";
import { Profile } from "@/components/profile";
import Projects from "@/components/projects";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Profile />
      <Timeline />
      <Blogs />
      <Projects />
    </div>
  );
}
