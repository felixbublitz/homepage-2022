import React from "react";

export class ProjectSection extends React.Component {
    render() {

        let tags = this.props.tags == null ? [] : this.props.tags.split(" ");

       return  (
            <div className={"text-center lg:text-left px-8 lg:px-0 bg-" + this.props.bg + " " + (this.props.theme=='dark' ? 'text-black' : 'text-white')}>

                <div class="lg:px-16 mx-auto ">
                    <div className={"py-12 sm:py-24 md:pt-52 pb-0 row flex flex-wrap lg:gap-16 "  + (this.props.orientation == 'right' ? 'xl:justify-end' : '')}>
                        <div class="hidden xl:block w-1/12 text-center "></div>

                        <div class="w-full lg:w-4/12 xl:w-2/12 text-center  ">
                            <img class="w-56 mx-auto pb-8 " src={"../res/img/" + this.props.img} />
                        </div>

                        <div class="w-full lg:w-7/12 xl:w-7/12 max-w-[1000px]">

                            <h2 class="text-4xl md:text-7xl font-mohave mb-0  font-bold ">{this.props.title}</h2>
                            <h3 class="text-base md:text-2xl font-mohave font-regular  font-medium ">{this.props.subtitle}</h3>

                            <ul className={"left-0 text-sm w-full mb-6 mt-2 md:mb-6 opacity-70 " + (this.props.theme=='dark' ? 'text-white' : 'text-black') } >
                                {
                                    tags.map((tag) => {
                                        return (<li className={(this.props.theme=='dark' ? 'bg-[#222]' : 'bg-white') + " py-[6px] px-[16px] my-1 mx-[4px] rounded-md inline-block"}>{tag}</li>);
                                    })
                                }
                            </ul>

                            {this.props.children}

                        </div>

                    </div>

                </div>
            </div>)






    }
}
