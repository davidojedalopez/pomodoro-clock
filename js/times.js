var $ = require("jquery");

var times = (function(){

	console.log("TIMES MODULE");

	// cache DOM
	var $timeSection = $('.time-lengths');

	var $breakMinusButton = $timeSection.find('.break-minus-button');
	var $breakPlusButton = $timeSection.find('.break-plus-button');
	var $breakTime = $timeSection.find('.break-length-value');

	var $workMinusButton = $timeSection.find('.work-minus-button');
	var $workPlusButton = $timeSection.find('.work-plus-button');
	var $workTime = $timeSection.find('.work-length-value');

	// bind events
	$breakMinusButton.on('click', changeTime('break', '-'));
	$breakPlusButton.on('click', changeTime('break', "+"));

	$workMinusButton.on('click', changeTime('work', '-'));
	$workPlusButtona.on('click', changeTime('work', '+'));

	_render();

	function _render() {

	}

	function changeTime(timeType, plusOrMinus){
		if(timeType == 'work'){
			switch(plusOrMinus){
				case '+':
					workTime.html((parseInt(workTime.html()) + 1)).toString();
				case '-':
					workTime.html((parseInt(workTime.html()) - 1)).toString();
			}
		}
		else{
			switch(plusOrMinus){
				case '+':
					breakTime.html((parseInt(breakTime.html()) + 1)).toString();
				case '-':
					breakTime.html((parseInt(breakTime.html()) - 1)).toString();
			}
		}
	}


})();



/*
var people = (function(){
    var people = ['Will', 'Steve'];

    //cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    _render();

    function _render() {
       $ul.html(Mustache.render(template, {people: people}));
    }

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        _render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        _render();
    }

    return {
        addPerson: addPerson,
        deletePerson: deletePerson
    };

})();
*/