$(document).ready(function() {
    //j'ai laisser le console log ready pour bien montré que le fichier se charge quand je lance le site
    console.log('ready');

    //j'ai ajouter cette ligne pour enlever la class active present dans le bouton du tabs mais vue que j'ai mis active dans le lien et pas dans le button ba il me le mettait deux fois
    $(".tab.col.s3.active").removeClass("active");
    //j'ai rajouter une class no-active pour empecher le button rose avec le plus d'avoir une bordure orange en bas ducoup je l'ai elever manuelement
    $(".fixed-action-btn.active").addClass("no-active");
    //les 4 prochaines ligne sont la pour cacher les element de la list afficher par le button rose 
    $('.btn-floating.red').css("display", "none");
    $('.btn-floating.green').css("display", "none");
    $('.btn-floating.blue').css("display", "none");
    $('.btn-floating.yellow').css("display", "none");
    //les deux lignes apres sont la pour cacher les textes 2 et 3 qui etait afficher de base dans tabs
    $("#test2").css("display", "none");
    $("#test3").css("display", "none");
    //j'ai rajouter un petit console log pour voir que tout les changements se sont bien passer
    console.log('all css have change');

    //la fonction suivante est la pour afficher le menu a droite lorsque l'on click sur le button, je met un console log pour voir qu'il a bien recu le click
    //ensuite j'utilise animate pour deplacer le menu de gauche a droite, j'ai ensuite pris une fonction sur internet pour savoir quand l'utilisateur click sur autre chose
    //que sur le menu qui viens d'etre ouvert pour savoir quand fermer le menu. j'ajouter un console log pour montrer que le menu se ferme et utilise la meme fontion qu'au
    //debut pour retourner le menu a droite.
    $(".button-collapse").click(function() {
        console.log('menu open');
        $("#mobile-nav").animate({
            left: "0%",
        }, 500, function() {
            $(document).mouseup(function (e) {
                var container = $("#mobile-nav");
                if (container.has(e.target).length === 0) {
                    console.log('menu close');
                    $("#mobile-nav").animate({
                        left: "-105%",
                    }, 500, function() {})
                }
            })
        });
    });

    //j'ai reutiliser la meme methode pour la sorte de menu qui viens du bas quand on click sur le modal bottom sheet style.
    $(".modal-trigger").click(function() {
        console.log('modal open');
        $(".bottom-sheet").animate({
            bottom: "0%",
        }, 500, function() {
            $(document).mouseup(function (e) {
                var container = $(".bottom-sheet");
                if (container.has(e.target).length === 0) {
                    console.log('modal close');
                    $(".bottom-sheet").animate({
                        bottom: "-100%",
                    }, 500, function() {})
                }
            });
        });
    });

    //pour afficher la list en bas a droite j'ai juste modifier la class de celle ci en y ajoutant un display block ce qui a permis de les afficher
    //j'ai rajouter un console log pour check que tout c'est bien passer
    $('.fixed-action-btn').hover(function() {
        $('.btn-floating.red').toggleClass("list_open");
        $('.btn-floating.green').toggleClass("list_open");
        $('.btn-floating.blue').toggleClass("list_open");
        $('.btn-floating.yellow').toggleClass("list_open");
        console.log('list appaired');
     });

    //cette fonction est faite pour le collapsible, j'ai donc commencer par recuperer le click sur le boutton first second third 
    // avec ce click je garde les characteres 18 a 24 pour savoir si j'ai rajouter la class -open au bout de la class de base
    // si c'est le cas j'enleve la class avec -open, je fait de meme pour le body qui est le lorem ipsum a afficher 
    // j'ai ajouter des consoles log pour voir que tout ce passe bien
    // quand on rentre dans le else ont doit alors ajouter la class -open pour le body et le header.
    // j'ai pas encore fait en sorte que quand on click sur une autre div ca l'ouvre en ferment l'autre mais j'ai pas eu le temps
     $(".collapsible-header").click(function() {
    },function(event) {
    if ($(event.target).attr('class').substr(18, 24)) {   
        console.log('reclick on collapse header');
        $(event.target).removeClass("collapsible-header-open");
        console.log('remove class with -open at header');
        $('.collapsible-header + .collapsible-body-open').removeClass("collapsible-body-open");
        console.log('remove class with -open at body');
    }
    else {
        console.log('click on collapse header');
        console.log('check if class have -open');
        $(event.target).addClass("collapsible-header-open");
        console.log('adding class with -open at header');
        $('.collapsible-header-open + .collapsible-body').addClass("collapsible-body-open");    
        console.log('adding class with -open at body');
    }
    });

    //cette fonction est crée pour les tabs
    //elle commence par recuperer le click effectuer sur une des tabs, enssuite j'ai utiliser des if car en recuperent le 5 eme charactere du href du button 
    //on peut determiner lequel des tabs a etait clicker, on peut alors ajouter active au button clicker et enlever la meme class au deux autres
    //on affiche aussi le texte en dessus et cache le texte des deux autres. 
    //comme toujours je met des consoles log pour afficher en console que tout c'est bien passer.
    $(".tab.col.s3").click(function() {
    },function(event) {
        console.log('click on tabs button');
        console.log('check what is number of tabs');
    if ($(event.target).attr('href').substr(5) == 1) {
        console.log("it's first tabs");
        console.log("change class of tabs click for adding active");
        $(event.target).addClass("active");
        $("li.tab.col.s3:nth-child(2) a").removeClass("active");
        $("li.tab.col.s3:nth-child(3) a").removeClass("active");
        console.log("change css for display first tabs and hidden other");
        $("#test1").css("display", "block");
        $("#test2").css("display", "none");
        $("#test3").css("display", "none");
    }
    if ($(event.target).attr('href').substr(5) == 2) {
        console.log("it's second tabs");
        console.log("change class of tabs click for adding active");
        $(event.target).addClass("active");
        $("li.tab.col.s3:nth-child(1) a").removeClass("active");
        $("li.tab.col.s3:nth-child(3) a").removeClass("active");
        console.log("change css for display second tabs and hidden other");
        $("#test2").css("display", "block");
        $("#test3").css("display", "none");
        $("#test1").css("display", "none");
    }
    if ($(event.target).attr('href').substr(5) == 3) {
        console.log("it's third tabs");
        console.log("change class of tabs click for adding active");
        $(event.target).addClass("active");
        $("li.tab.col.s3:nth-child(1) a").removeClass("active");
        $("li.tab.col.s3:nth-child(2) a").removeClass("active");
        console.log("change css for display third tabs and hidden other");
        $("#test3").css("display", "block");
        $("#test1").css("display", "none");
        $("#test2").css("display", "none");
    }
    })
    //fin du check pour savoir si le document est ready.
});