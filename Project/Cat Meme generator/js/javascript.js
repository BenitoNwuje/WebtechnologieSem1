function update_text(){
    let user_text = document.getElementById("user_text");
    let meme_text = document.getElementById("meme_text");
    meme_text.innerHTML = user_text.value;
}

function update_image(){
    let img = document.querySelector('img');
    //deze variable selecteer de erste img tag in het document zo dat
    //wij kunnen zeggen waar de het selecteerde foto kan geplaast worden in onze pagina
    let file = document.querySelector('input[type=file]').files[0];
    //deze variable right zich op de kat foto bestand
    img.src = window.URL.createObjectURL(file);
    //deze zegt dat onze img tag moet onze gekozen foto bevaten. 

}

