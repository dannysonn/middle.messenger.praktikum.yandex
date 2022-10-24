import Login from "./login";
import {renderDom} from "../../utils/renderDom";
import Button from "../../components/button/button";

document.addEventListener('DOMContentLoaded', () => {
    let loginPage = new Login({
        button: new Button({
            text: 'Login'
        })
    });

    renderDom(loginPage);
});