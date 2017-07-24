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
	$container.append($component);
}

function addComponents(components) {
	components.forEach((component)=>{
		console.log(component);
		$link=$("<link/>").attr({rel:"import",href:"http://localhost:3000/components/"+component+".html"});
		$("body").append($link);
		$component=$("<"+component+"/>");
		addElementAsCard($component);
	})
};