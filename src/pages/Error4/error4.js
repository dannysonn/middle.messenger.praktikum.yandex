import {errorTmpl} from "./error4.hbs";
import {renderDom} from "../../utils/render";

renderDom(errorTmpl, {errorCode: '404'});

