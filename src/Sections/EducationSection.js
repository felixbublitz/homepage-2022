import React from "react";
import { SpeechBubble } from "../Components/SpeechBubble";
import { TimelineItem } from "../Components/TimelineItem";
import { Timeline } from "../Components/Timeline";
import { Button } from "../Components/Button";
export class EducationSection extends React.Component {

    render() {
        return (
                <div className="py-8 sm:py-24 md:py-52 h-full  lg:px-0 text-center ">
                    <div className="inline-block">
                        <h2 className="-skew-x-1 pt-4 pb-4 sm:py-0 md:mb-12 border-neutral-400 font-mohave font-bold text-3xl md:text-6xl inline-block w-full p-0 m-0 -mb-0  text-neutral-800 ">Ausbildung</h2>
                    </div>

                    <Timeline>
                        <TimelineItem title="Alg. Hochschulreife" subtitle="Schwerpunkt: Physik und Chemie" location="Hamburg" start="" end="2014"></TimelineItem>
                        <TimelineItem title="Bachelor of Science" subtitle="Informatik" location="TU Berlin" start="2015" end="2019">
                            <div className="hidden lg:block">
                                        <br />
                                        <p className="font-bold text-base xl:text-lg font-dosis mb-[1px]">Abschlussarbeit:</p>
                                        <p className="text-base xl:text-lg font-dosis mb-[1px]">„Erkennung der Oberflächengüte von Radwegen auf Basis von Smartphonesensordaten“</p>
                                        <Button img="github.png" href="https://github.com/felixbublitz/simra-road-quality">Quellcode</Button>
                                    </div>
                        </TimelineItem>
                        <TimelineItem title="Master of Science" subtitle="Computer Science" location="TU Berlin" start="2019" end="2022">
                            <div className="hidden lg:block">
                                        <br />
                                        <p className="font-bold text-base xl:text-lg font-dosis mb-[1px]">Abschlussarbeit:</p>
                                        <p className="text-base xl:text-lg font-dosis mb-[1px]">„Evaluation of an efficient web-based video conferencing approach using image reconstruction from face-meshes“</p>
                                        <Button img="github.png" href="https://github.com/felixbublitz/master-thesis">Quellcode</Button>
                                    </div>

                        </TimelineItem>
                    </Timeline>

                </div>
        );
    }
}
