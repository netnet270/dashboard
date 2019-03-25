$(document).ready(function(){
  // sidebarCollapse();
  // menu();
  // dropdown();
  
  chart('myChart1');
  chart('myChart2');
  chart('myChart3');
})
  // sidebar-collapse

  function sidebarCollapse(){
    $('.js-btn-collaspe').on('click', function(){
      $('.js-sidebar-collapse').toggleClass('left-sidebar__collapse--visible');
  
      $('.overlay-mobile').fadeToggle('200');
  
      $('.overlay-mobile').on('click', function(){         
        $('.js-sidebar-collapse').removeClass('left-sidebar__collapse--visible');
        $(this).fadeOut();
      });
    })
  }
 
  //Menu 
  function menu(){
    $('.js-menu-item').each(function () {
      $(this).children('.js-menulink').on('click', function () {
        var menuItem = $(this).parent('.js-menu-item');
        if(menuItem.hasClass('main-menu__item--active')) {
          menuItem.children('.js-submenu').slideUp(250);
          menuItem.removeClass('main-menu__item--active');
        }
  
        else {
          menuItem.children('.js-submenu').slideDown(250);
          menuItem.addClass('main-menu__item--active');
        }
      })
    })
  }

  //dropdown
  function dropdown(){
    $('.js-dropdown-toggle').on('click', function(){
      var dropdown = $(this).parent('.js-dropdown');
      var droplist =  dropdown.children('.js-dropdown-list');
      $('.js-dropdown-list').not(droplist).fadeOut(250);
      droplist.fadeToggle(250);
    })
  
    $(document).on('click', function(event) {
      if (!$(event.target).closest('.js-dropdown').length) {
          $(".js-dropdown-list").fadeOut(250);
      }
    });
  }
 
  //carousel 
  function carousel(item, element, time){
    $(item + ':gt(0)').hide();

    setInterval(function(){
      $(item+ ':first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo(element);
    }, time);
  }

  function chart(element){
    var ctx = document.getElementById(element).getContext('2d');
    var chart = new Chart(ctx, {
        type: 'doughnut',
        
        data: {
          labels: [
            'Returning', 
            'New'
          ],
            datasets: [{
              data: [230, 130],
              backgroundColor: ['#1ca8dd', '#1bc98e'],
          }],
        },

        options: {
          responsive: true,
          legend: {
            position: 'top',
          },

          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
    });
  }
 

