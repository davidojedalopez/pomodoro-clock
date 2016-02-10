function startPomodoro(){

	$('.pour').removeClass('hidden');
	$('.fill').removeClass('hidden');

	var breakTime = parseInt($('.break-length-value').html());
	var workTime = parseInt($('.work-length-value').html());

	$('.fill').css('webkit-animation-duration', workTime * 60 + "s");

	var heading = $('div.pour').clone().removeClass();
    $('div.pour').remove();
    $('div.banner').append(heading);
    heading.addClass('pour');

	var heading = $('div.fill').clone().removeClass();
    $('div.fill').remove();
    $('div.banner').append(heading);
    heading.addClass('fill');
}

function addWorkMinute(){

	var workTime = parseInt($('.work-length-value').html());
	console.log(workTime);

	$('.work-length-value').html((workTime+1).toString());

}

function substractWorkMinute(){

	var workTime = parseInt($('.work-length-value').html());

	if(workTime > 0){
		$('.work-length-value').html((workTime-1).toString());
	}

}