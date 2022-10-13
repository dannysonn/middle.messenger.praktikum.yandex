Handlebars.registerPartial("chat",'<li class="chat">\n                <div class="chat__item">\n                    <img class="user-avatar" src="{{userAvatar}}" alt="">\n                </div>\n                <div class="chat__item">\n                    <span class="user-name">{{username}}</span>\n                    <br>\n                    <div class="user-message">{{message}}</div>\n                </div>\n                <div class="chat__item">\n                    <div class="chat__info">\n                        <div class="chat__time">{{time}}</div>\n                        <div class="chat__messages-count">\n                            <span>{{messagesCount}}</span>\n                        </div>\n                    </div>\n                </div>\n            </li>');!function(s){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=document.getElementById("root"),n=Handlebars.compile(s);a.innerHTML=n({store:e})}('<aside class="chats-sidebar">\n    <nav class="chats-header">\n        <a href="/profile" class="chats-header__profile-link">Profile link</a>\n\n        <form class="chats-header__search">\n            <input type="text" name=text" class="chats-header__input" placeholder="Search">\n        </form>\n    </nav>\n    <ul class="chats-list">\n        {{#each store.chats}}\n            {{> chat }}\n        {{/each}}\n    </ul>\n</aside>\n\n\n\x3c!--Message block--\x3e\n<main class="messages">\n    \x3c!-- Messages header --\x3e\n    <nav class="messages__header">\n\n        <div class="user">\n            <img class="user__avatar" src="https://via.placeholder.com/150">\n            <span class="user__name">John</span>\n        </div>\n\n        <div class="messages__settings"></div>\n\n    </nav>\n\n    \x3c!-- Messages content --\x3e\n    <div class="messages__main">\n        <div class="messages__block">\n            <div class="messages__date">12 june</div>\n\n            <div class="messages__content">\n                <div class="messages__friend-container">\n                    <div class="messages__friend">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum eius natus, quia quidem\n                        veniam voluptas voluptate! Amet animi, doloribus ducimus earum facere fugiat id laborum numquam\n                        officia quae quasi quisquam rem sint sunt temporibus, voluptates voluptatibus! Ad aspernatur\n                        debitis et libero magni nobis porro quae tempore, vel voluptatem voluptates!\n                    </div>\n                </div>\n                <div class="messages__mine-container">\n                    <div class="messages__mine">\n                        Lorem ipsum.\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="messages__block">\n            <div class="messages__date">12 june</div>\n\n            <div class="messages__content">\n                <div class="messages__friend-container">\n                    <div class="messages__friend">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum eius natus, quia quidem\n                        veniam voluptas voluptate! Amet animi, doloribus ducimus earum facere fugiat id laborum numquam\n                        officia quae quasi quisquam rem sint sunt temporibus, voluptates voluptatibus! Ad aspernatur\n                        debitis et libero magni nobis porro quae tempore, vel voluptatem voluptates!\n                    </div>\n                </div>\n                <div class="messages__mine-container">\n                    <div class="messages__mine">\n                        Lorem ipsum.\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="messages__block">\n            <div class="messages__date">12 june</div>\n\n            <div class="messages__content">\n                <div class="messages__friend-container">\n                    <div class="messages__friend">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque earum eius natus, quia quidem\n                        veniam voluptas voluptate! Amet animi, doloribus ducimus earum facere fugiat id laborum numquam\n                        officia quae quasi quisquam rem sint sunt temporibus, voluptates voluptatibus! Ad aspernatur\n                        debitis et libero magni nobis porro quae tempore, vel voluptatem voluptates!\n                    </div>\n                </div>\n                <div class="messages__mine-container">\n                    <div class="messages__mine">\n                        Lorem ipsum.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    \x3c!-- Messages send --\x3e\n    <footer class="messages__footer">\n        <div class="messages__file">\n            <form action="" method="post">\n                <label for="addFile"><img src="../../../static/images/icons/add-file-icn.svg"></label>\n                <input id="addFile" type="file">\n            </form>\n        </div>\n        <textarea class="messages__text" placeholder="Message" name="message"></textarea>\n        <button class="messages__send-btn">&#10148;</button>\n    </footer>\n\n</main>\n',{chats:[{username:"John",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",time:"10:20",messagesCount:5,userAvatar:"https://via.placeholder.com/150"},{username:"John",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",time:"10:20",messagesCount:5,userAvatar:"https://via.placeholder.com/150"},{username:"John",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",time:"10:20",messagesCount:5,userAvatar:"https://via.placeholder.com/150"}]});
//# sourceMappingURL=chats.8c11c29e.js.map
