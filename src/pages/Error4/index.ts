import Error404 from "./error4";
import {renderDom} from "../../utils/renderDom";

document.addEventListener('DOMContentLoaded', () => {
   const error4Page = new Error404({ errorCode: "404" });

   renderDom(error4Page);
});