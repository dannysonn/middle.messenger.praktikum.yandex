// language=hbs
export let errorTmpl = `<main class="error">
    <span class="error__number">{{store.errorCode}}</span>
    <span class="error__comment">Not found...</span>
    <a class="error__link">Back to chats</a>
</main>`;