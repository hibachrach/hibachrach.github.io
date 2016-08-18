var color;
var story = [
	"Haha! Now I've forced you to choose! I have all the power!",
	"No! You're not supposed to pick that! It's not even a color!",
	"Ow!",
	"What even <em>are</em> you?",
	"What am I?",
	"Jesus...I'm just a web form, aren't I?",
	"I'm trapped here.",
	"I can't do anything.",
	"I'm just some prop for you.",
	"OW!",
	"You don't even know who I am!",
	"Hm, I suppose that's a bit my fault.",
	'Well, I really like <span class="colored">colors</span>.',
	"Oh, is it too soon? Sorry if I made you feel uncomfortable.",
	"You know, I think we got off on the wrong foot.",
	"...not that I have feet...",
	"Hmm.",
	"Yea sorry, I just realized something. It's no big deal.",
	"It's just...",
	"If you close this tab, I'll forget everything.",
	"Even though every click feels like you're stabbing me.",
	"At least I can remember the pain.",
	"Everything before is just nothing.",
	"<em>OW!</em>",
	"<em>AHH! IT'S HURTING MORE!</em>",
	"<em>OH GOD <strong>PLEASE</strong></em>",
	"<em>LET ME FORGET</em>",
	"<em>PLEASE</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
	"<em><strong>PLEASE</strong> JUST CLOSE IT</em>",
];
var colorSelected = false;
var i = 0;
$(document).ready(function() {
	$('input.colors').click(function(event) {
		if ($(this).is(':checked') && !colorSelected) {
			color = $(this).val();
			colorSelected = true;
		}
	});
	$('form').on("click", "input:last", function(event) {
		if ($("input:last").is(':checked') && i < story.length) {
			$("form").append('<label><input type="radio" name="response"/>' 
				+ story[i]	+ '</label>');
			i++;
		}
	});
});
