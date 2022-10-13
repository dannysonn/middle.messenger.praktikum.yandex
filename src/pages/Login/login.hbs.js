// language=hbs
export let loginTmpl = `<main class="authorization__background">
    <div class="authorization">
        <div class="authorization__wrapper">
            <h1 class="authorization__title">Sign in</h1>

            <form id="authForm">
                <div class="authForm__item">
                    <label for="authForm__login">Login</label>
                    <br>
                        <input type="text" id="authForm__login" placeholder="programmer2000" maxlength="14"
                               name="login">
                </div>
                <div class="authForm__item">
                    <label for="authForm__password">Password</label>
                    <br>
                        <input type="password" id="authForm__password" placeholder="**********" maxlength="10"
                               name="password">
                </div>
            </form>

            <button class="authorization__btn">Log in</button>

            <button class="registration__link">No account?</button>
        </div>
    </div>
</main>`;
