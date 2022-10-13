export const renderDom = (tmpl, store = {}) => {
    let root = document.getElementById('root');
    let html = Handlebars.compile(tmpl);

    root.innerHTML = html({store});
};