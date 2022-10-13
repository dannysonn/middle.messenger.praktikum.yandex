export let chatTmpl = `<li class="chat">
                <div class="chat__item">
                    <img class="user-avatar" src="{{userAvatar}}" alt="">
                </div>
                <div class="chat__item">
                    <span class="user-name">{{username}}</span>
                    <br>
                    <div class="user-message">{{message}}</div>
                </div>
                <div class="chat__item">
                    <div class="chat__info">
                        <div class="chat__time">{{time}}</div>
                        <div class="chat__messages-count">
                            <span>{{messagesCount}}</span>
                        </div>
                    </div>
                </div>
            </li>`;