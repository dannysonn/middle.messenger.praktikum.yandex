import Registration from "./registration";
import {renderDom} from "../../utils/renderDom";
import Button from "../../components/button/button";

document.addEventListener('DOMContentLoaded', () => {
   let registrationPage = new Registration({
      button: new Button({ text: "Register" })
   });

   renderDom(registrationPage);
});