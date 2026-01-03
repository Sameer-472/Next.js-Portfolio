import Blogs from "@/components/blogs";
import ContactInfo from "@/components/contact";
import Experience from "@/components/Experience";
import Footer from "@/components/footer";
import { Profile } from "@/components/profile";
import FeatureProjects from "@/components/featureProjects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
// import Script from "next/script";


export default function Home() {

  return (
    // <div id='scrollContainer' name="scrollContainer" className="min-h-screen ">

    // </div>
    <main className="flex-1">
      <section className="px-6 py-4 space-y-16">
        <Profile />
        <Experience />
        <FeatureProjects />
        {/* <Timeline /> */}
        <Blogs />
        {/* <Skills /> */}
        <ContactInfo />
        <Footer />
      </section>
    </main>
  );
}
