const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);



const myName = document.createElement('a');
myName.textContent = 'Will';
const navBar = document.querySelector('nav');
navBar.prepend(myName);

const signIn = document.createElement('a');
signIn.textContent = 'Sign-in';
navBar.append(signIn);


const navStuff = navBar.children;
for(let i = 0; i< navStuff.length; i ++) {
  if (i > 0 && i < navStuff.length -1) {
    navStuff[i].textContent = siteContent.nav[`nav-item-${i}`];
  }
  navStuff[i].style.color = 'green';
};

const headyBoi = document.querySelector('h1');
headyBoi.textContent += siteContent.cta.h1;

const domButton = document.querySelector('button');
domButton.textContent = siteContent.cta.button;


const topBlurbTitles = document.querySelectorAll('.top-content .text-content h4');
topBlurbTitles[0].textContent = siteContent["main-content"]["features-h4"];
topBlurbTitles[1].textContent = siteContent["main-content"]["about-h4"];

const topBlurbText = document.querySelectorAll('.top-content .text-content p');
topBlurbText[0].textContent = siteContent["main-content"]["features-content"];
topBlurbText[1].textContent = siteContent["main-content"]["about-content"];

const bottomBlurbTitles = document.querySelectorAll('.bottom-content .text-content h4');
const bottomBlurbText = document.querySelectorAll('.bottom-content .text-content p');

bottomBlurbTitles[0].textContent = siteContent["main-content"]["services-h4"];
bottomBlurbTitles[1].textContent = siteContent["main-content"]["product-h4"];
bottomBlurbTitles[2].textContent = siteContent["main-content"]["vision-h4"];

bottomBlurbText[0].textContent = siteContent["main-content"]["services-content"];
bottomBlurbText[1].textContent = siteContent["main-content"]["product-content"];
bottomBlurbText[2].textContent = siteContent["main-content"]["vision-content"];



const midImage = document.getElementById('middle-img');
midImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const ctaimg = document.querySelector('#cta-img');
ctaimg.setAttribute('src', siteContent['cta']['img-src']);


const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent.contact["contact-h4"];

const contactParas = document.querySelectorAll('.contact p');
contactParas[0].textContent = siteContent.contact.address;
contactParas[1].textContent = siteContent.contact.phone;
contactParas[2].textContent = siteContent.contact.email;



const footerStuff = document.querySelector('footer');
footerStuff.textContent = siteContent.footer.copyright;


const bodyPage = document.getElementsByClassName('container');




domButton.onclick = colorChange;



