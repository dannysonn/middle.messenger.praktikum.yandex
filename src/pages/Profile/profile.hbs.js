// language=hbs
export let profileTmpl = `<div class="profile__wrapper">
    <nav class="profile__header">
        <img class="profile__avatar" src="https://via.placeholder.com/150">
        <div class="profile__name">Elon</div>
    </nav>

    <main class="profile__content">
        <div class="profile__item">
            <span class="content__item-label">Email</span>
            <span class="content__item-data">programmer2000@google.com</span>
        </div>
        <div class="profile__item">
            <span class="content__item-label">Login</span>
            <span class="content__item-data">programmer2000</span>
        </div>
        <div class="profile__item">
            <span class="content__item-label">Name</span>
            <span class="content__item-data">Elon</span>
        </div>
        <div class="profile__item">
            <span class="content__item-label">Surname</span>
            <span class="content__item-data">Musk</span>
        </div>
        <div class="profile__item">
            <span class="content__item-label">Phone</span>
            <span class="content__item-data">999-99-999</span>
        </div>
    </main>

    <footer class="profile__footer">
        <button class="profile__footer-item">Change data</button>
        <button class="profile__footer-item">Change password</button>
        <a href="/">
            <button class="profile__footer-item profile__footer-item--logout">Logout</button>
        </a>
    </footer>
</div>`;