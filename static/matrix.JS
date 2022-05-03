var solution = ["3-1", "3-2", "3-3"];

function cell_clicked(elem) {
    console.log("cell_clicked : " + $(elem).attr("id"));
    switch_selection($(elem));
    check_solution();
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
}