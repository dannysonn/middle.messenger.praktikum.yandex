// language=hbs
export let registrationTmpl = `<main class="authorization__background">
    <div class="authorization">
        <div class="authorization__wrapper">
            <h1 class="authorization__title">Sign up</h1>

            <form id="authForm">
                <div class="authForm__item">
                    <label for="authForm__email">Email</label>
                    <br>
                    <input type="email" id="authForm__email" required="true" placeholder="programmer2000@google.com" name="email">
                </div>
                <div class="authForm__item">
                    <label for="authForm__login">Login</label>
                    <br>
                    <input type="text" id="authForm__login" required="true" placeholder="programmer2000" maxlength="14" name="login">
                </div>
                <div class="authForm__item">
                    <label for="authForm__name">Name</label>
                    <br>
                    <input type="text" id="authForm__name" required="true" placeholder="Elon" name="first_name">
                </div>
                <div class="authForm__item">
                    <label for="authForm__surname">Surname</label>
                    <br>
                    <input type="text" id="authForm__surname" required="true" placeholder="Musk" name="second_name">
                </div>
                <div class="authForm__item">
                    <label for="authForm__phone">Phone</label>
                    <br>
                    <input type="tel" id="authForm__phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="999-99-999" name="phone">
                </div>
                <div class="authForm__item">
                    <label for="authForm__password">Password</label>
                    <br>
                    <input type="password" id="authForm__password" required="true" placeholder="**********" maxlength="10" name="password">
                </div>
                <div class="authForm__item">
                    <label for="authForm__password-second">Password (one more)</label>
                    <br>
                    <input type="password" id="authForm__password-second" required="true" placeholder="**********" maxlength="10">
                </div>
            </form>

            <a href="./src/pages/Chats/">
                <button class="authorization__btn">Register</button>
            </a>

            <div class="registration__link">
                <a href="/">Sign in</a>
            </div>
        </div>
    </div>
</main>`;