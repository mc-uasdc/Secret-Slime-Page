$(".release").click(function() {
    $(".ending").fadeOut();
    $(".slimy").fadeIn();
    $(".release").fadeOut();
    $(".clean").fadeIn();
    $(".enter").text("Cool! He got slimed! You can clean him up and do the process again, or choose another person to get slimed!");
});
$(".clean").click(function() {
    $(".ending").fadeIn();
    $(".slimy").fadeOut();
    $(".release").fadeIn();
    $(".clean").fadeOut();
    $(".enter").text("Wanna offer a sliming on this guy above? Just click the button below!");
});
$(".more").click(function() {
    $(".christopher").fadeIn();
    $(".release2").fadeIn();
    $(".enter2").fadeIn();
    $(".chrisramirez").fadeIn();
    $(".release3").fadeIn();
    $(".enter3").fadeIn();
    $(".more").fadeOut();
});
$(".release2").click(function() {
    $(".christopher").fadeOut();
    $(".chrisslime").fadeIn();
    $(".release2").fadeOut();
    $(".clean2").fadeIn();
    $(".enter2").text("Cool! He got slimed! You can clean him up and do the process again, or choose another person to get slimed!");
});
$(".clean2").click(function() {
    $(".christopher").fadeIn();
    $(".chrisslime").fadeOut();
    $(".release2").fadeIn();
    $(".clean2").fadeOut();
    $(".enter2").text("Wanna offer a sliming on this guy above? Just click the button below!");
});
$(".release3").click(function() {
    $(".chrisramirez").fadeOut();
    $(".chrisslime2").fadeIn();
    $(".release3").fadeOut();
    $(".clean3").fadeIn();
    $(".enter3").text("Cool! He got slimed! You can clean him up and do the process again, or choose another person to get slimed!");
});
$(".clean3").click(function() {
    $(".chrisramirez").fadeIn();
    $(".chrisslime2").fadeOut();
    $(".release3").fadeIn();
    $(".clean3").fadeOut();
    $(".enter3").text("Wanna offer a sliming on this guy above? Just click the button below!");
});

$(".buy").click(function() {
    $(".buy").fadeOut();
    $(".enter4").fadeIn("Would you like to buy with real cash to slime more and more people?");
    $(".cash").fadeIn();
});
$(".cash").click(function() {
alert('Unfortunately, an error has occurred...OH BARNACLES! D:                 ERROR CODE: unknown error code');
    $(".wait").fadeIn("Loading...");
    $(".cash").fadeOut();
});
let moneyItems = ["More people to slime", "More options", "See the number of times you slimed someone", "AND MORE!!! :D"];
$(".buy").click(function() {
for(let prize of moneyItems){
    $("body").append(`<li> ${prize} </li>`);
      moneyItems = prize.length;
}
});