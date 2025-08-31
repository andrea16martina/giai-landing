import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import DemoComponent from "./components/DemoComponent";
import Renovation from "./components/Renovation";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <DemoComponent />
      <Renovation />
      <Footer />
    </Layout>
  );
}