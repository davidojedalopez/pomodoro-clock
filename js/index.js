var paused = false;


function startPomodoro(){

	$('.pour').removeClass('hidden');
	$('.fill').removeClass('hidden');

	var breakTime = parseInt($('.break-length-value').html());
	var workTime = parseInt($('.work-length-value').html());

	$('div.fill').css('webkit-animation-duration', workTime + "s");

	var heading = $('div.pour').clone().removeClass();
    $('div.pour').remove();
    $('div.banner').append(heading);
    heading.addClass('pour');

	var heading = $('div.fill').clone().removeClass();
    $('div.fill').remove();
    $('div.banner').append(heading);
    heading.addClass('fill');

    $('.fill').one('webkitAnimationEnd oanimationend oanimationEnd msAnimationEnd',
    	function(e) {
    		startBreakTime(breakTime);
    });

    var startButton = $('.start-button');
    startButton.addClass('hidden');

    var stopButton = $('.stop-button')
    stopButton.removeClass('hidden');
    var pauseButton = $('.pause-button');
    pauseButton.removeClass('hidden');
}

function pauseContinuePomodoro(){

	if(paused == true){
		paused = false;
		$('.pause-button').html("Pause");
		$('.fill').css('webkit-animation-play-state', "running");
		$('#waveShape').css('webkit-animation-play-state', "running");
	} else{
		paused = true;
		$('.pause-button').html("Continue");
		$('.fill').css('webkit-animation-play-state', "paused");
		$('#waveShape').css('webkit-animation-play-state', "paused");
	}


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


