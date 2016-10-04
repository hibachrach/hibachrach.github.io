window.onload = function() {
	var count = $("#vertList li").length;
	var i = 0;
	var dist = -1 * $("#vertList li").outerHeight(true);
	console.log(dist);
	window.setInterval(function() {
		if (i < count-1) {
			$("#vertList").transition({y: `+=${dist}px`});
			i += 1
		} else {
			$("#vertList").transition({y: "0"});
			i = 0;
		}
	}, 4000);
};
