import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/HeroSection";
import Learn from "@/components/Learn";
import Features from "@/components/Features";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import Stats from "@/components/stats";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
<div className="bg-black border-t">
  <HeroSection/>
  <Learn/>
  <Stats/>
  <Features/>
  <Analytics/>
  <Footer/>
</div>
  )
}
