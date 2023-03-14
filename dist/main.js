art = $('title').text();
if (art == "Культурна Агенція") {
    art = "Головна"
}
else{
    $(".current").append(' <h1 class="current-h1">'+art+'</h1>');
}

checkBox = document.getElementById('checkbox__toggle').addEventListener('click', event => {
	if(event.target.checked) {
		$('body').css('overflow-y','hidden');
		$('html').css('overflow-y','hidden');
	}
    else{
        $('body').css('overflow-y','auto');
		$('html').css('overflow-y','auto');    
    }
});


$('.menu-list').find('li a').each(function() {
    if($(this).attr('href')==$(location).attr('href')
    ||($(this).attr('href')==$(location).attr('pathname'))){
        $(this).addClass("current-a");
    }
});

if ($(location).attr('pathname')=='/partners.html'){
    console.log('true');
    $('footer').css('margin-top','0px')
}

