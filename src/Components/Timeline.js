import React from "react";

export class Timeline extends React.Component{
    render(){
       
        return(
             <ul className="px-4  text-left list-none relative m-auto sm:text-center flex-wrap flex max-w-screen-2xl ">
                <div className="absolute left-0 -top-[4px]  h-[56px] w-full bg-[#00000011] hidden -skew-x-12 md:block" style={{ WebkitMaskImage: "linear-gradient( to right,transparent, black 10%, black 90%, transparent 100%)", borderTop: "1px solid #0000000d", borderBottom: "1px solid #0000000d", maskImage: "linear-gradient(transparent, black 10%, black 90%, transparent 100%)", }}></div>
                <div className={"-mt-4 w-full flex flex-wrap "}>
                {this.props.children}
                </div>
            </ul>
        );
    }
}

