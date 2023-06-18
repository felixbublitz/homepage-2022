import React from "react";

export class ProjectItem extends React.Component {
    render() {

        let tags = this.props.tags == null ? [] : this.props.tags.split(" ");

        return (

            <li className={"md:basis-[calc(50%-32px)] text-center text-white inline-block px-8 lg:px-16 py-12 sm:py-20 rounded-2xl bg-" + this.props.bg}>
                <h2 class="text-3xl font-mohave   font-bold ">
                    {this.props.title}</h2>
                <ul class="left-0 text-xs w-full text-neutral-200 mb-6" >
                {
                                    tags.map((tag) => {
                                        return (<li class="py-0 px-1 my-1 mx-[2px] rounded-md inline-block"  >{tag}</li>
                                        );
                                    })
                                }

                </ul>
                {this.props.children}
            </li>

        );
    }
}
