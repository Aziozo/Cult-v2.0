art = $('title').text();
if (art == "Культурна Агенція") {
    art = "Головна"
}
else{
    $(".current-page").append(' <h1 class="current-h1">'+art+'</h1>');
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
    $('footer').css('margin-top','0px')
}

let button = $('#email-send')
const settings = {
    async: true,
    crossDomain: true,
    url: 'https://esputnik.com/api/v1/contact/subscribe',
    method: 'POST',
    headers: {
        accept: 'application/json; charset=UTF-8',
        'content-type': 'application/json',
        authorization: 'Basic MkE4RDU3MTcwNTRFOEQ5QUJCRjY5QTM2MjcwQzY3Q0Y6MkE4RDU3MTcwNTRFOEQ5QUJCRjY5QTM2MjcwQzY3Q0Y='
    },
    processData: false,
    data: '{"contact":{"channels":[{"type":"email","value":"default"}]}}'
};

var newdata = $('#email')
$('#form-email').submit(function(){
event.preventDefault();

let varer = { contact: { channels: [{ type: 'email', value: 'test@mail.com' }] } }
let supone = {
    type: 'email', 
    value: 'test@mail.com'
    }
supone.value = newdata.val()
varer.contact.channels[0] = supone
settings.data = JSON.stringify(varer)
$.ajax(settings).done(function (response) {
        console.log(response);
    });

$('.checkbox').css('display', 'none')
$('#form-email').css('display', 'none')
$('.form-email__submited').css('display', 'flex')
})

$('.contact-form').submit(function (e) {
    e.preventDefault();
    $('.contact-form').css("display","none")
    $('.modal-container>h1').replaceWith( "<h1>Ваш запит було відправленно!</h1>" );
    $('.modal-container>p').replaceWith( "<p>Ми дуже шануємо ваше повідомлення, та відповімо вам як тільки його побачимо!</p>" );
    $('.modal-container').addClass('sended')
});
