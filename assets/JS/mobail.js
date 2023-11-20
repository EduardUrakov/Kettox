"use strict";
const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const img1 = document.querySelector('.fast-card-mobail1');
const img2 = document.querySelector('.fast-card-mobail2');
const img3 = document.querySelector('.fast-card-mobail3');


leftArrow.addEventListener('click', () => {
    if (img2.classList.contains('active')) {
        img2.classList.remove('active');
        img1.classList.add('active');
    } else if (img3.classList.contains('active')) {
        img3.classList.remove('active');
        img2.classList.add('active');
    }
});

rightArrow.addEventListener('click', () => {
    if (img1.classList.contains('active')) {
        img1.classList.remove('active');
        img2.classList.add('active');
    } else if (img2.classList.contains('active')) {
        img2.classList.remove('active');
        img3.classList.add('active');
    }
});


function generateForm() {
    var formTemplate = `
    <div class="compound__items__mobail">
            <div class="compoud__item__left">
                <div class="compoud__item__between">
                    <img src="./assets/img/compoude_item_img_mango.png" alt="compoude_item_img_mango">
                    <div class="compoud__item__description">
                        <div class="compoud__item-title">Африканское манго</div>
                        <div class="compoud__item-text">Поддерживает липидный обмен и нормализует сахар в крови</div>
                    </div>
                </div>
            </div>

            <div class="compoud__item__left">
                <div class="compoud__item__between">
                    <div class="compoud__item__description">
                        <div class="compoud__item-title">Готу кола </div>
                        <div class="compoud__item-text">Ускоряет водно-солевой обмен, препятствует образованию целлюлита
                        </div>
                    </div>
                    <img src="./assets/img/compoude_item_img_sentella.png" alt="compoude_item_img_sentella">
                </div>
            </div>

            <div class="compoud__item__right">
                <div class="compoud__item__between">
                    <img src="./assets/img/compoude_item_img_tamarind.png" alt="compoude_item_img_tamarind">
                    <div class="compoud__item__description">
                        <div class="compoud__item-title">Тамаринд</div>
                        <div class="compoud__item-text">Содержит природные альфа-кетоны, ускоряет жиросжигание и
                            запускает кетоз</div>
                    </div>
                </div>
            </div>

            <div class="compoud__item__right">
                <div class="compoud__item__between">
                    <div class="compoud__item__description">
                        <div class="compoud__item-title">Канадская голубика</div>
                        <div class="compoud__item-text">эффективно проникает и расщепляет клетки “жировых депо”</div>
                    </div>
                    <img src="./assets/img/compoude_item_img_settimana.png" alt="compoude_item_img_settimana">
                </div>
            </div>
            
            <div class="compoud__item__right">
                <div class="compoud__item__between">
                    <img src="./assets/img/compoude_item_img_asai.png" alt="compoude_item_img_asai">
                    <div class="compoud__item__description">
                        <div class="compoud__item-title">Ягода асаи </div>
                        <div class="compoud__item-text">Концентрат аминокислот и микроэлементов, улучшает состояние
                            кожи, волос, ногтей</div>
                    </div>
                </div>
            </div>
            
            <div class="compoud__item__left">
                <div class="compoud__item__between">
                    <div class="compoud__item__description">
                        <div class="compoud__item-title">Худия гордони</div>
                        <div class="compoud__item-text">Содержит алканы и витамин Е, блокирует чувство голода</div>
                    </div>
                    <img src="./assets/img/compoude_item_img_hoodia.png" alt="compoude_item_img_hoodia">
                </div>
            </div>
        </div>
    `;

    const formContainer = document.createElement('div');
    formContainer.innerHTML = formTemplate;

    document.getElementById('dynamicFormsContainer').appendChild(formContainer);
}

generateForm();
