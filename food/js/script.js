document.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => tab.classList.remove('tabheader__item_active'));
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (e.target.matches('.tabheader__items .tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2022-08-30';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            t,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector);
        const timeInterval = setInterval(updClock, 1000);

        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');

        updClock();

        function updClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if (t.t <= 0) {
                clearInterval(timeInterval);
                days.textContent = hours.textContent = minutes.textContent = seconds.textContent = '00';
            }
        }
    }

    setClock('.timer', deadline);

    // Modal

    // let a = window.getComputedStyle(modal).display;
    // if (a === 'block') {
    //     document.documentElement.style.overflow = 'hiden'
    // }

    const modal = document.querySelector('.modal'),
        modalClose = document.querySelector('[data-closeModal]'),
        modalOpen = document.querySelectorAll('[data-modal]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = 'visible';
    }

    modalOpen.forEach(btn => btn.addEventListener('click', openModal))
    modalClose.addEventListener('click', closeModal)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal()
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) closeModal()
    });
    window.addEventListener('scroll', showModalByScroll)

    // Card

    class Card {
        constructor(parentSelector, img, alt, title, text, price, currency) {
            this.img = img
            this.alt = alt
            this.title = title
            this.text = text
            this.price = price
            this.currency = currency
            this.parentSelector = document.querySelector(parentSelector);
        }
        mount() {
            const item = document.createElement('div');

            switch (this.currency) {
                case 'UAH':
                    this.currency = '₴'
                    break
                case 'USD':
                    this.currency = '$'
                    break
                case 'EUR':
                    this.currency = '€'
                    break
                default:
                    this.currency = '₴'
            }

            item.innerHTML = `<div class="menu__item">
                                <img src=${this.img} alt="${this.alt}">
                                <h3 class="menu__item-subtitle">${this.title}</h3>
                                <div class="menu__item-descr">${this.text}</div>
                                <div class="menu__item-divider"></div>
                                <div class="menu__item-price-wrapper">
                                    <div class="menu__item-price">
                                        <div class="menu__item-cost">Цена:</div>
                                        <div class="menu__item-total"><span>${this.price}</span> <span>${this.currency}</span>/день</div>
                                    </div>
                                </div>
                                </div>
                             </div>`;

            this.parentSelector.append(item);

        }
    }

    new Card(
        '.menu__field .container',
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес"',
        `Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих
        овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной
        ценой и высоким качеством!`,
        229,
        'USD').mount()
    new Card(
        '.menu__field .container',
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум”',
        `В меню “Премиум” мы используем не только красивый дизайн упаковки, но
        и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода
        в ресторан!`,
        550,
        'EUR').mount()
    new Card(
        '.menu__field .container',
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        `Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие
        продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное
        количество белков за счет тофу и импортных вегетарианских стейков.`,
        430,
        'UAH').mount()

    // [cardFirst, cardSecond, cardThid].forEach(i => i.mount())

    

});