import { Header } from "./components/header";
import { About } from "./components/about";
import { Capabilities } from "./components/capabilities";
import { Contact } from "./components/contact";
import { Projects } from "./components/projects";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-10">
        <Header />
        <About />
        <Capabilities />
        <Contact />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
