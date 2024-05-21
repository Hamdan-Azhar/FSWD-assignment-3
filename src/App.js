import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import IntroductionSection from "./components/IntroductionSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <IntroductionSection/>
          <ProjectsSection />
          <SkillsSection/>
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
