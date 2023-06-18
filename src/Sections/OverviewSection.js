import React from "react";
import { SocialsItems } from "../Components/SocialsItem";
import { SocialsList } from "../Components/SocialsList";

export class OverviewSection extends React.Component {
  render() {
    return (<>
    
    <div id="header" className="pb-16 relative min-h-[720px]">
      
      <div className="absolute overflow-hidden w-[100%] h-full bg-gradient-to-b from-[#232F2C] to-[#171D19]  "></div>
      
      <div className="absolute w-full bottom-20 sm:bottom-24  opacity-40 sm:opacity-50 text-center text-white ">
        <img className="mx-auto w-[32px] sm:w-[48px]  animate-bounce" src="res/img/scroll-down.png" />
      </div>

      <SocialsList>
        <SocialsItems icon="contact-xing.png" href="https://www.xing.com/profile/Felix_Bublitz/"></SocialsItems>
        <SocialsItems icon="contact-linkedin.png" href="https://www.linkedin.com/in/felix-bublitz-076566203/"></SocialsItems>
        <SocialsItems icon="contact-github.png" href="https://github.com/felixbublitz"></SocialsItems>
        <SocialsItems icon="contact-mail.png" href="mailto:admin@felixbublitz.de"></SocialsItems>
      </SocialsList>
      
      <div className="h-screen flex  w-full basis-full">
        <div className="xl:text-white text-white relative m-auto ">
          
          <div className="flex flex-wrap ">
            
            <div className=" xl:w-[550px] w-full m-auto  h-full ">
              <img className="block relative rounded-full mx-auto w-[500px]" src="res/img/avatar.png"></img>
              <canvas className="hidden rounded-full mx-auto " id="eyes"></canvas>
            </div>
            
            <div className="text-center xl:text-left px-4 flex-auto  xl:flex-auto my-auto">
              <p className="t-shadow xl:text-9xl text-6xl sm-text-7xl font-exo font-bold mt-8">Hey,</p>
              <p id="cur" className="t-shadow xl:text-9xl sm-text-7xl mt-0 sm:mt-4 lg:mt-0 text-4xl font-exo font-light">ich bin Felix</p>
              <p className="t-shadow xl:mt-4 mt-8 sm:mt-4 font-light uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl font-dosis">
                <span >Softwareentwickler&nbsp;&nbsp;//&nbsp;&nbsp;</span>
                <span >UI-Designer&nbsp;&nbsp;//&nbsp;&nbsp;</span>
                <span >Enthusiast</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap mt-8">
            <div className="text-center invisible sm:visible xl:text-left xl:basis-2/4 flex-1 "></div>
            <div className="hidden xs:block px-4 font-mono text-neutral-900 basis-full text-center xl:text-left xl:basis-2/4 flex-1 ">
              <p className="b-shadow text-left xl:text-lg inline-block bg-white py-4 pl-8 pr-12 xl:py-8 xl:pl-16 xl:pr-16 rounded-lg  ">
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>);
  }
}