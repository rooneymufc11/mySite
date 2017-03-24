console.log("connected!");

// var box = document.querySelector("#trial");
// box.style.background = "url('assets/pics/evening.jpg')";
// document.body.style.backgroundImage = "url('D://mySite/assets/pics/afternoon.jpg')";


$('#content').css({
  fontSize: '12px',
  left: '200px',
  top: '100px'
});

hours = (new Date($.now()).getHours());
console.log(hours);

if (hours > 4 && hours < 12){
var imageUrl = 'assets/pics/Opt-morning1.jpg';
	$('.bg-image').css('background-image', `url(${imageUrl})`);
	$('h1').text('Good Morning!');
	$('#greeting').text('Good Morning');

}

else if (hours > 11 && hours < 16){
var imageUrl = 'assets/pics/Opt-afternoon1.jpg';
	$('.bg-image').css('background-image', `url(${imageUrl})`);
	$('#greeting').text('Good afternoon!');
}

else if (hours > 15 && hours < 20){
var imageUrl = 'assets/pics/Opt-evening1.jpg';
	$('.bg-image').css('background-image', `url(${imageUrl})`);
	$('#greeting').text('Good Evening!');
}

else {
var imageUrl = 'assets/pics/Opt-night1.jpg';
	$('.bg-image').css('background-image', `url(${imageUrl})`);
	$('#greeting').text('Good Evening!');
};

$(".dropdownp").fadeOut();

$("#Taek").on("click", function(){
	$("p#Taek").fadeToggle();
});

$("#Cricket").on("click", function(){
	$("p#Cricket").fadeToggle();
});

$("#Football").on("click", function(){
	$("p#Football").fadeToggle();
});

$("#Dance").on("click", function(){
	$("p#Dance").fadeToggle();
});

$("#Languages").on("click", function(){
	$("p#Languages").fadeToggle();
});

$("#Cooking").on("click", function(){
	$("p#Cooking").fadeToggle();
});