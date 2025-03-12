import { Profile } from "@/components/profile";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <Profile />
      <Timeline />
    </div>
  );
}
