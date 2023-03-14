function calculer(){
    total = null;
    isChecked = false;
    $('.row .check input:checkbox:checked').each(function() {
        isChecked = true;
        input = `${this.name}-input`;
        total += isNaN(document.getElementById(input).value) ? 0 : Number($(this).val() * document.getElementById(input).value);
    })

    document.querySelector('output').innerText = (Math.round(total * 100) / 100).toFixed(2);

    if (!isChecked) {
        document.getElementById('error').currentTime = 0;
        document.getElementById('error').play();
        $('#display').text("Veuillez choisir au moins un élément!"); 
        $('#display').css({color: 'red'}); 
        setTimeout(function() {
            $('#display').text("Choisir les articles qui composent votre commande");
            $('#display').css({color: 'white'});
        }, 1000)
        

    } else {
        document.getElementById('success').currentTime = 0;
        document.getElementById('success').play();
        $('#display').text("Choisir les articles qui composent votre commande");
        $('#display').css({color: 'white'})
    }
}

$("#calculer").click(calculer);

window.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      calculer();
    }
});


$("input").keydown(function() {
    document.getElementById('click-tone').currentTime = 0;
    document.getElementById('click-tone').play();
});

$('#clear').click(function(){
    $('form')[0].reset();
    document.querySelector('output').innerText = "0,00";
    document.getElementById('negative').currentTime = 0;
    document.getElementById('negative').play();
});





$("input:checkbox").change(function(){
    document.getElementById('tech-select').currentTime = 0;
    document.getElementById('tech-select').play();
    
});