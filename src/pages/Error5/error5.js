import {error5Tmpl} from "./error5.hbs";
import {renderDom} from "../../utils/render";

renderDom(error5Tmpl, {errorCode: '500'})