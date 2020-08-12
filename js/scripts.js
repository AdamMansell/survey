$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const nameInput = $("input#name").val();
    const foodInput = $("input#food").val();
    const musicInput = $("input:radio[name=music]:checked").val();
    const dobInput = $("#dob").val();
    const colorInput = $("#color").val();


    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".dob").text(dobInput);
    $(".color").text(colorInput);


    $("#output").show();

    event.preventDefault();
  });
});