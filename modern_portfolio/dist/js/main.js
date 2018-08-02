/*jshint esversion: 6 */
/* Note: just put above commented line to stop warning for using const or other ES6
   https://stackoverflow.com/questions/27441803/why-does-jshint-throw-a-warning-if-i-am-using-const
*/

// Select DOM Item

  // .btn-menu The dot refers to a class
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');  
  const menuBranding = document.querySelector('.menu-branding');

  // Create a "node list". The node list is an array on all the element in the Index.htms
  // To create the node list array use querySelectorAll function
  const navItems = document.querySelectorAll('.nav-item');

  // Set intial state of menu
  let showMenu = false;

  menuBtn.addEventListener('click',toggleMenu);

  function toggleMenu(){

    // Check the state of showMenu. If the overlay is NOT shown then make it shown
    if(!showMenu){

      console.log(`Show Menu = ${showMenu}`);

      // Add close class
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');

      // Add show class to each nav-item
      navItems.forEach(item=>item.classList.add('show'));

      // Set Menu state to TRUE
      showMenu = true;

    } else {

      console.log(`Show Menu = ${showMenu}`);

      // Add close class
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      
      // Add show class to each nav-item
      navItems.forEach(item=>item.classList.remove('show'));

      // Set Menu state to FALSE
      showMenu = false;
    }

    // Rotate into X with menu Lines


    
  }
