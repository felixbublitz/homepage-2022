import React from "react";

export class Footer extends React.Component{
    render(){
        return(
            <>
            <div id="footer2" className="relative flex flex-wrap text-white bg-neutral-800 px-3 w-full text-left py-8">

<div className="text-left pl-8 pr-16  py-4 ">
  <p className="text-xl font-mohave pb-1 ">Links</p>
  <a href="impress.html"><p className="text-sm">Impressum</p></a>
  <a href="impress.html"><p className="text-sm">Datenschutzerklärung</p></a>

</div>

<div className="px-8 pr-16 py-4 ">
  <p className="text-xl font-mohave ">Kontakt</p>
  <ul className="mt-2  mr-10 list-none text-right">
    <a href="https://www.xing.com/profile/Felix_Bublitz/" target="_blank">
      <li className="bg-neutral-500 cursor-pointer w-10 p-2 rounded-lg  inline-block sm:mx-1 mx-2 opacity-40 hover:opacity-70"><img className="" src="../res/img/contact/contact-xing.png"/></li>
    </a>
    <a href="https://www.linkedin.com/in/felix-bublitz-076566203/" target="_blank">
      <li className="bg-neutral-500  cursor-pointer w-10 p-2 rounded-lg inline-block sm:mx-1 mx-2 opacity-40 hover:opacity-70"><img src="../res/img/contact/contact-linkedin.png"/></li>
    </a>

    <a href="mailto:admin@felixbublitz.de" target="_blank">
      <li className="bg-neutral-500  cursor-pointer w-10 p-2 rounded-lg inline-block sm:mx-1 mx-2 opacity-40 hover:opacity-70"><img src="../res/img/contact/contact-mail.png"/></li>
    </a>
  </ul>
</div>
</div>
            </>
        );
    }
}
