import React from "react";
import { ProjectSection } from "./ProjectSection";
import { Button } from "../Components/Button";

export class DrinkitSection extends React.Component{
    render(){
        return (
            <ProjectSection bg="gradient-2" theme="bright"  img="drinkit-logo.png" title="DrinkIT!" subtitle="Cross-Plattform Party Spiel" tags="JavaScript PHP Node.js Sockets SQL">
              <p class="text-base xl:text-lg">Mit DrinkIt! wird deine Party garantiert zum Highlight!
          Messe dich mit deinen Freunden in verschiedenen Herausforderungen und hüte dich vor der Bestrafung!
         
          </p>
          <br/>

          <ul class="text-base xl:text-lg mt-8" >
            <li>• Spiele gleichzeitig mit 12 deiner Freunde</li>
            <li>• Beweise dich in 5 unterschiedlichen Herausforderungen</li>
            <li>• Kompatibel mit Android und iOS</li>
          </ul>


          <Button theme="bright" img="play.png" href="https://drinkit.felixbublitz.de">Jetzt Spielen</Button>

        
         
            </ProjectSection>
        );
    
    }
}
