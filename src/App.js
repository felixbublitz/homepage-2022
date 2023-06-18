import './App.css';

import WebFont from 'webfontloader';
import { useEffect, useState } from 'react';
import { DidbSection } from './Sections/DidbSection';
import { DrinkitSection } from './Sections/DrinkitSection';
import { EducationSection } from './Sections/EducationSection';
import { OverviewSection } from './Sections/OverviewSection';
import { MasterThesisSection } from './Sections/MasterThesisSection';
import { SkillsSection } from './Sections/SkillsSection';
import { FurtherProjectsSection } from './Sections/FurtherProjectsSection';
import { Footer } from './Footer';



function App() {
  const [fontLoaded, setFontLoaded] = useState(false);


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Mohave', 'Scope One', 'Dosis', "Exo"],
        
      },
      active: function() {
        console.log("active");
        setFontLoaded(true);  
        }
    })});
  


  return (
  <div className='bg-gray-100  w-full'>

    <div className={(fontLoaded?"opacity-1":"opacity-0") + " transition ease-in-out duration-1000 transition-opacity"} >
        <OverviewSection></OverviewSection>
        <EducationSection></EducationSection>
        <SkillsSection></SkillsSection>
        <MasterThesisSection></MasterThesisSection>
        <DidbSection></DidbSection>
        <DrinkitSection></DrinkitSection>
        <FurtherProjectsSection></FurtherProjectsSection>
        <Footer></Footer>
    </div>
    </div>

  );
}

export default App;
