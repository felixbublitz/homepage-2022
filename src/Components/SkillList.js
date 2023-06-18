import React from "react";

export class SkillList extends React.Component {
    render() {

      
        return (
            <ul className="lg:max-w-4xl xl:mt-8 list-none m-auto xl:w-1/2">
                {this.props.children}

            </ul>

        );
    }
}
