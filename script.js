

$(function(){

  //piano, organ, acoustic, edm
  var instrument = Synth.createInstrument('piano');
  
  $('.key').on('click',function(){
    var key = $(this).data('key');
    var octave = $(this).data('octave');
    instrument.play(key, octave, 2);

    $(this).addClass('down'),
    setTimeout(()=>$(this).removeClass('down'),1000);
  });

  $(document).on('keydown',function(e) { 
  
    var keyCode = e.keyCode;
    $('[data-keycode="'+keyCode+'"]').trigger('click');
    $('[data-keycode="'+keyCode+'"]').addClass('down');
  }); 

  $(document).on('keyup',function(e) { 
    var keyCode = e.keyCode;
    $('[data-keycode="'+keyCode+'"]').removeClass('down');
  }); 

});
