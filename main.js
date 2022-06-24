'use strict';

const items = document.querySelector('.items');
const itemOne = document.querySelector('.item_one');
const itemTwo = document.querySelector('.item_two');
const itemThree = document.querySelector('.item_three');
const itemFour = document.querySelector('.item_four');
const itemFive = document.querySelector('.item_five');
const itemSix = document.querySelector('.item_six');
const ads = document.querySelector('.ads');

const listTwo = itemTwo.querySelector('.props__list');
const listThree = itemThree.querySelector('.props__list');
const listFive = itemFive.querySelector('.props__list');
const listSix = itemSix.querySelector('.props__list');

const contentThree = itemThree.querySelector('.content');
const contentFive = itemFive.querySelector('.content');

const h2Two = itemTwo.querySelector('.item__title');
const h2Three = itemThree.querySelector('.item__title');
const h2Five = itemFive.querySelector('.item__title');
const h2Six = itemSix.querySelector('.item__title');

const itemsTwo = itemTwo.querySelectorAll('.props__item');
const itemsFour = itemFour.querySelectorAll('.props__item');
const itemsSix = itemSix.querySelectorAll('.props__item');

items.prepend(itemOne, itemTwo, itemThree, itemFour, itemFive, itemSix);

itemsFour[2].after(itemsTwo[3]);
listTwo.before(h2Five);
listSix.before(h2Two);
listFive.before(h2Six);
listTwo.append(itemsSix[8], itemsSix[9]);

h2Three.innerHTML = 'This и прототипы объектов';

contentThree.append(listFive);
contentFive.append(listThree);

ads.remove();
