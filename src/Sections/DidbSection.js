import React from "react";
import { ProjectSection } from "./ProjectSection";

export class DidbSection extends React.Component{
    render(){
        return(
            <ProjectSection theme="dark" orientation='right'  title="Deutschkurs in der Box" subtitle="Projektwerkstatt an der TU Berlin" tags="PHP JavaScript SQL" img="didb.jpg">

<p class="text-base xl:text-lg">Im Rahmen studentischen Engagements entstand die Projektwerkstatt “Deutschkurs in der Box”. Ziel war es,
                    die
                    in Folge der Flüchtlingskrise 2015 enstanden Initiativen für kostenlose Deutschkurse für Geflüchtete zu
                    unterstüzen. Hierfür wurden Arbeitsmaterialien kreiert und kostenlos über eine Webportal bereitgestellt.
                  <br/><br/>
                  Das Portal ermöglichte es Initiativen vorhandene Arbeitsblätter zu durchstöbern oder explizit nach ihnen anhand von Stichwörtern und verschiedenen Filtermöglichkeiten
                    zu suchen. Arbeitsblätter ließen sich in gewünschter Stückzahl zu einem Druckauftrag
                    zusammenfassen und zum Abschluss gebündelt drucken.
                    Über ein eigens entwickeltes Content Management System (CMS) ließen sich Arbeitsblätter hochladen, verlinkungen zwischen
                    Arbeitsblättern etablieren, sowie Blogbeiträge editieren.
                    <br/><br/>
                    Das Projekt wurde 2018 mit dem Nachhaltigkeitspreis der TU Berlin ausgezeichnet. Leider lief die Förderung
                  durch die TU im Jahr 2020 aus.</p>
                  <iframe class="mt-12 md:w-[500px] w-full inline-block rounded-xl shadow-md" width="490" height="276" src="https://www.youtube.com/embed/xQUL_jBfqck?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            


            </ProjectSection>

         
         
        );
    }
}
