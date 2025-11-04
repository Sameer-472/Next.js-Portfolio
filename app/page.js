import Blogs from "@/components/blogs";
import ContactInfo from "@/components/contact";
import Footer from "@/components/footer";
import { Profile } from "@/components/profile";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main id='scrollContainer' name="scrollContainer" className="min-h-screen">
      <Profile />
      <Projects />
      <Timeline />
      <Blogs />
      <Skills />
      <ContactInfo />
      <Footer />
    </main>
  );
}
