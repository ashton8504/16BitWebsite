import Header from "../Components/Header.js";
import LandingImage from "../Components/Landing-Image.js";
import ExampleWebsites from "../Components/Example-Websites.js";
import About from "../Components/About.js";
import ContactUs from "../Components/Contact-Us.js";
import Footer from "../Components/Footer.js";

function Home() {
  return (
    <>
      <Header />
      <LandingImage />
      <ExampleWebsites />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Home;
