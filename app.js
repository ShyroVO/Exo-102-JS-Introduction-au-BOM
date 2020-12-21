let fenetre;

document.getElementById('boutonTruc').addEventListener('click', function (){
    fenetre = window.open('https://bing.com', '');
    fenetre.resizeTo(200, 200);
    fenetre.moveTo(100, 100);
})

document.getElementById('boutonClose').addEventListener('click', function (){
    fenetre.close();
})