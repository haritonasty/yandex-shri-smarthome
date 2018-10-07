const menuNavOpen=document.querySelector(".button-burger"),menuNavClose=document.querySelector(".button-close"),menuNav=document.querySelector(".main-nav"),menuNavInner=document.querySelector(".main-nav__inner");function toggleMainNav(){menuNavInner.classList.toggle("main-nav__inner_hidden"),menuNav.classList.toggle("main-nav__hidden")}menuNavOpen.addEventListener("click",toggleMainNav),menuNavClose.addEventListener("click",toggleMainNav);
const container=document.querySelector(".events");let template='\n    <div class="event {{ type }} {{ size }}">\n        <div class="event__close event-control event-control_disabled">\n            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">\n                <path d="M8.061 7l4.72-4.719a.75.75 0 1 0-1.062-1.061L7 5.939l-4.719-4.72A.75.75 0 1 0 1.22 2.282l4.719 4.72-4.72 4.718a.75.75 0 1 0 1.062 1.061l4.72-4.719 4.718 4.72a.748.748 0 0 0 1.061 0 .75.75 0 0 0 0-1.062L8.061 7z"/>\n            </svg>\n        </div>\n        <div class="event__open event-control event-control_disabled">\n            <svg width="10" height="16" xmlns="http://www.w3.org/2000/svg" fill="#666" stroke="#666">\n                <path d="M8.266 8.691L2.24 14.715a.98.98 0 1 1-1.387-1.387l5.33-5.33-5.33-5.33A.981.981 0 0 1 2.24 1.28l6.025 6.024a.978.978 0 0 1 0 1.387z"/>\n            </svg>\n        </div>\n        <div class="event__main-info">\n            <svg class="{{ event__icon }}">\n                <use class="event__icon_source" xlink:href="#{{ icon }}"/>\n            </svg>\n            <span class="{{ event__title }}">{{ title }}</span>\n        </div>\n        <div class="{{ event__info }}">\n            <span class="event__source">{{ source }}</span>\n            <span class="event__time">{{ time }}</span>\n        </div>\n        <div class="additional-info additional-info_disabled">\n            <span class="event__description">{{ description }}</span>\n            {{data}}\n        </div>\n        \n    </div>\n',eventsStr="";function isTouchDevice(){return!("undefined"==typeof window||!("ontouchstart"in window||window.DocumentTouch&&"undefined"!=typeof document&&document instanceof window.DocumentTouch))||!("undefined"==typeof navigator||!navigator.maxTouchPoints&&!navigator.msMaxTouchPoints)}function templater(n,e){for(let i in e){let t=e[i];"type"===i&&("critical"===e[i]&&(t="event-critical",n=(n=(n=n.replace(new RegExp("{{ event__icon }}","ig"),"event__icon event__icon_critical")).replace(new RegExp("event__close","ig"),"event__close event__close_white")).replace(new RegExp("{{ event__title }}","ig"),"event__title event__title_critical")),n=(n=n.replace(new RegExp("{{ event__icon }}","ig"),"event__icon")).replace(new RegExp("{{ event__title }}","ig"),"event__title")),"size"===i&&(t="l"===e[i]?"event-big":"m"===e[i]?"event-middle":""),n="description"===i&&e[i]?(n=n.replace(new RegExp("additional-info_disabled","ig"),"")).replace(new RegExp("{{ event__info }}","ig"),"event__info"):n.replace(new RegExp("{{ event__info }}","ig"),"event__info event__info_last"),"description"!==i||e.data||(n=n.replace(new RegExp("{{\\s?data\\s?}}","ig"),"")),"data"===i&&("thermal"===e.icon&&(t='\n                    <div class="event__data">\n                 <div class="data__climate">\n                        <div><span class="climate__type">Температура: </span><span class="climate__value">24 С</span></div>\n                        <div><span class="climate__type">Влажность: </span><span class="climate__value">80%</span></div>\n                    </div>\n                    </div>\n                '),"fridge"===e.icon&&(t='\n                 <div class="event__data">\n                 <div class="data__buttons">\n                        <button class="data__button">Да</button>\n                        <button class="data__button">Нет</button>\n                    </div>\n                    </div>\n                '),"music"===e.icon&&(t='\n                    <div class="event__data">\n                    <div class="data__music">\n                        <div class="data__music_composition">\n                            <img src="./album-cover.png" alt="Обложка альбома" class="data__music_image">\n                            <div>\n                                <span class="data__music_composition-title">Florence & The Machine - Big God</span>\n                                <div class="data__music_composition-range">\n                                    <input type="range" min="0" max="271" value="70" class="data__music_composition-range_input">\n                                    <span class="data__music_composition-duration">4:31</span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class="data__music_composition-controls">\n                            <div>\n                                <svg class="music__icon music__icon_prev">\n                                    <use xlink:href=\'#music-control\'></use>\n                                </svg>\n                                <svg class="music__icon music__icon_next">\n                                    <use xlink:href=\'#music-control\'></use>\n                                </svg>\n                            </div>\n                            <input type="range" min="0" max="100" value="80" class="data__music_composition-volume">\n                            <span class="data__music_composition-duration">80%</span>\n                        </div>\n                    </div>\n                </div>\n                '),"cam"===e.icon&&(t=isTouchDevice()?'\n<div class="event__data">\n                 <div class="data__image">\n                        <picture>\n                        <sourse media="(max-width:415px)" srcset="cam.jpg">\n                        <img srcset="cam.png,\n                                     cam2x.png 2x,\n                                     cam3x.png 3x"\n                             src="cam.png" alt="Снимок камеры с пылесосом">\n                        </picture>\n                    </div>\n                    <div class="event__touch-info">\n                        <div><span class="touch-info_zoom">Приближение: </span><span class="touch-info__value zoom__value">78%</span></div>\n                        <div><span class="touch-info_brightness">Яркость: </span><span class="touch-info__value brightness__value">50%</span></div>\n                    </div>\n                    </div>\n                ':'\n<div class="event__data">\n                 <div class="data__image">\n                        <picture>\n                        <sourse media="(max-width:415px)" srcset="cam.jpg">\n                        <img srcset="cam.png,\n                                     cam2x.png 2x,\n                                     cam3x.png 3x"\n                             src="cam.png" alt="Снимок камеры с пылесосом">\n                        </picture>\n                    </div></div>'),"stats"===e.icon&&(t='\n<div class="event__data">\n                 <div class="data__image">\n                        <img src="./Richdata.svg" alt="График">\n                    </div>\n                    </div>\n                '));let s="{{\\s?"+i+"\\s?}}";n=n.replace(new RegExp(s,"ig"),t)}return n}fetch("./events.json").then(n=>n.json()).then(n=>{const e=n.events;for(let n in e){let i=templater(template,e[n]);eventsStr+=i}container.innerHTML+=eventsStr});