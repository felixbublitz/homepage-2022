import React from "react";

export class SkillItem extends React.Component {
    render() {

        let percentage = 1;
        if(this.props.value <= 1.0 && this.props.value >= 0) percentage = this.props.value * 10;

        let p = "w-"+ percentage + "/10";

        console.log(this.props.color);
        
        let color = this.props.color == null? "black" : this.props.color;
        
        console.log(percentage)

        return (
                <li className="hover:scale-105 duration-800 transform transition inline-block px-2 py-4 xl:p-4">
                    <img className={"bg-" + color +" rounded-lg shadow-lg sm:w-32 xl:w-42 w-24 mb-2 xl:mb-4"} src={"../res/img/" + this.props.img} />
                    <div className="mb-2 w-full h-4 rounded-xl overflow-hidden bg-neutral-200">
                        <div className={p + " h-6 bg-"+color}></div>
                    </div>
                    <p className="xl:text-xl text-sm text-black">{this.props.title}</p>
                </li>
        );
    }
}
