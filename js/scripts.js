$(document).ready(function(){

  //select and do
  $("#terms").submit(function(event){
    event.preventDefault();
    var nameInput = $("input#name").val();
    var adjInput = $("input#adjective").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    //select and do

    $(".name").text(nameInput);
    $(".adjective").text(adjInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();





  });
});
