$(document).ready(function() {
    var generatedTickets = "";

    $.each(numbers, function( index, value ) {
      console.log(JSON.stringify(numbers[index])+"|"+numbers[index].wb1)
      //generatedTickets+='<h1>IMAGE #"+numbers[index].tix+"</h1>';
      generatedTickets+='<div class="clear">';
      generatedTickets+='<div class="lott-numbers">';
      generatedTickets+='<input type="number" value="'+numbers[index].wb1+'" disabled/>'
      generatedTickets+='<input type="number" value="'+numbers[index].wb2+'" disabled/>'
      generatedTickets+='<input type="number" value="'+numbers[index].wb3+'" disabled/>'
      generatedTickets+='<input type="number" value="'+numbers[index].wb4+'" disabled/>'
      generatedTickets+='<input type="number" value="'+numbers[index].wb5+'" disabled/>'
      generatedTickets+='<input type="number" value="'+numbers[index].pb+'" disabled/>'
      generatedTickets+='</div>';
      generatedTickets+='</div>';
    });
    $('#tickets').html(generatedTickets);
});
