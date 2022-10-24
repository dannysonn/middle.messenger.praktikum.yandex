import Registration from "./registration";
import {renderDom} from "../../utils/renderDom";

document.addEventListener('DOMContentLoaded', () => {
   let registrationPage = new Registration({});

   renderDom(registrationPage);
});