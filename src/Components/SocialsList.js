import React from "react";

export class SocialsList extends React.Component{
    render(){
       
        return(
            <div className="hidden md:block absolute  w-full h-full">
            <ul className="mt-4 mr-4 lg:mt-8 lg:mr-10 list-none text-right">
                {this.props.children}
            </ul>
            </div>
        );
    }
}
