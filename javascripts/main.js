$(document).ready(function() {
    var generatedTickets = "";

    $.each(numbers, function( index, value ) {
      console.log(JSON.stringify(numbers[index])+"|"+numbers[index].wb1)
      //generatedTickets+='<h1>IMAGE #"+numbers[index].tix+"</h1>';
      generatedTickets+='<div class="clear">';
      generatedTickets+='<div class="lott-numbers">';
      generatedTickets+='<input type="number" value="'+("0" + numbers[index].wb1).slice (-2)+'" disabled/>'
      generatedTickets+='<input type="number" value="'+("0" + numbers[index].wb2).slice (-2)+'" disabled/>'
      generatedTickets+='<input type="number" value="'+("0" + numbers[index].wb3).slice (-2)+'" disabled/>'
      generatedTickets+='<input type="number" value="'+("0" + numbers[index].wb4).slice (-2)+'" disabled/>'
      generatedTickets+='<input type="number" value="'+("0" + numbers[index].wb5).slice (-2)+'" disabled/>'
      generatedTickets+='<input type="number" value="'+("0" + numbers[index].pb).slice (-2)+'" disabled/>'
      generatedTickets+='</div>';
      generatedTickets+='</div>';
    });
    $('#tickets').html(generatedTickets);
});
