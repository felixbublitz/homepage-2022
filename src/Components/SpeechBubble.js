import React from "react";

export class SpeechBubble extends React.Component{
    render(){
       
        return(
        <div className="relative m-auto w-4 md:w-52 shadow-md   lg:w-72 xl:w-96 md:mt-[72px] flex-grow md:flex-grow-0 after:content-[hidden md:inline; content: ''; position: absolute; top: -28px; margin-left: -28px; border: 28px solid #ffffff00; border-bottom-color: #ffffff; border-top: 0;]">
            <div className="bg-white rounded-2xl w-full relative sm:bg-gradient-w px-8 lg:px-8 py-6 lg:py-12">
                <p className="text-xl font-dosis  font-bold mb-1">{this.props.title}</p>
                <p className="text-base xl:text-lg font-dosis mb-[1px]">{this.props.subtitle}</p>
                
                <div className="">
                    <div>
                        <img width="16" className="inline align-middle" src="../res/img/pin.png" />
                        <span className="text-base xl:text-lg font-dosis align-middle ml-[2px]">{this.props.location}</span>
                    </div>
                    <div className="mt-8 hidden w-full h-64 rounded-lg] bg-cover" style={{backgroundImage: "url('img/tu-berlin.png')",  boxShadow: "inset 1px 1px 12px rgba(0, 0, 0, 0.15)"}}></div>
                </div>
        
                {this.props.children}
                
            </div> 
        </div>
        );
    }
}
