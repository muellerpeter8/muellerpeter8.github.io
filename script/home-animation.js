window.onload = function () {
    const scrollTextCon = document.getElementById('scrollingTextCon'),
        instructions = document.getElementById('instructions'),
        // line1 = document.getElementById('line1'),
        // line2 = document.getElementById('line2'),
        // line3 = document.getElementById('line3'),
        // line4 = document.getElementById('line4'),
        // line5 = document.getElementById('line5'),
        // line6 = document.getElementById('line6'),
        otherLines = document.querySelectorAll('.otherLines');
    const w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        screenWidth = w.innerWidth||e.clientWidth||g.clientWidth,
        screenHeight = w.innerHeight||e.clientHeight||g.clientHeight,
        body = d.body,
        html = d.documentElement,
        docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                html.clientHeight, html.scrollHeight, html.offsetHeight ),
        pageMiddle = screenHeight/2;
    // console.log(pageMiddle);
    
    const setTheStage = () => {
        scrollTextCon.style.top = pageMiddle + "px";
        otherLines.forEach(otherLine => {
            otherLine.style.opacity = "0";
            otherLine.style.visibility = "hidden";
        })
    }
    setTheStage();

    window.onscroll = event => {
        if (instructions.getBoundingClientRect().top < pageMiddle + 10 && instructions.getBoundingClientRect().top > pageMiddle - 100) {
            instructions.style.opacity = "1";
        } else {
            instructions.style.opacity = "0";
        }
        otherLines.forEach(line => {
            if (line.getBoundingClientRect().top < pageMiddle && line.getBoundingClientRect().top > pageMiddle - 100) {
                line.style.opacity = "1";
                line.style.visibility = "visible";
            } else {
                line.style.opacity = "0";
            }
        })
        // console.log(instructions.getBoundingClientRect().top);
    }
}