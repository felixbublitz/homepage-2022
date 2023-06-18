import React from "react";

export class Button extends React.Component {
    render() {

      
        return (
            <a href={this.props.href} target="_blank" className={"cursor-pointer transition ease-in-out overflow-hidden  duration-200  mt-6 rounded-md inline-block " + (this.props.theme == 'bright' ? "bg-[#ddd] text-black hover:bg-[#999] " : "bg-[#555] text-white  hover:bg-c1")}><div> <div className={"inline-block py-4 px-4 " +  (this.props.theme == 'bright' ? "bg-[#ffffff88]" : "bg-[#00000088]") } ><img className="inline-block w-[20px] " src={"../res/img/" + this.props.img} /></div><div className="inline-block px-4">{this.props.children}</div></div></a>
        );
    }
}
