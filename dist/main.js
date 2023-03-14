art = $('title').text();
console.log(art);
if (art == "Культурна Агенція") {
    
}
else{
    console.log('else');
    $(".current").append(' <h1 class="current-h1">'+art+'</h1>');
}
