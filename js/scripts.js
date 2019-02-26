$(document).ready(function() {

  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var food = $("select#food").val();

    var activity = $("select#activity").val();

    var outin = $("select#outin").val();

    var comfort = $("select#comfort").val();

    var group = $("select#group").val();


      if (food === 'mexican' && activity === 'beach' && outin === 'out') {
        $('#holbox').show();
        $('#morocco').hide();
        $('#barcelona').hide();
        $('#quiz').hide();
      }
      if (food === 'african' && activity === 'desert' && outin === 'either') {
        $('#morocco').show();
        $('#holbox').hide();
        $('#barcelona').hide();
        $('#quiz').hide();
      }
      if (food === 'spanish' && activity === 'museum' && outin === 'in') {
        $('#barcelona').show();
        $('#holbox').hide();
        $('#morocco').hide();
        $('#quiz').hide();
      }
      if (food === 'spanish' && activity === 'beach' && outin === 'out' && comfort === 'some') {
        $('#morocco').show();
        $('#holbox').hide();
        $('#barcelona').hide();
        $('#quiz').hide();
      }
      if (food === 'mexican' && activity === 'museum' && outin === 'either' && group === 'partner') {
        $('#barcelona').show();
        $('#holbox').hide();
        $('#morocco').hide();
        $('#quiz').hide();
      }

      if (food === 'mexican' && activity === 'desert' && outin === 'either' && group === 'alone' && comfort === 'some') {
        $('#holbox').show();
        $('#barcelona').hide();
        $('#morocco').hide();
        $('#quiz').hide();
      }

      if (food === 'spain' && activity === 'desert' && outin === 'out' && group === 'partner' && comfort === 'some') {
        $('#morocco').show();
        $('#barcelona').hide();
        $('#holbox').hide();
        $('#quiz').hide();
      }

      if (food === 'mexican' && activity === 'beach' && outin === 'out' && group === 'partner' && comfort === 'adventure') {
        $('#holbox').show();
        $('#barcelona').hide();
        $('#morocco').hide();
        $('#quiz').hide();
      }

      if (food === 'african' && activity === 'desert' && outin === 'either' && group === 'people' && comfort === 'some') {
        $('#morocco').show();
        $('#barcelona').hide();
        $('#holbox').hide();
        $('#quiz').hide();
      }

      if (food === 'spanish' && activity === 'museum' && outin === 'in' && group === 'alone' && comfort === 'comfortable') {
        $('#barcelona').show();
        $('#morocco').hide();
        $('#holbox').hide();
        $('#quiz').hide();
      } 

  });
});
