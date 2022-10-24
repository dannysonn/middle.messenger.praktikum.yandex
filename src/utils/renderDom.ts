import Block from "./Block";

export function renderDom(block: Block | any) {
    const root = document.querySelector("#root");
    root!.innerHTML = "";
    root!.appendChild(block.getContent())
}