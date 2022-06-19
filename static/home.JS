var count_move = 0;
var escape_active = false;
var duration_lock = 300;
var valid_click_count = 0;
var help_active = false;

function mouse_trigger(area_width, area_height) {
    $(".left_trigger").mouseenter(function(event) {event.stopImmediatePropagation(); move($(".moving_block"), "right", area_width, area_height)});
    $(".left_trigger").mouseleave(function() {stop_move()});
    $(".right_trigger").mouseenter(function(event) {event.stopImmediatePropagation(); move($(".moving_block"), "left", area_width, area_height)});
    $(".right_trigger").mouseleave(function() {stop_move()});
    $(".up_trigger").mouseenter(function(event) {event.stopImmediatePropagation(); move($(".moving_block"), "down", area_width, area_height)});
    $(".up_trigger").mouseleave(function() {stop_move()});
    $(".down_trigger").mouseenter(function(event) {event.stopImmediatePropagation(); move($(".moving_block"), "up", area_width, area_height)});
    $(".down_trigger").mouseleave(function() {stop_move()});
}

function submit() {
    if (!check_pass()){
        alert("Faux");
    } else {
        valid_click_count += 1;
        if (valid_click_count == 1){
            document.getElementById("input_pwd").disabled = true;
            escape_active = true;
            alert("Le mot de passe est bon, recliquez sur le bouton");
        } else {
            alert("Bravo ! C'est maintenant l'heure de la matrice !");
            document.getElementById("matrix_link").style.display = "block";
        }
    }
}

function lock() {
    // On empêche le bouton de bouger et on lui met des bordures comme indicateur visuel
    $(".moving_block").addClass("locked");
    $(".submit_btn").addClass("borders");
    // Au bout d'une certaine durée on rétablit la normale
    setTimeout(function() {
        $(".moving_block").removeClass("locked");
        $(".submit_btn").removeClass("borders");
    }, duration_lock);
}

function get_help(){
    if (!help_active) {
        help_active = true;
        document.getElementById("lock_btn").style.display = "block";
    } else {
        duration_lock += 100;
    }
    document.getElementById("lock_btn").innerHTML = "Verrouiller pendant " + duration_lock / 1000 + " seconde(s)";
}

function check_pass(){
    pwd_inputed = document.getElementById("input_pwd").value;
    return pwd_inputed.toUpperCase().trim() == "BEDEL";
}

function move(elem, direction, max_x, max_y) {
    console.log(elem);
    if (escape_active && !elem[0].classList.contains("locked")){
        $(".move_area").addClass("move_area_visible");

        // Constantes
        const step = 30;
        const margin = 30;
        const h = 30;
        const w = 70;

        // Coordonnées initiales de la grande zone
        var x = elem.position().left;
        var y = elem.position().top;

        // Modification des coordonnées
        if (direction == "left") {
            x = x - step;
        } else if (direction == "right") {
            x = x + step;
        } else if (direction == "up") {
            y = y - step;
        } else if (direction == "down") {
            y = y + step;
        }

        // Coordonnées finales du sous-élement
        var sub_x1 = x + margin;
        var sub_x2 = sub_x1 + w;
        var sub_y1 = y + margin;
        var sub_y2 = sub_y1 + h;
        console.log("move : " + direction + " " + max_x + " " + max_y);
        console.log("sub_x1 : " + sub_x1);

        // Téléportation de l'autre côté de la zone si la zone est dépassée
        if (sub_x1 < 0){
            x = max_x - margin - w;
        } else if (sub_x2 > max_x){
            x = -1 * margin;
        }
        if (sub_y1 < 0){
            y = max_y - h - margin;
        } else if (sub_y2 > max_y){
            y = -1 * margin;
        }

        // On déplace la grande zone
        elem.css({'top': y+'px', 'left': x+'px'});

        // On met à jour le compteur
        count_move += 1;
        document.getElementById("display_move_count").innerHTML = count_move;

        // Au bout d'un moment on aide l'utilisateur
        if (!help_active && count_move >= 10) {
            get_help();
        } else if (help_active && count_move % 5 == 0) {
            get_help();
        }
    }
}

function stop_move() {
    console.log("stop_move");
    setTimeout(function() {$(".move_area").removeClass("move_area_visible")}, 1000);
}
