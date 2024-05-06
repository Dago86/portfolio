import React from "react";
import "./App.css";
import Header from "./components/Header";
import WelcomeSection from "./components/WelcomeSection";
import About from "./components/About";
import SectionSeparator from "./components/SectionSeparator";
import InfoLine from "./components/Infoline";
import ContactSection from "./components/ContactSection";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <WelcomeSection />
        <About />
        <SectionSeparator />
        <InfoLine
          subject="Writer"
          description="I have been writing for cultural magazines for years! I've covered a lot of topics - such as music, literature, mass media - and lately, I've been mainly collaborating with Indiscreto, writing about video games and Japanese stuff."
          link="My Linktree ;)"
          url="https://linktr.ee/diegodeangelis"
        />
        <InfoLine
          subject="AI Art"
          description="I have two projects where I create images with artificial intelligence. I mostly use DALL-E and Midjourney!"
          link="My main project about Bologna"
          url="https://www.instagram.com/chatgpt.disegna_bologna/"
        />
        <InfoLine
          subject="Software Dev"
          description="I mostly deal with writing frontend code
          (in React, which I also used to make this silly site!) for a company
          called Develer."
          link="Go to my company"
          url="https://www.develer.com/"
        />
        <SectionSeparator />
        <p className="title-images">Images created with Midjourney v6</p>
        <div className="image-container">
          <ImageSlider />
        </div>
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
