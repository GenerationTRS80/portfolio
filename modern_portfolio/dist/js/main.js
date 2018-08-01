/*jshint esversion: 6 */
/* Note: just put above commented line to stop warning for using const or other ES6
   https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const
*/

// Select DOM Item

  // .btn-menu The dot refers to a class
  const menuBtn = document.querySelector('.btn-menu');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');  
  const menuBranding = document.querySelector('.menu-branding');

  // Create a "node list". The node list is an array on all the element in the Index.htms
  // To create the node list array use querySelectorAll function
  const navItem = document.querySelectorAll('.nav-items');

  // Set intial state of menu
  let showMenu = false;

  menuBtn.addEventListener('click',toggleMenu);

  function toggleMenu(){
    // Check the state of showMenu. If the overlay is NOT shown then make it shown
    if(!showMenu){

      // Add close class
      menuBtn.classList.add('.btn-Close');
      menu.classList.add('.menu-Show');
      menuNav.classList.add('.btn-Close');
      menuBranding.classList.add('.btn-Close');
    } else {

    }
  }
