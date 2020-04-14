function randomColor() {
    var colors = ['#fefde6', '#e53935', '#D81B60', '#8E24AA', '#5E35B1', '#1E88E5', '#039BE5', '#00ACC1', '#00897B', '#43A047', '#7CB342', '#C0CA33', '#FDD835', '#FFB300', '#FB8C00', '#F4511E', '#546E7A'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function loadcolor() {
    setInterval(function () {
        $('body').each(function () {
            $(this).css('background-color', randomColor);
        });
    }, 1000);
}


function randRange(minNum, maxNum) {
    return Math.random() * (maxNum - minNum + 1) + minNum;
}

function createConfetti() {
    for (var i = 1; i < 50; i++) {
        //set the random number
        var dropLeft = randRange(0, 800);
        var dropTop = randRange(0, 15);
        var n1 = randRange(-15, 15);
        var n2 = randRange(-15, 15);
        var n3 = randRange(-15, 15);
        var n4 = randRange(-15, 15);
        var duration = randRange(5, 10);
        //convert to string
        var time = duration + 's';
        var path = 'M ' + dropLeft + ' ' + dropTop + ' q ' + n1 + ' ' + n2 + ' ' + n3 + ' ' + n4;
        //add svg to jquery
        var svg = document.getElementsByTagName('svg')[3];
        var conf = document.createElementNS("http://www.w3.org/2000/svg", 'path');
        conf.setAttribute("d", path);
        conf.style.stroke = "#000";
        conf.style.strokeWidth = "5px";
        conf.style.animation = "fall " + time + " infinite";
        svg.appendChild(conf);
    }
}

$(document).ready(function () {
    createConfetti();
    loadcolor();
});



