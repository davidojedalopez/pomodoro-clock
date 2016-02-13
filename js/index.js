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

    var startButton = $('.start-button');
    startButton.addClass('hidden');

    var stopButton = $('.stop-button')
    stopButton.removeClass('hidden');
    var pauseButton = $('.pause-button');
    pauseButton.removeClass('hidden');
}

function pausePomodoro(){

}

function stopPomodoro(){
	$('.pour').addClass('hidden');
	$('.fill').addClass('hidden');

	$('.stop-button').addClass('hidden');
	$('.pause-button').addClass('hidden');

	$('.start-button').removeClass('hidden');

}

function addWorkMinute(){

	var workTime = parseInt($('.work-length-value').html());

	$('.work-length-value').html((workTime+1).toString());
}

function substractWorkMinute(){

	var workTime = parseInt($('.work-length-value').html());

	if(workTime > 1){
		$('.work-length-value').html((workTime-1).toString());
	}

}