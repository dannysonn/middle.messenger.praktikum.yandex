// language=hbs
export let chatsTmpl = `<aside class="chats-sidebar">
    <nav class="chats-header">
        <a href="/profile" class="chats-header__profile-link">Profile link</a>

        <form class="chats-header__search">
            <input type="text" name=text" class="chats-header__input" placeholder="Search">
        </form>
    </nav>
    <ul class="chats-list">
        {{#each store.chats}}
            {{> chat }}
        {{/each}}
    </ul>
</aside>


<!--Message block-->
<main class="messages">
    <!-- Messages header -->
    <nav class="messages__header">

        <div class="user">
            <img class="user__avatar" src="https://via.placeholder.com/150">
            <span class="user__name">John</span>
        </div>

        <div class="messages__settings"></div>

    </nav>

    <!-- Messages content -->
    <div class="messages__main">
        <div class="messages__block">
            <div class="messages__date">12 june</div>

            <div class="messages__content">
                <div class="messages__friend-container">
                    <div class="messages__friend">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum eius natus, quia quidem
                        veniam voluptas voluptate! Amet animi, doloribus ducimus earum facere fugiat id laborum numquam
                        officia quae quasi quisquam rem sint sunt temporibus, voluptates voluptatibus! Ad aspernatur
                        debitis et libero magni nobis porro quae tempore, vel voluptatem voluptates!
                    </div>
                </div>
                <div class="messages__mine-container">
                    <div class="messages__mine">
                        Lorem ipsum.
                    </div>
                </div>
            </div>
        </div>
        <div class="messages__block">
            <div class="messages__date">12 june</div>

            <div class="messages__content">
                <div class="messages__friend-container">
                    <div class="messages__friend">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum eius natus, quia quidem
                        veniam voluptas voluptate! Amet animi, doloribus ducimus earum facere fugiat id laborum numquam
                        officia quae quasi quisquam rem sint sunt temporibus, voluptates voluptatibus! Ad aspernatur
                        debitis et libero magni nobis porro quae tempore, vel voluptatem voluptates!
                    </div>
                </div>
                <div class="messages__mine-container">
                    <div class="messages__mine">
                        Lorem ipsum.
                    </div>
                </div>
            </div>
        </div>
        <div class="messages__block">
            <div class="messages__date">12 june</div>

            <div class="messages__content">
                <div class="messages__friend-container">
                    <div class="messages__friend">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum eius natus, quia quidem
                        veniam voluptas voluptate! Amet animi, doloribus ducimus earum facere fugiat id laborum numquam
                        officia quae quasi quisquam rem sint sunt temporibus, voluptates voluptatibus! Ad aspernatur
                        debitis et libero magni nobis porro quae tempore, vel voluptatem voluptates!
                    </div>
                </div>
                <div class="messages__mine-container">
                    <div class="messages__mine">
                        Lorem ipsum.
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Messages send -->
    <footer class="messages__footer">
        <div class="messages__file">
            <form action="" method="post">
                <label for="addFile"><img src="../../../static/images/icons/add-file-icn.svg"></label>
                <input id="addFile" type="file">
            </form>
        </div>
        <textarea class="messages__text" placeholder="Message" name="message"></textarea>
        <button class="messages__send-btn">&#10148;</button>
    </footer>

</main>
`