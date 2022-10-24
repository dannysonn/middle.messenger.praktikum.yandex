import {renderDom} from "../../utils/renderDom";
import Error5 from "./error5";

document.addEventListener('DOMContentLoaded', () => {
    let errorPage = new Error5({errorCode: "500"})

    renderDom(errorPage);
});
