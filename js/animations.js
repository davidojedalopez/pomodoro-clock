var $ = require('jquery');

var animations = (function(){

	var paused = false;

	// cache DOM
	var $pomodoroAnimation = $('.pomodoro-animation');
	var $pour = $pomodoroAnimation.find('.pour');
	var $fill = $pomodoroAnimation.find('.fill');
	var $waveShape = $pomodoroAnimation.find('#waveShape');

	var $buttons = $('.buttons');
	var $startButton = $buttons.find('.start-button');
	var $stopButton = $buttons.find('.stop-button');
	var $pauseOrContinueButton = $buttons.find('.pause-button');

	var $breakTime = $('.break-length-value');
	var $workTime = $('.work-length-value');

	// bind events
	$startButton.on('click', null, startPomodoro);
	$stopButton.on('click', null, stopPomodoro);
	$pauseOrContinueButton.on('click', null, pauseOrContinuePomodoro);

	function startPomodoro(){

		$pour.removeClass('hidden');
		$fill.removeClass('hidden');

		workTime = parseInt($workTime.html());
		$fill.css('webkit-animation-duration', workTime * 60 + "s");

		var heading = $pomodoroAnimation.find('div.pour').clone().removeClass();
	    $pomodoroAnimation.find('div.pour').remove();
	    $pomodoroAnimation.find('div.banner').append(heading);
	    heading.addClass('pour');

		var heading = $pomodoroAnimation.find('div.fill').clone().removeClass();
	   	$pomodoroAnimation.find('div.fill').remove();
	    $pomodoroAnimation.find('div.banner').append(heading);
	    heading.addClass('fill');

		$fill = $pomodoroAnimation.find('.fill');

	    $fill.css('webkit-transform', 'translateY(150px)');
	    $fill.css('webkit-animation-name', "fillAction");

	    $fill.one('webkitAnimationEnd oanimationend oanimationEnd msAnimationEnd',
	    	function(e) {
	    		breakTime = parseInt($breakTime.html());
	    		startBreakTime(breakTime);
	    });

	    $startButton.addClass('hidden');
	    $stopButton.removeClass('hidden');
	    $pauseOrContinueButton.removeClass('hidden');
	}

	function startBreakTime(breakTime){

		var heading = $pomodoroAnimation.find('div.pour').clone().removeClass();
	    $pomodoroAnimation.find('div.pour').remove();
	    $pomodoroAnimation.find('div.banner').append(heading);
	    heading.addClass('pour');
	    heading.addClass('hidden');

		var heading = $pomodoroAnimation.find('div.fill').clone().removeClass();
	    $pomodoroAnimation.find('div.fill').remove();
	    $pomodoroAnimation.find('div.banner').append(heading);
	    heading.addClass('fill');

	    $fill = $pomodoroAnimation.find('.fill');

	    $fill.css('webkit-transform', 'translateY(-5px)');
	    $fill.css('webkit-animation-duration', breakTime * 60 + "s")
	    $fill.css('webkit-animation-name', "emptyAction");

	    $fill.one('webkitAnimationEnd oanimationend oanimationEnd msAnimationEnd',
	    	function(e) {
	    		$startButton.removeClass('hidden');
	    		$pauseOrContinueButton.addClass('hidden');
	    		$stopButton.addClass('hidden');
	    });
	}

	function stopPomodoro(){
		$pour = $pomodoroAnimation.find('.pour');
		$pour.addClass('hidden');
		$fill.addClass('hidden');

		$stopButton.addClass('hidden');
		$pauseOrContinueButton.addClass('hidden');
		$startButton.removeClass('hidden');
	}

	function pauseOrContinuePomodoro(){
		$waveShape = $pomodoroAnimation.find('#waveShape');

		if(paused == true){
			paused = false;
			$pauseOrContinueButton.html("Pause");
			$fill.css('webkit-animation-play-state', "running");
			$waveShape.css('webkit-animation-play-state', "running");
		} else{
			paused = true;
			$pauseOrContinueButton.html("Continue");
			$fill.css('webkit-animation-play-state', "paused");
			$waveShape.css('webkit-animation-play-state', "paused");
		}
	}

})();