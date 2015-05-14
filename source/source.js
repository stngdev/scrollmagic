
$(document).ready(function(){

    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

  $("section").each(function() {
  
      var name = $(this).attr('id');

      new ScrollMagic.Scene({
          triggerElement: this
      })
      .setPin(this)
      .addIndicators({
          colorStart: "rgba(255,255,255,0.5)",
          colorEnd: "rgba(255,255,255,0.5)", 
          colorTrigger : "rgba(255,255,255,1)",
          name:name
      }) 
      .addTo(ctrl);
   
  });

  // get window height

  var wh = window.innerHeight;

  new ScrollMagic.Scene({
    offset: wh*3
  })
  .setClassToggle("section#four", "is-active")
  .addTo(ctrl);


})