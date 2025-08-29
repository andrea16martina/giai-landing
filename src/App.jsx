import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section
        id="explore"
        className="h-screen bg-white flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Page Under Renovation</h2>
          <p className="text-lg mb-2">
            We're working hard to improve this page. Please check back soon!
          </p>
          <p className="text-gray-600">Thank you for your patience.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}