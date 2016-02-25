var $ = require("jquery");

var times = (function(){

	// cache DOM
	var $timeSection = $(".time-lengths");

	var $breakMinusButton = $timeSection.find(".break-minus-button");
	var $breakPlusButton = $timeSection.find(".break-plus-button");
	var $breakTime = $timeSection.find(".break-length-value");

	var $workMinusButton = $timeSection.find(".work-minus-button");
	var $workPlusButton = $timeSection.find(".work-plus-button");
	var $workTime = $timeSection.find(".work-length-value");

	// bind events
	$breakMinusButton.on("click",
						{timeType: "break", plusOrMinus: "-"},
						changeTime);
	$breakPlusButton.on("click",
						{timeType: "break", plusOrMinus: "+"},
						changeTime);

	$workMinusButton.on("click",
						{timeType: "work", plusOrMinus: "-"},
						changeTime);
	$workPlusButton.on("click",
						{timeType: "work", plusOrMinus: "+"},
						changeTime);

	function changeTime(event){
		var timeType = event.data.timeType;
		var plusOrMinus = event.data.plusOrMinus;

		if(timeType == "work"){
			var workTimeValue = parseInt($workTime.html());
			if(!(workTimeValue == 0 && plusOrMinus == "-"))
				$workTime.html(eval($workTime.html() + plusOrMinus + "1").toString());
		}
		else{
			var breakTimeValue = parseInt($breakTime.html());
			if(!(breakTimeValue == 0 && plusOrMinus == "-"))
				$breakTime.html(eval($breakTime.html() + plusOrMinus + "1").toString());
		}
	}

})();
