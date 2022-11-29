var solution = ["1-6", "2-1", "4-7", "5-3", "5-5", "6-2", "7-4"];
// p = 22140217092320

// SOLUTION TEST :
//var solution = ["1-2","1-3","1-4","1-5","1-6","1-7","2-1","2-2","2-3","2-4","2-5","2-6","2-7","3-1","3-2","3-3","3-4","3-5","3-6","3-7","4-1","4-2","4-3","4-4","4-5","4-6","4-7","5-1","5-2","5-3","5-4","5-5","5-6","5-7","6-1","6-2","6-3","6-4","6-5","6-6","6-7","7-1","7-2","7-3","7-4","7-5","7-6","7-7"];


function cell_clicked(elem) {
    console.log("cell_clicked : " + $(elem).attr("id"));
    switch_selection($(elem));
    if (check_solution()) {
        document.getElementById("clue_link").style.display = "block";
        alert("Bravo ! Cliquez sur le bouton qui vient d'apparaître ce-dessous :)")
    }
}

function switch_selection(elem) {
    if ($(elem).hasClass("cell-selected")) {
        $(elem).removeClass("cell-selected");
    } else {
        $(elem).addClass("cell-selected");
    }
}

function check_solution() {
    var current_guess = [];
    var result = false;
    $(".cell:not(.cell-selected)").each(function(){ current_guess.push(this.id); });
    console.log(current_guess);
    if (current_guess.length == solution.length){
        result = current_guess.every(function(id) { return solution.includes(id) });
    }
    console.log(result);
    return result;
}

