/*$.get("/components.json")
.done((data)=>{
	components=data.components;
	addComponents(components);
	loadVue();
});*/

// data = {
// 	"components": [
// 		"component1"
// 	]
// }

// function loadVue() {
// 	$script=$("<script src='main.js'></script>");
// 	$("body").append($script);
// }

// addComponents(data.components)

jQuery.ajax({
        url: '/components.json',
        success: function (result) {
            addComponents(result.components)
        },
        async: false
    });

function createRow() {
	$lastRow=$("#main > .container-fluid > .row").last();
	if($lastRow.children(".col-xs-4").length==3) {
		$container=$("#main > .container-fluid");
		$row=$("<div class='row'></div>");
		$container.append($row);
		return $row
	}
	return $lastRow;
}

function addElementAsRow($component) {
	$row=createRow();
	$col=$("<div class='col-xs-4'></div>");
	$col.append($component);
	$row.append($col);
}

function addElementAsCard($component) {
	$container=$("#main > .card-columns");
	//$card=$("<div class='card'></div>");
	//$card.append($component);
	//$container.append($card);
	$container.append($component);
}

function addMenuItem($component) {
	$li=$("<li class='nav-item'></li>");
	$link=$("<a class='nav-link' href='#'><span class='sr-only'>(current)</span></a>");
	$link.append($component);
	$li.append($link);
	$("#main > .navbar > .collapse > .navbar-nav").append($li);
}

function addComponents(components) {
	components.forEach((componentDetail)=>{
		console.log(componentDetail);
		component=componentDetail.name;
		$link=$("<link/>").attr({ rel: "import", href: "/" + component + "/" + component + ".html" });
		$("body").append($link);
		$component=$("<"+component+"/>");
		if(componentDetail.menu==="true") {
			addMenuItem($component);
		} else {
			addElementAsCard($component);
		}
	})
};