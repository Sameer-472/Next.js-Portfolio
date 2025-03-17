import Blogs from "@/components/blogs";
import ContactInfo from "@/components/contact";
import Footer from "@/components/footer";
import { Profile } from "@/components/profile";
import Projects from "@/components/projects";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <div id='scrollContainer' name="scrollContainer" className="min-h-screen ">
      <Profile />
      <Blogs />
      <Timeline />
      <Projects />
      <ContactInfo />
      <Footer />
    </div>
  );
}
