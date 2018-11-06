import Flux from "../flux/index";

const footerTempl = `
<div class="footer__inner">
            <nav class="footer__nav">
                <ul class="footer__nav-items">
                    <li class="footer__nav-item">
                        <a class="footer__nav-link" href="#">Помощь</a>
                    </li>
                    <li class="footer__nav-item">
                        <a class="footer__nav-link" href="#">Обратная связь</a>
                    </li>
                    <li class="footer__nav-item">
                        <a class="footer__nav-link" href="#">Разработчикам</a>
                    </li>
                    <li class="footer__nav-item">
                        <a class="footer__nav-link" href="#">Условия использования</a>
                    </li>
                    <li class="footer__nav-item footer__nav-item_last">
                        <a class="footer__nav-link"
                           href="https://docviewer.yandex.ru/view/1130000031416102/?*=q9n3dTgayaA3Vk%2Br%2BG2IAejdiVt7InVybCI6InlhLXdpa2k6Ly93aWtpLWFwaS55YW5kZXgucnUvc2hyaS0yMDE4LWlpL2hvbWV3b3JrL2FkYXB0aXZuYWphLXZqb3JzdGthL2xpY2Vuc2UucGRmIiwidGl0bGUiOiJsaWNlbnNlLnBkZiIsInVpZCI6IjExMzAwMDAwMzE0MTYxMDIiLCJ5dSI6Ijg4NzU0ODk3MDE1MzUyODIzMjkiLCJub2lmcmFtZSI6ZmFsc2UsInRzIjoxNTM4OTE0MTM4Njg3fQ%3D%3D">
                            Лицензия
                        </a>
                    </li>
                </ul>
            </nav>
            <div>
                <span>© 2001–2017  ООО «Яндекс»</span>
            </div>
        </div>
        
        
        
<svg style="display:none">
    <symbol viewBox="0 0 40 48" id="music">
        <g transform="translate(-6 -2)">
            <path d="M18.303 30.422c.65-.98.971-2.045.947-3.094V6.448c.924 1.017 2.077 2.077 3.273 2.656 2.13 1.032 2.25 2.631 2.184 4.318l-.008.252a1.104 1.104 0 0 0 2.207.063l.008-.23c.053-1.39.178-4.643-3.428-6.39-1.789-.867-3.794-3.52-4.416-4.47l-.004-.005a.775.775 0 0 0-.042-.058c-.008-.01-.015-.022-.024-.032-.01-.013-.022-.025-.033-.037a1.093 1.093 0 0 0-.267-.218l-.029-.017-.025-.012a1.098 1.098 0 0 0-.332-.107c-.017-.002-.033-.006-.05-.007-.013-.002-.027-.002-.04-.003l-.072-.004h-.006l-.03.002a.897.897 0 0 0-.074.003L18 2.158l-.065.01-.048.01-.056.015-.054.019a.375.375 0 0 0-.047.017l-.06.027-.038.018-.064.037-.026.016c-.002 0-.003.002-.005.004a1.16 1.16 0 0 0-.058.042c-.01.008-.022.015-.032.024a1.092 1.092 0 0 0-.258.305c-.004.008-.01.015-.014.024l-.012.024a1.091 1.091 0 0 0-.107.331l-.008.052-.002.04a1.197 1.197 0 0 0-.004.072v20.142c-.995-.668-2.259-1.047-3.657-1.047-.8 0-1.604.127-2.39.378-3.495 1.117-5.58 4.4-4.648 7.316.707 2.213 2.921 3.643 5.64 3.643a7.84 7.84 0 0 0 2.39-.378c1.65-.527 3.045-1.55 3.926-2.877zm-1.84-1.221c-.605.911-1.584 1.62-2.758 1.994a5.638 5.638 0 0 1-1.717.274c-1.74 0-3.129-.827-3.538-2.107-.561-1.757.882-3.794 3.218-4.54a5.638 5.638 0 0 1 1.717-.273c1.74 0 3.128.827 3.537 2.106.258.807.095 1.71-.46 2.546zm29.278 7.293V12.773c0-.028-.002-.055-.004-.083l-.002-.029-.01-.067-.008-.044-.01-.042-.019-.066c-.002-.01-.006-.018-.009-.027a1.116 1.116 0 0 0-.03-.078l-.002-.005-.011-.023a1.048 1.048 0 0 0-.035-.07l-.024-.038-.032-.05a.986.986 0 0 0-.035-.047l-.03-.037a1.017 1.017 0 0 0-.042-.048l-.03-.03a1.16 1.16 0 0 0-.047-.043 1.068 1.068 0 0 0-.08-.064l-.041-.028-.044-.027c-.017-.01-.033-.02-.05-.028l-.04-.02a1.119 1.119 0 0 0-.058-.025l-.04-.015-.06-.02-.048-.012c-.018-.004-.036-.009-.055-.012a1.21 1.21 0 0 0-.061-.01l-.043-.006a1.142 1.142 0 0 0-.081-.004h-.028a.844.844 0 0 0-.087.004c-.008 0-.016 0-.024.002a.855.855 0 0 0-.073.01l-.038.007c-.016.003-.031.008-.047.012a.629.629 0 0 0-.062.017l-.029.01a1.14 1.14 0 0 0-.076.03l-.005.001-15.736 6.955-.006.003-.013.005-.023.012a1.168 1.168 0 0 0-.07.035l-.039.024-.05.031a1.122 1.122 0 0 0-.047.036l-.036.028c-.017.014-.033.03-.048.044l-.03.029a1.167 1.167 0 0 0-.043.047l-.029.033a1.156 1.156 0 0 0-.064.089l-.026.043c-.01.017-.02.033-.028.05a.801.801 0 0 0-.045.099l-.014.039a.626.626 0 0 0-.021.061l-.012.045c-.004.02-.01.038-.013.058l-.009.057-.006.048-.004.076-.001.026V39.68c-.993-.663-2.252-1.038-3.645-1.038-.8 0-1.604.127-2.389.378-1.65.527-3.045 1.55-3.926 2.877-.932 1.405-1.189 2.981-.723 4.44.707 2.212 2.921 3.642 5.641 3.642.8 0 1.604-.128 2.39-.378 1.65-.528 3.045-1.55 3.926-2.878.703-1.06 1.021-2.22.935-3.351V24.627l13.546-5.987v14.162c-.994-.663-2.253-1.038-3.645-1.038-.8 0-1.604.127-2.39.378-3.495 1.117-5.58 4.399-4.648 7.316.707 2.213 2.92 3.643 5.64 3.643a7.87 7.87 0 0 0 2.39-.378c1.65-.528 3.045-1.55 3.926-2.878.704-1.06 1.022-2.22.935-3.351zM24.453 47.496a5.638 5.638 0 0 1-1.717.273c-1.74 0-3.128-.827-3.537-2.106-.258-.807-.095-1.71.46-2.546.604-.91 1.583-1.62 2.757-1.994a5.638 5.638 0 0 1 1.717-.273c1.74 0 3.129.826 3.538 2.106.055.175.09.355.107.538v.417l.002.036c-.043.519-.234 1.05-.569 1.554-.604.911-1.584 1.62-2.758 1.995zm5.534-25.284v-1.75l13.546-5.987v1.75l-13.546 5.987zm10.22 18.407a5.638 5.638 0 0 1-1.716.273c-1.74 0-3.129-.827-3.537-2.106-.562-1.757.881-3.794 3.217-4.54a5.638 5.638 0 0 1 1.717-.274c1.74 0 3.128.827 3.537 2.107.056.175.091.355.108.538v.227c0 .043.003.086.008.128-.025.55-.219 1.115-.575 1.652-.605.911-1.584 1.62-2.758 1.995z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 48 41" id="ac">
        <g>
            <path d="M36 13.062a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h30a1 1 0 0 0 1-1v-4zm-2 3H6v-2h28v2zM5 8.063h22a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2z"/>
            <circle cx="34" cy="6.063" r="2"/>
            <path d="M28 25.062a1 1 0 1 0-2 0c0 1.803.647 2.775 1.168 3.555.465.697.832 1.248.832 2.445a1 1 0 1 0 2 0c0-1.802-.647-2.774-1.168-3.554-.465-.697-.832-1.248-.832-2.446zm-17-.999a1 1 0 0 0-1 1c0 1.197-.367 1.748-.832 2.445C8.648 28.288 8 29.26 8 31.063a1 1 0 1 0 2 0c0-1.198.367-1.749.832-2.446.52-.78 1.168-1.752 1.168-3.555a1 1 0 0 0-1-1zm8 0a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1zm23 0h-1v-1a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2zm0 8h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"/>
            <path d="M44 18.063h-4v-14c0-2.207-1.794-4-4-4H4c-2.206 0-4 1.793-4 4v14c0 2.205 1.794 4 4 4h28v10c0 4.41 3.589 8 8 8s8-3.59 8-8v-10c0-2.207-1.794-4-4-4zm-11.444 2H4c-1.102 0-2-.898-2-2v-14c0-1.103.897-2 2-2h32c1.102 0 2 .897 2 2v14h-2c-1.474 0-2.75.81-3.444 2zm13.444 12c0 3.308-2.691 6-6 6s-6-2.692-6-6v-10c0-1.103.898-2 2-2h8c1.102 0 2 .897 2 2v10z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 48 25" id="battery">
        <g>
            <path d="M42.737 0H10.205a5.27 5.27 0 0 0-5.263 5.263v.867H3.158A3.162 3.162 0 0 0 0 9.287v5.53a3.162 3.162 0 0 0 3.158 3.159h1.784v.866a5.27 5.27 0 0 0 5.263 5.263h32.532A5.27 5.27 0 0 0 48 18.842V5.263A5.27 5.27 0 0 0 42.737 0zM3.157 15.87a1.054 1.054 0 0 1-1.052-1.052v-5.53a1.054 1.054 0 0 1 1.053-1.053h1.784v7.635H3.158zm42.738 2.972A3.161 3.161 0 0 1 42.737 22H10.205a3.161 3.161 0 0 1-3.158-3.158V5.263a3.161 3.161 0 0 1 3.158-3.158h32.532a3.161 3.161 0 0 1 3.158 3.158v13.58z"/>
            <path d="M19.609 11h-1.844V9.157a1.053 1.053 0 1 0-2.105 0V11h-1.843a1.053 1.053 0 1 0 0 2.105h1.843v1.844a1.053 1.053 0 1 0 2.105 0v-1.844h1.844a1.053 1.053 0 1 0 0-2.105zm18.952-2.896c-.581 0-1.052.471-1.052 1.053v5.792a1.053 1.053 0 1 0 2.105 0V9.157c0-.582-.471-1.053-1.053-1.053z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 39 48" id="fridge">
        <g transform="translate(-7 -2)">
            <path d="M36.6 7.6H35a.8.8 0 1 0 0 1.6h1.6a.8.8 0 1 0 0-1.6zm-23.2 12H11v11.2h9.6V19.6h-7.2zm3.2 1.6v2.4H15v-2.4h1.6zm2.4 0v8h-6.4v-8h.8v4h4.8v-4h.8zm4-3.2a.8.8 0 0 0-.8.8v12.8a.8.8 0 1 0 1.6 0V18.8a.8.8 0 0 0-.8-.8zm6.4 0a.8.8 0 0 0-.8.8v12.8a.8.8 0 1 0 1.6 0V18.8a.8.8 0 0 0-.8-.8zM19 38a.8.8 0 0 0 .8.8h12.8a.8.8 0 1 0 0-1.6H19.8a.8.8 0 0 0-.8.8z"/>
            <path d="M43.664 2H8.736C7.779 2 7 2.78 7 3.736v43.92A2.346 2.346 0 0 0 9.344 50h33.712a2.347 2.347 0 0 0 2.344-2.344V3.736C45.4 2.779 44.62 2 43.664 2zM8.6 3.736c0-.075.06-.136.136-.136H25.4V34H8.6V3.736zm35.2 43.92c0 .41-.334.744-.744.744H9.344a.745.745 0 0 1-.744-.744V35.6h35.2v12.056zM27 34V3.6h16.664c.075 0 .136.06.136.136V34H27z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 41 48" id="kettle">
        <path d="M10.902 5.038c.792-.987 1.101-2.522.753-3.73A1.024 1.024 0 0 1 13.623.74c.53 1.838.078 4.08-1.123 5.578-1.094 1.366-1.379 3.768-.122 4.94a1.024 1.024 0 0 1-1.397 1.499c-2.145-2.001-1.773-5.607-.08-7.72zm6.731 1.19h6.735a1.024 1.024 0 0 0 0-2.049h-6.735a1.024 1.024 0 0 0 0 2.048zm22.834 9.803v8.197c0 4.095-3.07 7.485-7.03 7.99v9.145h1.022c.566 0 1.024.459 1.024 1.024v4.549c0 .565-.458 1.024-1.024 1.024H1.092a1.024 1.024 0 0 1-1.024-1.024v-4.549c0-.565.459-1.024 1.024-1.024h.85c-.402-8.83.467-18.753 3.96-22.048L.265 11.586a1.024 1.024 0 0 1-.197-.603V9a1.024 1.024 0 0 1 1.024-1.024h4.239c.186-1.082.638-2.118 1.296-2.939.791-.987 1.101-2.522.753-3.73A1.024 1.024 0 0 1 9.347.74c.53 1.837.079 4.08-1.122 5.578-.556.693-.903 1.654-.945 2.585a1.052 1.052 0 0 1-.004.231c.008.82.26 1.597.827 2.125a1.024 1.024 0 0 1-1.398 1.497c-.744-.694-1.223-1.64-1.396-2.732H2.116v.624l6.027 8.264a1.068 1.068 0 0 1 .183.396c.033.148.032.3 0 .445h-.001v.002a1.022 1.022 0 0 1-.525.682c-1.255.687-2.372 3.137-3.067 6.726-.742 3.83-.997 8.733-.74 14.2h27.396V31.258c0-.566.459-1.024 1.024-1.024a6.013 6.013 0 0 0 6.006-6.006V16.03a6.013 6.013 0 0 0-6.006-6.006h-7.021v22.169a3.245 3.245 0 0 1-3.241 3.24 3.244 3.244 0 0 1-3.241-3.24V13.057a1.024 1.024 0 0 1 2.048 0v19.137a1.194 1.194 0 0 0 2.386 0v-22.17l-8.84.001V7.977h17.91c4.44 0 8.053 3.613 8.053 8.054zm-7.032 27.38H2.116v2.5h31.32v-2.5zm-1.022-17.077c.566 0 1.024-.458 1.024-1.024V14.95a1.024 1.024 0 0 0-2.048 0v10.36c0 .566.459 1.024 1.024 1.024z"/>
    </symbol>
    <symbol viewBox="0 0 48 45" id="key">
        <g>
            <path d="M47.656 20.353l-23-20.107a.999.999 0 0 0-1.312 0l-23 20.107a1.014 1.014 0 0 0-.282 1.111 1 1 0 0 0 .938.653h5V43.23c0 .556.447 1.005 1 1.005h34c.553 0 1-.45 1-1.005V22.117h5a1 1 0 0 0 .938-.653 1.014 1.014 0 0 0-.282-1.11zM41 20.107c-.553 0-1 .45-1 1.005v21.113H8V21.112c0-.556-.447-1.005-1-1.005H3.674L24 2.337l20.326 17.77H41z"/>
            <circle cx="28.235" cy="22.588" r="1.882"/>
            <path d="M20.33 23.247c0 .78.127 1.549.382 2.295l-6.291 6.29a1.035 1.035 0 0 0-.303.733v3.106c0 .572.463 1.035 1.035 1.035h3.106c.275 0 .538-.11.732-.303l6.29-6.29a7.124 7.124 0 0 0 2.295.381c3.996 0 7.248-3.251 7.248-7.247S31.572 16 27.576 16c-3.995 0-7.247 3.251-7.247 7.247zm7.246-5.177a5.182 5.182 0 0 1 5.177 5.177 5.182 5.182 0 0 1-5.177 5.176 5.116 5.116 0 0 1-2.12-.466 1.028 1.028 0 0 0-1.16.212l-6.466 6.466h-1.642v-1.642l6.467-6.466c.305-.305.388-.766.212-1.158a5.135 5.135 0 0 1-.467-2.122 5.182 5.182 0 0 1 5.176-5.177z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 48 29" id="robot-cleaner">
        <g>
            <path d="M24 .063c-12.337 0-24 5.345-24 11 0 10.766 3.927 17 24 17s24-6.234 24-17c0-5.655-11.663-11-24-11zm0 2c12.762 0 22 5.376 22 9 0 3.38-8.84 7-22 7s-22-3.62-22-7c0-3.625 9.238-9 22-9zm0 24c-15.722 0-20.597-3.823-21.71-10.941 4.053 3.253 12.913 4.94 21.71 4.94s17.657-1.687 21.71-4.94c-1.113 7.118-5.988 10.94-21.71 10.94z"/>
            <circle cx="18" cy="5.063" r="1"/>
            <circle cx="22" cy="5.063" r="1"/>
            <circle cx="26" cy="5.063" r="1"/>
            <circle cx="30" cy="5.063" r="1"/>
            <path d="M22 23.063a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 48 46" id="router">
        <g>
            <path d="M42.593 22.416h-27.19V10.583a3.592 3.592 0 1 0-4.797-3.387 3.594 3.594 0 0 0 2.658 3.465v11.755H6.807a5.352 5.352 0 0 0-5.345 5.345v10.962c0 .59.479 1.07 1.069 1.07h3.465v4.496c0 .59.48 1.069 1.07 1.069H41.83a1.07 1.07 0 0 0 1.069-1.07v-4.496h3.97a1.07 1.07 0 0 0 1.068-1.069V27.761a5.35 5.35 0 0 0-5.345-5.345zM12.744 7.196a1.45 1.45 0 1 1 2.9 0 1.45 1.45 0 0 1-2.9 0zM40.762 43.22H8.134v-3.428h32.628v3.428zm5.039-5.566H3.6v-9.893a3.21 3.21 0 0 1 3.207-3.207h35.786a3.21 3.21 0 0 1 3.208 3.207v9.893z"/>
            <path d="M10.623 28.02c-.59 0-1.07.478-1.07 1.068v4.03a1.069 1.069 0 1 0 2.139 0v-4.03a1.07 1.07 0 0 0-1.07-1.069zm26.403-.68a3.487 3.487 0 1 0 0 6.974c1.884 0 3.416-1.514 3.487-3.448v-.04a3.491 3.491 0 0 0-3.487-3.487zm0 4.836a1.35 1.35 0 1 1 1.35-1.369c-.039.77-.628 1.37-1.35 1.37zM16.852 28.02a1.07 1.07 0 0 0-1.069 1.068v4.03a1.07 1.07 0 0 0 2.138 0v-4.03c0-.59-.478-1.069-1.069-1.069zM7.533 11.49a1.07 1.07 0 0 0 .755-1.826 3.858 3.858 0 0 1 0-5.44A1.069 1.069 0 1 0 6.777 2.71a5.996 5.996 0 0 0 0 8.466c.2.2.472.313.756.313z"/>
            <path d="M3.445 13.757a1.069 1.069 0 0 0 .756-1.825c-2.756-2.757-2.754-7.28.006-10.083A1.07 1.07 0 1 0 2.683.35c-3.58 3.636-3.577 9.51.007 13.094.2.2.473.313.756.313z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 48 23" id="stats">
        <g transform="translate(-2 -16)">
            <path d="M44.903 16c-2.81 0-5.096 2.312-5.096 5.153 0 1.037.305 2.002.828 2.81l-5.506 5.568a5.025 5.025 0 0 0-2.78-.837c-1.062 0-2.05.33-2.866.895l-5.563-5.626a5.162 5.162 0 0 0 .827-2.81c0-2.841-2.286-5.153-5.096-5.153s-5.097 2.312-5.097 5.153c0 1.036.305 2 .828 2.81L9.875 29.53a5.025 5.025 0 0 0-2.778-.836C4.287 28.694 2 31.005 2 33.847 2 36.688 4.286 39 7.097 39c2.81 0 5.096-2.312 5.096-5.153a5.162 5.162 0 0 0-.828-2.81l5.506-5.568c.8.529 1.755.837 2.78.837s1.98-.308 2.78-.837l5.593 5.657a5.163 5.163 0 0 0-.771 2.72c0 2.842 2.286 5.154 5.096 5.154s5.097-2.312 5.097-5.153a5.16 5.16 0 0 0-.828-2.81l5.507-5.568c.8.529 1.754.837 2.778.837 2.81 0 5.097-2.311 5.097-5.153C50 18.312 47.714 16 44.903 16zM7.097 36.87c-1.65 0-2.99-1.356-2.99-3.023s1.34-3.023 2.99-3.023c1.648 0 2.99 1.356 2.99 3.023s-1.342 3.023-2.99 3.023zM19.65 24.176c-1.649 0-2.99-1.356-2.99-3.023s1.341-3.023 2.99-3.023c1.649 0 2.99 1.356 2.99 3.023s-1.341 3.023-2.99 3.023zM32.349 36.87c-1.649 0-2.99-1.356-2.99-3.023s1.341-3.023 2.99-3.023c1.649 0 2.99 1.356 2.99 3.023s-1.341 3.023-2.99 3.023zm12.554-12.694c-1.648 0-2.99-1.356-2.99-3.023s1.342-3.023 2.99-3.023c1.649 0 2.99 1.356 2.99 3.023s-1.341 3.023-2.99 3.023z"/>
            <path d="M18.71 28.29a.992.992 0 0 0-1.403 0l-2.017 2.017a.992.992 0 0 0 1.403 1.403l2.016-2.017a.991.991 0 0 0 0-1.403zm19-6a.992.992 0 0 0-1.403 0l-2.017 2.017a.992.992 0 0 0 1.403 1.403l2.017-2.017a.992.992 0 0 0 0-1.403z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 48 48" id="thermal">
        <g transform="translate(-2 -4)">
            <path d="M27.102 21.024c0-1.645-1.373-2.983-3.061-2.983s-3.061 1.338-3.061 2.983v12.301a3.911 3.911 0 0 0-1.02 2.616c0 2.193 1.83 3.977 4.08 3.977s4.082-1.784 4.082-3.977c0-.96-.366-1.891-1.02-2.616v-12.3zM24.041 37.93c-1.126 0-2.041-.893-2.041-1.99 0-.56.243-1.083.684-1.47a.98.98 0 0 0 .336-.739V21.024c0-.549.459-.994 1.02-.994.563 0 1.021.445 1.021.994v12.707c0 .282.122.55.337.738.44.388.684.91.684 1.472 0 1.096-.915 1.989-2.041 1.989z"/>
            <path d="M46 30h-4v-4h3.031a.998.998 0 0 0 .928-.629.998.998 0 0 0-.238-1.096l-21.032-20a1 1 0 0 0-1.379 0l-21 20a.998.998 0 0 0-.238 1.096c.15.38.52.629.928.629h3v19a1 1 0 0 0 1 1h27.284c.894 3.44 3.999 6 7.716 6 4.412 0 8-3.589 8-8V34c0-2.206-1.795-4-4-4zm-12 4v10H8V25a1 1 0 0 0-1-1H5.5L24 6.38 42.53 24H41a1 1 0 0 0-1 1v5h-2c-2.205 0-4 1.794-4 4zm14 10c0 3.309-2.691 6-6 6s-6-2.691-6-6V34c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v10z"/>
            <path d="M43.796 36h-.98v-.98a.979.979 0 1 0-1.959 0V36h-.98a.979.979 0 1 0 0 1.96h.98v.979a.979.979 0 1 0 1.96 0v-.98h.979a.979.979 0 1 0 0-1.959zm0 7.837h-3.918a.979.979 0 1 0 0 1.959h3.918a.979.979 0 1 0 0-1.96z"/>
        </g>
    </symbol>
    <symbol viewBox="0 0 48 36" id="cam">
        <g>
            <path d="M24 26c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm0-10c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4z"/>
            <path d="M23 21a1 1 0 0 0 1-1 1 1 0 1 0 0-2c-1.102 0-2 .897-2 2a1 1 0 0 0 1 1z"/>
            <path d="M47 0H1a1 1 0 0 0-1 1v7c0 2.206 1.794 4 4 4v4c0 11.028 8.972 20 20 20s20-8.972 20-20v-4c2.206 0 4-1.794 4-4V1a1 1 0 0 0-1-1zm-5 16c0 9.925-8.075 18-18 18S6 25.925 6 16v-4h12.062C15.612 13.824 14 16.717 14 20c0 5.514 4.486 10 10 10s10-4.486 10-10c0-3.283-1.611-6.176-4.062-8H42v4zm-18-4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zm22-4c0 1.102-.897 2-2 2H4c-1.102 0-2-.898-2-2V2h44v6z"/>
            <circle cx="37" cy="15" r="1"/>
        </g>
    </symbol>

    <symbol viewBox="0 0 53 52" id="music-control">
        <g>
            <path d="M11.652 24.013l10.01-9.009A2 2 0 0 1 25 16.491v18.018a2 2 0 0 1-3.338 1.487l-10.01-9.01a2 2 0 0 1 0-2.973z"/>
            <path d="M24.652 24.013l10.01-9.009A2 2 0 0 1 38 16.491v18.018a2 2 0 0 1-3.338 1.487l-10.01-9.01a2 2 0 0 1 0-2.973z"/>
        </g>
    </symbol>
</svg>
`;


class FooterView extends Flux.View {
    constructor(node: HTMLElement | null, template: string) {
        super(node, template);
    }

    update(): this {
        this.node.innerHTML = this.template;
        return this;
    }
}


export {FooterView, footerTempl};