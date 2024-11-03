import { Comments } from "@/components/Comments";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <main>
      <Landing />
      <Feature />
      <Comments />
      <Pricing />
      <Footer />
    </main>
  );
}
