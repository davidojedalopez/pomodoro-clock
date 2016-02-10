function startPomodoro(){
	var heading = $('div.pour').clone().removeClass();
    $('div.pour').remove();
    $('div.banner').append(heading);
    heading.addClass('pour');

	var heading = $('div.fill').clone().removeClass();
    $('div.fill').remove();
    $('div.banner').append(heading);
    heading.addClass('fill');
}