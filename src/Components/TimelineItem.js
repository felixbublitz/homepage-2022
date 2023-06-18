import React from "react";
import { SpeechBubble } from "./SpeechBubble";

export class TimelineItem extends React.Component {
    render() {

        return (
            <li className="rounded-xl py-2 sm:p-4 sm:p-0 sm:bg-inherit md:my-0 my-2 lg:my-0 w-full md:w-1/3">
                <div className="items-center  w-full flex flex-wrap ">
                    <div className="text-center  md:mb-4 md:w-full mr-4 sm:mr-6 md:mr-0">
                        <p className="pb-1 md:pb-0 italic md:inline md:px-2 md:align-middle text-gray-400 text-base">{this.props.start}</p>
                        <div className="inline-block md:align-middle skew-y-0 md:skew-y-0 md:-skew-x-12 shadow-md  md:h-12 md:w-32  lg:w-52  rounded-md bg-gradient-1 h-16 sm:h-32 w-[16px]  sm:w-8 " ></div>
                        <p className="md:inline italic md:px-2 md:align-middle text-gray-400  text-base">{this.props.end}</p>
                    </div>
                    <SpeechBubble title={this.props.title} subtitle={this.props.subtitle} location={this.props.location}>
                        {this.props.children}
                    </SpeechBubble>
                </div>
            </li>
        );
    }
}
