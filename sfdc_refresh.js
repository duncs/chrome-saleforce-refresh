window.onload = function () { 
    var incidents = document.querySelector('[title="Incidents"]');

    function my_refresh() {
        incidents.click();

        console.log("REFRESH! - " + Date());
    }

	my_refresh();

	setInterval(function() { my_refresh() }, 3600000);
}
