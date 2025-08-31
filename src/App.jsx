import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Renovation from "./components/Renovation";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <Renovation />
      <Footer />
    </Layout>
  );
}