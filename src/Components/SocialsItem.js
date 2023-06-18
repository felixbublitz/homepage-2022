import React from "react";

export class SocialsItems extends React.Component{
    render(){
       
        return(
        <a href={this.props.href} target="_blank">
            <li className="cursor-pointer w-14 p-2 rounded-lg  inline-block sm:mx-1 mx-2 opacity-40 hover:opacity-70"><img className="" src={"res/img/contact/"+this.props.icon} /></li>
        </a>
        );
    }
}
