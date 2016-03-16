var Result=function(choice1,choice2){
	if(choice1===choice2){
		$('.tie').fadeIn(333);
	}

     else if(choice1==="rock"){
         if(choice2==="scissors"){
					 $('.rw').fadeIn(333);
				 }
          else{
						$('.pw').fadeIn(333);
					}
     }
    else if(choice1==="paper"){
         if(choice2==="rock"){
					 $('.pw').fadeIn(333);
				 }
          else{
						$('.sw').fadeIn(333);

					}
     }
		 else{

			 if(choice2==="rock"){
				 $('.rw').fadeIn(333);
			 }
				else{
					$('.sw').fadeIn(333);

				}
		 }

}

var show=function(choice){
	if( choice==="rock"){
		$(".r3").fadeIn();
	}
	else if(choice==="paper"){
		$(".p3").fadeIn();
	}
	else{
		$(".s").fadeIn();
	}
	$(".Cchoice").show();
}




jQuery(document).ready(function() {
	var score = -1;
	var userChoice;
	var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);



	$('.r').fadeIn(333);
	$('.p').fadeIn(333);
	$('.s').fadeIn(333);
  $('.r').click(function(event) {
		userChoice="rock";
		$('.p').fadeOut(333);
		$('.s').fadeOut(333);
		$('.Ychoice').show();

		show(computerChoice);
		Result(userChoice,computerChoice);
	});
	$('.p').click(function(event) {
		userChoice="paper";
		$('.p').fadeOut(333);
		$('.r').fadeOut(333);
		$('.s').fadeOut(333);
		$('.p1').fadeIn(333).show();
		$('.Ychoice').show();
		show(computerChoice);

		Result(userChoice,computerChoice);
	});

	$('.s').click(function(event) {
		userChoice="scissors";
		$('.p').fadeOut(333);
		$('.r').fadeOut(333);
		$('.s').fadeOut(333);
		$('.s1').fadeIn(333).show();
		$('.Ychoice').show();
		show(computerChoice);

		Result(userChoice,computerChoice);
	});
}
);
