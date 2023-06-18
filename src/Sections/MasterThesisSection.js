import React from "react";
import { ProjectSection } from "./ProjectSection";
import { Button } from "../Components/Button";

export class MasterThesisSection extends React.Component {
    render() {
        return (
            <ProjectSection bg="gradient-1" theme="bright"  img="wireframe.png" title="Masterarbeit" subtitle="Alternatives Encoding für Videokonferenzen" tags="TypeScript Webpack WebRTC">
                <p class="text-base xl:text-lg">Das Ziel der Masterarbeit „Evaluation of an efficient web-based video conferencing approach using image reconstruction from face-meshes“ war es, die Eignung von landmark-basierten alternativen Übertragungsmethoden für
                    Videokonferenzen mittels Webtechnologien zu überprüfen.
                    <br />
                    Bereits in vielen wissenschaftlichen Publikationen
                    wurden landmark-basierte Ansätze für die bandbreitenreduzierung bei Videokonferenzen untersucht und
                    erfolgreich angewendet. Die Anwendbarkeit für Webanwendungen war jedoch noch unerforscht.
                    <br /><br />
                    Zu diesem Zweck wurde im Rahmen der Arbeit ein Evaluierungs-Framework entwickelt, das die Realisierung und die Überprüfung verschiedener
                    alternativer Übertragunsverfahren ermöglicht. Für einen Proof-of-Concept wurden zwei Ansätze implementiert: Ein
                    Face-Swapping und ein 3D-Puppetry-Ansatz.
                    <br /><br />
                    Es konnte nachgewiesen werden, dass landmark-basierte Verfahren
                    zur Reduzierung der Datenmenge für den Einsatz im Web geeignet sind. Überprüft wurden die Verfahren auf einem PC und einem Smartphone. Lediglich die Verarbeitungszeiten auf
                    dem getesteten Smartphone waren zu hoch, um eine flüssige Übertragung zu ermöglichen. Daher muss weitergehend
                    untersucht werden, ob verbesserte Methoden entwickelt werden können, die eine besserer visuelle Qualität
                    und Kompatibilität ermöglichen.</p>

                    <Button theme="bright" img="github_b.png" href="https://git.tu-berlin.de/f.bublitz/master-thesis">Auf GitHub ansehen</Button>


            </ProjectSection>
        );
    }
}
