import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import DemoComponent from "./components/DemoComponent";
import CTASection from "./components/CTASection";
import Layout from "./components/Layout";

/**
 * App - Main application component
 *
 * Root component that orchestrates the entire landing page structure.
 * Renders all major sections including navigation, hero, demo, call-to-action,
 * and footer components within a layout wrapper.
 *
 * @component
 * @returns {JSX.Element} Complete application structure
 *
 * @example
 * ```jsx
 * <App />
 * ```
 */
export default function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <DemoComponent />
      <CTASection />
      <Footer />
    </Layout>
  );
}