import React from "react";

export class ProjectItemLink extends React.Component {
    render() {

      
        return (
            <a href={this.props.href} target="_blank" class="inline-block mx-4">
            <img className={"inline-block w-6 mb-2"} src={"../res/img/" + this.props.img}/>
            <p class="text-xs">{this.props.title}</p>
        </a>

        );
    }
}
