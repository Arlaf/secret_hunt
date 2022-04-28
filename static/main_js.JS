(function() {
    var mousePos;

    document.onmousemove = handleMouseMove;
    setInterval(getMousePosition, 5); // setInterval repeats every X ms

    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }

        mousePos = {
            x: event.pageX,
            y: event.pageY
        };
    }

    function getMousePosition() {
        var pos = mousePos;
        if (!pos) {
            // We haven't seen any movement yet
        }
        else {
            // Use pos.x and pos.y
            var X = document.getElementById("X");
            var Y = document.getElementById("Y");
            X.innerHTML = "X = " + pos.x;
            Y.innerHTML = "Y = " + pos.y;

            if (IsOverElem(mousePos, document.getElementById("btn_top"))) {
                move(document.getElementById("btn_validate"), 50, "down");
            } else if (IsOverElem(mousePos, document.getElementById("btn_bot"))) {
                move(document.getElementById("btn_validate"), 50, "up");
            } else if (IsOverElem(mousePos, document.getElementById("btn_left"))) {
                move(document.getElementById("btn_validate"), 50, "right");
            }  else if (IsOverElem(mousePos, document.getElementById("btn_right"))) {
                move(document.getElementById("btn_validate"), 50, "left");
            }
        }
    }
})();

function test() {
    alert("Argh!");
}

function move(element, step, direction) {
    if (direction == "down") {
        var old_top = element.getBoundingClientRect().top;
        var new_top = old_top + step;
        element.style.top = new_top + "px";
    } else if (direction == "up") {
        var old_top = element.getBoundingClientRect().top;
        var new_top = old_top - step;
        element.style.top = new_top + "px";
    } else if (direction == "right") {
        var old_left = element.getBoundingClientRect().left;
        var new_left = old_left + step;
        element.style.left = new_left + "px";
    } else if (direction == "left") {
        var old_left = element.getBoundingClientRect().left;
        var new_left = old_left - step;
        element.style.left = new_left + "px";
    }

}

function IsOverElem(mousePos, element) {
    var range = element.getBoundingClientRect()
    return (mousePos.x >= range.left) && (mousePos.x <= range.right) && (mousePos.y >= range.top) && (mousePos.y <= range.bottom)
}