import React from "react";
import { SkillItem } from "../Components/SkillItem";
import { SkillList } from "../Components/SkillList";

export class SkillsSection extends React.Component{
    render(){
        return(

<div id="content1" className="py-12 sm:py-24 md:py-52  text-center bg-gradient-w">

<div className="inline-block mb-4 pb-4 md:mb-0">
  <h2 className="-skew-x-0  font-mohave font-bold text-3xl md:text-7xl inline-block w-full p-0 m-0 -mb-0  text-black ">Skills</h2>
 </div>

 <SkillList>

        <h3 class="text-base md:text-2xl font-mohave font-regular  font-medium py-4  rounded-md">Anwendungsentwicklung</h3>
        <SkillItem title="Java" value="0.8" img="tech/thumb-java.png" color="c1"></SkillItem>
        <SkillItem title="C#" value="0.8" img="tech/thumb-cs.png" color="c2"></SkillItem>
        </SkillList>
        <SkillList>

        <h3 class="text-base md:text-2xl font-mohave font-regular  font-medium py-4  rounded-md">Anwendungsentwicklung</h3>

        <SkillItem title="JavaScript" value="0.8" img="tech/thumb-js.png" color="c1"></SkillItem>
        <SkillItem title="TypeScript" value="0.8" img="tech/thumb-ts.png" color="c2"></SkillItem>
        <SkillItem title="PHP" value="0.5" img="tech/thumb-php.png" color="c3"></SkillItem>
        <SkillItem title="CSS" value="0.8" img="tech/thumb-css.png" color="c1"></SkillItem>
        </SkillList>


  


  </div>

        );
    }
}
