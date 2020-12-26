$(function() {
    $(".dropdown-trigger").dropdown({
        hover:true
    });
    $('.sidenav').sidenav();

    
    $('.tabs').tabs({
        swipeable:true
    });

    $('.home_box').slick();
   
});
$(function() {
    $('.testimonial_box .tabs-nav a').click(function() {
  
      // Check for active
      $('.testimonial_box .tabs-nav li').removeClass('active');
      $(this).parent().addClass('active');
  
      // Display active tab
      let currentTab = $(this).attr('href');
      $('.testimonial_box .tabs-content div').hide();
      $(currentTab).show();
  
      return false;
    });
  });