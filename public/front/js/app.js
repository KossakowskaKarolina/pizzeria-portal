import {settings, select, classNames, templates} from './settings.js';
import Product from './components/Product.js';
import Cart from './components/Cart.js';
import Booking from './components/Booking.js';

const app = {
  initPages: function(){
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children; //znajdujemy dzieci konterera pages tj. order i booking
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    thisApp.linkToBoxes = document.querySelector(select.homeDiv.linkToBoxes);

    const idFromHash = window.location.hash.replace('#/', ''); //podajemy, która stroma ma być domyślnie otwierana

    let pageMatchingHash = thisApp.pages[0].id;

    for(let page of thisApp.pages){
      if(page.id == idFromHash){
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        const clickedElement = this;
        event.preventDefault();

        /* get page id from href attribute */
        const id = clickedElement.getAttribute('href').replace('#', '');

        /* run thisApp.activatePage with that id */
        thisApp.activatePage(id);

        /* changle URL hash */
        window.location.hash = '#/' + id; // /ma zapobiec domyślnemu zachowaniu window.location.hash czyli przewijaniu do pierwszego elementu o id takim jak hash

      });
    }

    thisApp.initLinks();
  },

  activatePage: function(pageId) {
    const thisApp = this;

    /* add class "active" to matching pages, remove from non-matching */
    for(let page of thisApp.pages){
    //  if(page.id == pageId){
    //    page.classList.add(classNames.pages.active);
    //  } else {
    //    page.classList.remove(classNames.pages.active);
    //  }
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    /* add class "active" to matching links, remove from non-matching */
    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }

  },

  initLinks: function(){
    const thisApp = this;

    thisApp.linkToBoxes.addEventListener('click', function(event) {
      const idLink = event.target.offsetParent.getAttribute('class');
      let id;
      if(event.target.offsetParent.classList.contains('box-text')){
        id = idLink.replace('box-text link_to_', '');
      } else if(event.target.offsetParent.classList.contains('box')){
        id = idLink.replace('box link_to_', '');
      }
      thisApp.activatePage(id);
      window.location.hash = '#/' + id;
    });
  },

  initMenu: function(){
    const thisApp = this; //obiekt zapisany w stałej app
    //console.log('thisApp.data:', thisApp.data);

    for(let productData in thisApp.data.products){
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
  },

  initData: function(){
    const thisApp = this;

    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        //console.log('parsedReponse', parsedResponse);

        /* save parsedResponse as thisApp.data.products */
        thisApp.data.products = parsedResponse;

        /* execute initMenu method */
        thisApp.initMenu();
      });

    console.log('thisApp.data', JSON.stringify(thisApp.data));

  },

  initCart: function(){
    const thisApp = this;

    const cartElem = document.querySelector(select.containerOf.cart);
    thisApp.cart = new Cart(cartElem); //poza obiektem app możemy tę instację wywołać za pomocą app.cart

    thisApp.productList = document.querySelector(select.containerOf.menu);

    thisApp.productList.addEventListener('add-to-cart', function(event){
      app.cart.add(event.detail.product);
    });
  },

  initBooking: function(){
    const thisApp = this;

    const bookingWrapper = document.querySelector(select.containerOf.booking);
    thisApp.booking = new Booking(bookingWrapper);
  },

  init: function(){
    const thisApp = this;
    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);
    console.log('classNames:', classNames);
    console.log('settings:', settings);
    console.log('templates:', templates);

    thisApp.initPages();
    thisApp.initData();
    thisApp.initCart();
    thisApp.initBooking();
  },
};

app.init();
