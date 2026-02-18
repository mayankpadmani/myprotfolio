import Nav from "@/component/Nav";
import BackgroundBlobs from "@/component/blob";
import Hero from "@/component/HeroScetion";
import About from "@/component/about";
import Skills from "@/component/Skill";
import SoftwareList from "@/component/softwarelist";
import Organizations from "@/component/organizations";
import Projects from "@/component/project";
import Contact from "@/component/contact";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <>
    

      <BackgroundBlobs />
      <Nav />
      <Hero />            
      <About />          
      <Skills />          
      <SoftwareList />    
      {/* <Organizations />   */}
      <Projects />   
      <Contact /> 
      <Footer />
    </>
  );
}
