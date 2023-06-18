import React from "react";
import { ProjectItem } from "../Components/ProjectItem";
import { ProjectItemLink } from "../Components/ProjectItemLink";

export class FurtherProjectsSection extends React.Component{
    render(){
        return(
            
<div class ="">
  <div class="px-4 lg:px-0 text-center pb-12 pt-32 sm:pt-36 md:pt-64 max-w-[1400px]  text-black mx-auto">
    <h2 class="-skew-x-1 pb-4 md:mb-24 border-neutral-400 font-mohave font-bold text-3xl md:text-6xl inline-block w-full p-0 m-0 -mb-0  text-neutral-800">Weitere Projekte</h2>


    <div class="flex flex-wrap  justify-center gap-4 sm:gap-[64px]">
     
      <ProjectItem title="Bachelor Thesis" tags="Java OpenStreetMaps Android" bg="gradient-1">
        <p class="text-base xl:text-lg ">
          Im Rahmen des Projektes SimRa der TU Berlin wurde eine Methode entwickelt, um die Oberflächengüte von Radwegen anhand von Smartphonesensordaten zu bestimmen. Hierzu wurden Beschleunigungsdaten des Gyroskopes ausgewertet und zusammen mit anderen Daten zu einer Karte der Oberflächengüte aggregiert.
        </p>
        
        <div class="mt-8">
          <ProjectItemLink title="Projekt Website" img="link.png" href="https://www.digital-future.berlin/forschung/projekte/simra/"></ProjectItemLink>
          <ProjectItemLink title="Quellcode" img="github.png" href="https://github.com/felixbublitz/simra-road-quality"></ProjectItemLink>
        </div>
      
      </ProjectItem>

      <ProjectItem title="Trustami Prototyp" tags="AR JavaScript Android" bg="gradient-2">
      <p class="text-base xl:text-lg   ">
          Master-Projekt, Entwurf und Umsetzung in einer Kleingruppe für das Unternehmen Trustami. Entwicklung einer Augmented Reality Anwendung zur Visualisierung von Produkten
        </p>
        
        <div class="mt-8">
          <ProjectItemLink title="Trustami.com" img="link.png" href="https://www.trustami.com/"></ProjectItemLink>
        </div>
      
      </ProjectItem>


      <ProjectItem title="AR-Werbeplakate" tags="OpenCV AR A-Frame Three.JS" bg="gradient-3">
      <p class="text-base xl:text-lg  ">
          Entwicklung einer markerlosen Erkennung und Annotation von Werbeplakaten. Erkennung der Plakate über OpenCV und Darstellung mittels A-Frame          </p>
        
        <div class="mt-8">
          <ProjectItemLink title="Paper ansehen" img="paper.png" href="files/Immersive_Web__Markerless_Detection_and_Enrichment_of_Billboards.pdf"></ProjectItemLink>
        </div>
      
      </ProjectItem>
    

  </div>



  


</div>




</div>

        );
    }
}
