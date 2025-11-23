import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollRestoration from "./components/ScrollRestoration";
import useReveal from "./hooks/useReveal";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import IndigenousMiningPage from "./pages/IndigenousMiningPage";
import InnovationPage from "./pages/InnovationPage";
import NotFoundPage from "./pages/NotFoundPage";
import TeamPage from "./pages/TeamPage";

const AppLayout = () => {
  useReveal();

  return (
    <div className="flex min-h-screen flex-col bg-stp-cream text-stp-dark">
      <Navbar />
      <ScrollRestoration />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/indigenous-mining" element={<IndigenousMiningPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppLayout />
  </BrowserRouter>
);

export default App;
