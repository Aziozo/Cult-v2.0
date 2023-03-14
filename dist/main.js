art = $('title').text();
console.log(art);
if (art = "Культурна Агенція") {
    art = "Головна"
}
$(".current").append(' <h1 class="current-h1">'+art+'</h1>')