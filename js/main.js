$(document).ready(function(){

$('header button').click(function(){
   $('form').slideDown();
})

$('.cancelar').click(function(){
    $('form').slideUp();
})

$('form').on('submit', function(e){
    e.preventDefault();
    const ulrImg = $('#url-img').val();
    const newItem = $('<li style="display: none"></li>');
    
    $(`<img src="${ulrImg}" > `).appendTo(newItem);
    $(`
    <div class="overlay-img">
        <a href="${ulrImg}" target="_blank" title ="Ver imagem em tamanho real">
            Ver imagem em tamanho real
        </a>
    </div>
    `).appendTo(newItem);
    $(newItem).appendTo('ul');
    $(newItem).fadeIn(1000);
    $('#url-img').val('');

})

})