const divMain = document.createElement('div');
const h2 = document.createElement('h2');
const MainProgram = document.getElementById('dynamic-speakers');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const imgContainer = document.createElement('div');
const paraContainer = document.createElement('div');
const imgHeading = document.createElement('h2');
const imgHeading2 = document.createElement('h2');
const imgPara = document.createElement('p');
const imgPara2 = document.createElement('p');
const imgContainer2 = document.createElement('div');
const img2Para = document.createElement('p');
const img2paraDiv = document.createElement('div');
const img2para2 = document.createElement('p');
const more = document.createElement('div');
const morePara = document.createElement('p');
const arrow = document.createElement('span');
const menuBar = document.getElementById('menu-bar');
const menu = document.querySelector('.menu');
const close = document.getElementById('close');
const link = document.querySelector('.home-link');
const link2 = document.querySelector('.about-link');
const link3 = document.getElementById('.menu-bar2');
const desktopImgConatainer = document.createElement('div');
const moreHerosContainer = document.createElement('div');
const secondDivisionOfHeros = document.createElement('div');
const invoker = document.createElement('div');
const ember = document.createElement('div');
const morph = document.createElement('div');
const crystalMaiden = document.createElement('div');
const loneDruid = document.createElement('div');
const juggernaut = document.createElement('div');
const heroName3 = document.createElement('h2');
const heroName4 = document.createElement('h2');
const heroName5 = document.createElement('h2');
const heroName6 = document.createElement('h2');
const heroName7 = document.createElement('h2');
const heroName8 = document.createElement('h2');
const hero3Img = document.createElement('img');
const hero4Img = document.createElement('img');
const hero5Img = document.createElement('img');
const hero6Img = document.createElement('img');
const hero7Img = document.createElement('img');
const hero8Img = document.createElement('img');
const hero3Attributes = document.createElement('p');
const hero4Attributes = document.createElement('p');
const hero5Attributes = document.createElement('p');
const hero6Attributes = document.createElement('p');
const hero7Attributes = document.createElement('p');
const hero8Attributes = document.createElement('p');
const hero3Details = document.createElement('p');
const hero4Details = document.createElement('p');
const hero5Details = document.createElement('p');
const hero6Details = document.createElement('p');
const hero7Details = document.createElement('p');
const hero8Details = document.createElement('p');
const thirdDivisionOfHeros = document.createElement('div');
const fourthDivisionOfHeros = document.createElement('div');
const headingImgParaDiv3 = document.createElement('div');
const headingImgParaDiv4 = document.createElement('div');
const headingImgParaDiv5 = document.createElement('div');
const headingImgParaDiv6 = document.createElement('div');
const headingImgParaDiv7 = document.createElement('div');
const headingImgParaDiv8 = document.createElement('div');
const menu2 = document.querySelector('.menu2');

const objDetail = [
  {
    topHeading: 'Feature Heros',
    class: 'speakers',
  },
  {
    img1src: 'images/queen-of-pain.jpg',
    img2src: 'images/Antimage.jpg',
    img3src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOI9BZc1wyGFKGlg1NXFIQPs2cz7bPIOVt2g&usqp=CAU',
    img4src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5QPfdgxu9HexiUBOAz3tto9GVyCdu3cz8w&usqp=CAU',
    img5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpLBtEWX5_b4863GWZOrQCaR5YQ77njHGrg&usqp=CAU',
    img6: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4blmLNrUJB9zRKbq_ZXVwbDUo_49WxjYPA&usqp=CAU',
    img7: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDThuOs6Ve0tudP8AokFLnL9oWcP7x8HHrw&usqp=CAU',
    img8: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IVg5DQVs13qbDlZVOESwoYRpgkURvYtjgQ&usqp=CAU',

  },
  {
    hero1: 'Queen of Pain',
    class: 'hero1',
  },
  {
    hero2: 'Anti-mage',
    class: 'Anti-mage',
  },

  {
    p1: 'This is the hero with the burst of the damage to neutralise the advantage in no time.',
    p2: 'This character is hard to play early with but can be farmed so fast and has the ability to turn the game in its favor.',
    p3: 'More',
    span: 'expand_more',
    p4: 'This hero has high potential of magical damage he can nuke initiate can escape certain has many skills with low cooldown',
    p5: 'Ember spirit can play both as a magical or physical hitter he can can play roles to initiate destroy back end supports has high physical damage',
    p6: 'Morphling is a carry hero with ability to change his stats make him hard to kill can nuke enemy heros has burst of high magical and physical damage and can escape certain deaths',
    p7: 'Crystal Maiden is a support hero who has high early magical damage is a very good early lane support',
    p8: 'Lone druid is a very versatile hero. His bear and himself play together and because of low attack time it makes him very scary carry against a specific pick',
    p9: 'juggernaut is one of the most reliable carry of dota2 who has always been a priority for the players can take away the games from the opponent mouth at times.',

  },
  {
    h2Class: 'top-heading',
    topDivClass: 'top-div',
    borderClass: 'speaker-border',
    imgClass: 'img1',
    imgcontainer: 'img-container',
    paraContainer: 'para-container',
    imgHeading1: 'img-heading',
    imgPara: 'img-para',
    img2: 'img2',
    imgContainer2: 'img-imgContainer2',
    imgHeading2: 'img-heading2',
    img2paraDiv: 'img2-para-div',
    img2para2: 'img2-para2',
    more: 'more',
    morePara: 'more-para',
    span: 'material-symbols-outlined',
    desktopImgConatainer: 'desktop-img-container',
    moreHerosContainer: 'more-hero-container',
    secondDivisionOfHeros: 'second-division-of-heros',
    invoker: 'invoker',
    ember: 'ember',
    morph: 'morph',
    crystalMaiden: 'crystal-maiden',
    loneDruid: 'lone-druid',
    juggernaut: 'juggernaut',
    hero3heading: 'hero3',
    hero4heading: 'hero4',
    hero5heading: 'hero5',
    hero6heading: 'hero6',
    hero7heading: 'hero7',
    hero8heading: 'hero8',
    hero3Img: 'hero3-img',
    hero4Img: 'hero4-img',
    hero5Img: 'hero5-img',
    hero6Img: 'hero6-img',
    hero7Img: 'hero7-img',
    hero8Img: 'hero8-img',
    hero3Attributes: 'hero3-Attributes',
    heroDetails: 'hero-Details',
    thirdDivisionOfHeros: 'third-Division-Of-Heros',
    fourDivisionOfHeros: 'fourth-Division-Of-Heros',
    headingImgParaDiv: 'heading-Img-Para-Div5',

  },
  {
    heroAttribute1: 'Intelligence, Core, Carry, Nuker',
    heroAttribute2: 'Agility, Core, Carry, Escaper',
    heroAttribute3: 'Intelligence, Core, Carry, Escaper, Nuker, Disabler',
    heroAttribute4: 'Agility, Core, Carry, Escaper, Disabler',
    heroAttribute5: 'Agility, Core, Carry, Escaper,Nuker',
    heroAttribute6: 'Intelligence, Support',
    heroAttribute7: 'Agility, Core, Carry, Escaper, Durable',
    heroAttribute8: 'Agility, Core, Carry, Escaper',
  },
  {
    hero3: 'invoker',
    hero4: 'Ember',
    hero5: 'Morph',
    hero6: 'Crystal Maiden',
    hero7: 'Lone Druid',
    hero8: 'Juggernaut',
  },

];
desktopImgConatainer.className = objDetail[5].desktopImgConatainer;

arrow.className = objDetail[5].span;
arrow.innerHTML = objDetail[4].span;
morePara.className = objDetail[5].morePara;
morePara.innerHTML = objDetail[4].p3;
more.className = objDetail[5].more;
more.appendChild(morePara);
more.appendChild(arrow);
img2para2.className = objDetail[5].img2para2;
img2para2.innerHTML = objDetail[4].p2;
img2paraDiv.className = objDetail[5].paraContainer;
img2paraDiv.appendChild(imgHeading2);
img2paraDiv.appendChild(img2Para);
img2paraDiv.appendChild(img2para2);
img2Para.className = objDetail[5].imgPara;
img2Para.innerHTML = objDetail[6].heroAttribute2;
imgHeading2.className = objDetail[5].imgHeading2;
imgHeading2.innerHTML = objDetail[3].hero2;
imgContainer2.className = objDetail[5].imgcontainer;
img2.setAttribute('src', objDetail[1].img2src);
img2.className = objDetail[5].img2;
imgPara2.innerHTML = objDetail[4].p1;
imgPara2.className = objDetail[5].img2para2;
imgPara.className = objDetail[5].imgPara;
imgPara.innerHTML = objDetail[6].heroAttribute1;
imgHeading.className = objDetail[5].imgHeading1;
imgHeading.innerHTML = objDetail[2].hero1;
paraContainer.append(imgHeading);
paraContainer.appendChild(imgPara);
paraContainer.appendChild(imgPara2);
paraContainer.className = objDetail[5].paraContainer;
imgContainer.className = objDetail[5].imgcontainer;
desktopImgConatainer.appendChild(imgContainer);
imgContainer.appendChild(img1);
imgContainer2.appendChild(img2);
imgContainer2.appendChild(img2paraDiv);
imgContainer.appendChild(paraContainer);
desktopImgConatainer.appendChild(imgContainer2);
img1.setAttribute('src', objDetail[1].img1src);
img1.className = objDetail[5].imgClass;
h2.innerHTML = objDetail[0].topHeading;
h2.className = objDetail[5].h2Class;
divMain.className = objDetail[5].topDivClass;
divMain.appendChild(h2);
divMain.appendChild(desktopImgConatainer);
divMain.appendChild(more);
MainProgram.appendChild(divMain);

// hero3Detail className
hero3Details.className = objDetail[5].heroDetails;
hero4Details.className = objDetail[5].heroDetails;
hero5Details.className = objDetail[5].heroDetails;
hero6Details.className = objDetail[5].heroDetails;
hero7Details.className = objDetail[5].heroDetails;
hero8Details.className = objDetail[5].heroDetails;
// details of heros
hero3Details.innerHTML = objDetail[4].p4;
hero4Details.innerHTML = objDetail[4].p5;
hero5Details.innerHTML = objDetail[4].p6;
hero6Details.innerHTML = objDetail[4].p7;
hero7Details.innerHTML = objDetail[4].p8;
hero8Details.innerHTML = objDetail[4].p9;

// img source
hero3Img.setAttribute('src', objDetail[1].img3src);
hero4Img.setAttribute('src', objDetail[1].img4src);
hero5Img.setAttribute('src', objDetail[1].img5);
hero6Img.setAttribute('src', objDetail[1].img6);
hero7Img.setAttribute('src', objDetail[1].img7);
hero8Img.setAttribute('src', objDetail[1].img8);
// adding Attributes info of the heros class
hero3Attributes.className = objDetail[5].hero3Attributes;
hero4Attributes.className = objDetail[5].hero3Attributes;
hero5Attributes.className = objDetail[5].hero3Attributes;
hero6Attributes.className = objDetail[5].hero3Attributes;
hero7Attributes.className = objDetail[5].hero3Attributes;
hero8Attributes.className = objDetail[5].hero3Attributes;
// hero attributes detail
hero3Attributes.innerHTML = objDetail[6].heroAttribute3;
hero4Attributes.innerHTML = objDetail[6].heroAttribute4;
hero5Attributes.innerHTML = objDetail[6].heroAttribute5;
hero6Attributes.innerHTML = objDetail[6].heroAttribute6;
hero7Attributes.innerHTML = objDetail[6].heroAttribute7;
hero8Attributes.innerHTML = objDetail[6].heroAttribute8;

// Images ClassNames
hero3Img.className = objDetail[5].hero3Img;
hero4Img.className = objDetail[5].hero4Img;
hero5Img.className = objDetail[5].hero5Img;
hero6Img.className = objDetail[5].hero6Img;
hero7Img.className = objDetail[5].hero7Img;
hero8Img.className = objDetail[5].hero8Img;
// HerosDivision Classname
invoker.className = objDetail[5].invoker;
ember.className = objDetail[5].ember;
morph.className = objDetail[5].morph;
crystalMaiden.className = objDetail[5].crystalMaiden;
loneDruid.className = objDetail[5].loneDruid;
juggernaut.className = objDetail[5].juggernaut;

// Heading of Heros
heroName3.innerHTML = objDetail[7].hero3;
heroName4.innerHTML = objDetail[7].hero4;
heroName5.innerHTML = objDetail[7].hero5;
heroName6.innerHTML = objDetail[7].hero6;
heroName7.innerHTML = objDetail[7].hero7;
heroName8.innerHTML = objDetail[7].hero8;

// Heros Heading ClassNames
heroName3.className = objDetail[5].hero3heading;
heroName4.className = objDetail[5].hero4heading;
heroName5.className = objDetail[5].hero5heading;
heroName6.className = objDetail[5].hero6heading;
heroName7.className = objDetail[5].hero7heading;
heroName8.className = objDetail[5].hero8heading;
// second Division of heros
secondDivisionOfHeros.className = objDetail[5].secondDivisionOfHeros;
// Adding Heading paragraph and images in a division
headingImgParaDiv3.appendChild(heroName3);
headingImgParaDiv3.appendChild(hero3Attributes);
headingImgParaDiv3.appendChild(hero3Details);
// Adding Heading paragraph and images in a division
headingImgParaDiv4.appendChild(heroName4);
headingImgParaDiv4.appendChild(hero4Attributes);
headingImgParaDiv4.appendChild(hero4Details);
// Adding Heading paragraph and images in a division
headingImgParaDiv5.appendChild(heroName5);
headingImgParaDiv5.appendChild(hero5Attributes);
headingImgParaDiv5.appendChild(hero5Details);
// Adding Heading paragraph and images in a division
headingImgParaDiv6.appendChild(heroName6);
headingImgParaDiv6.appendChild(hero6Attributes);
headingImgParaDiv6.appendChild(hero6Details);
// Adding Heading paragraph and images in a division
headingImgParaDiv7.appendChild(heroName7);
headingImgParaDiv7.appendChild(hero7Attributes);
headingImgParaDiv7.appendChild(hero7Details);
// Adding Heading paragraph and images in a division
headingImgParaDiv8.appendChild(heroName8);
headingImgParaDiv8.appendChild(hero8Attributes);
headingImgParaDiv8.appendChild(hero8Details);
// Adding div in a specific division
invoker.appendChild(hero3Img);
invoker.appendChild(headingImgParaDiv3);
// Adding div in a specific division
ember.appendChild(hero4Img);
ember.appendChild(headingImgParaDiv4);
// Adding div in a specific division
morph.appendChild(hero5Img);
morph.appendChild(headingImgParaDiv5);
// Adding div in a specific division
crystalMaiden.appendChild(hero6Img);
crystalMaiden.appendChild(headingImgParaDiv6);
// Adding div in a specific division
loneDruid.appendChild(hero7Img);
loneDruid.appendChild(headingImgParaDiv7);
// Adding div in a specific division
juggernaut.appendChild(hero8Img);
juggernaut.appendChild(headingImgParaDiv8);

// second Division Append Child
secondDivisionOfHeros.appendChild(invoker);
secondDivisionOfHeros.appendChild(ember);
// third division of heros
thirdDivisionOfHeros.className = objDetail[5].thirdDivisionOfHeros;
// Adding final divisions to their parent division
thirdDivisionOfHeros.appendChild(morph);
thirdDivisionOfHeros.appendChild(crystalMaiden);
// fourth Division of Heros
fourthDivisionOfHeros.className = objDetail[5].fourDivisionOfHeros;
// Adding final divisions to their parent division
fourthDivisionOfHeros.appendChild(loneDruid);
fourthDivisionOfHeros.appendChild(juggernaut);

// Adding New Names of Heros main div for divisions
moreHerosContainer.className = objDetail[5].moreHerosContainer;
// Adding all divisions to the last division
moreHerosContainer.appendChild(secondDivisionOfHeros);
moreHerosContainer.appendChild(thirdDivisionOfHeros);
moreHerosContainer.appendChild(fourthDivisionOfHeros);
// final division adding to html
MainProgram.appendChild(moreHerosContainer);
menuBar.addEventListener('click', () => {
  menu.classList.toggle('active');
});
close.addEventListener('click', () => {
  menu.classList.toggle('active');
});
link.addEventListener('click', () => {
  menu.classList.toggle('active');
});
link2.addEventListener('click', () => {
  menu.classList.toggle('active');
});
link3.addEventListener('click', () => {
  menu2.classList.toggle('active');
});

// going to write a new code as per the reviewer requirement
