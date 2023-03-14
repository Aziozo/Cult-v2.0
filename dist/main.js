art = $('title').text();
console.log(art);
if (art == "Культурна Агенція") {
    
}
else{
    console.log('else');
    $(".current").append(' <h1 class="current-h1">'+art+'</h1>');
}




checkBox = document.getElementById('checkbox__toggle').addEventListener('click', event => {
	if(event.target.checked) {
		$('body').css('overflow-y','hidden');
		$('html').css('overflow-y','hidden');
        console.log("hidden");
	}
    else{
        $('body').css('overflow-y','auto');
		$('html').css('overflow-y','auto');
        console.log("auto");
    }
});