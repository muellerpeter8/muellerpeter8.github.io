

window.onload = function () {
    var halfHalfAnim = document.getElementById('halfHalfIllustCon'),
        buildEdwardAnim = document.getElementById('buildEdward'),
        buildAngelaAnim = document.getElementById('buildAngela'),
        buildKidsScrollCon = document.getElementById('buildKidsScrollCon'),
        buildKidsAnim = document.getElementById('buildKids'),
        buildGrandKidsScrollCon = document.getElementById('buildGrandKidsScrollCon'),
        buildGrandKidsAnim = document.getElementById('buildGrandKids'),
        complexDna = document.getElementById('complexDnaSctn'),
        growingFaces = document.getElementById('growingSctn'),
        greenSticky = document.getElementById('greenScrollText'),
        logoAnim = document.getElementById('ancestryBigLogo'),
        colorLogo = document.getElementById('colorLogo');

    (function() {
        window.addEventListener('scroll', function() {
            var w = window,
                d = document,
                e = d.documentElement,
                g = d.getElementsByTagName('body')[0],
                screenWidth = w.innerWidth||e.clientWidth||g.clientWidth,
                screenHeight = w.innerHeight||e.clientHeight||g.clientHeight,
                body = d.body,
                html = d.documentElement,
                docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                        html.clientHeight, html.scrollHeight, html.offsetHeight );
            var boundingHalfHalf = halfHalfAnim.getBoundingClientRect(),
                boundingBuildEdward = buildEdwardAnim.getBoundingClientRect(),
                boundingBuildAngela = buildAngelaAnim.getBoundingClientRect(),
                boundingBuildKidsScroll = buildKidsScrollCon.getBoundingClientRect(),
                boundingBuildKids = buildKidsAnim.getBoundingClientRect(),
                boundingBuildGrandKidsScroll = buildGrandKidsScrollCon.getBoundingClientRect(),
                boundingBuildGrandKids = buildGrandKidsAnim.getBoundingClientRect(),
                boundingComplexDna = complexDna.getBoundingClientRect(),
                boundingGrowingFaces = growingFaces.getBoundingClientRect(),
                facesBottom = boundingGrowingFaces.bottom - screenHeight;
        //
        // Half half DNA Animation
        //
            var my_image = new Image();
            my_image.src = 'https://www.ancestrycdn.com/mars/landing/dna/post-results/us/2019/crm-dna-post-results-day2-woman-dna-half.png';
            if (screenWidth <= 767) {
                if (boundingHalfHalf.top <= 300) {
                    halfHalfAnim.classList.add('animateGo');
                }
            } else if (screenWidth <= 910) {
                var manDnaHalf = document.querySelector('.halfHalfManDnaHalf'),
                    womanDnaHalf = document.querySelector('.halfHalfWomanDnaHalf');
                    // dnaLines = document.querySelector('.halfHalfDnaLines');
                var halfHalfDnaPos = boundingHalfHalf.top - 190;
                var removeWidth = screenWidth/2 - 157;
                if (boundingHalfHalf.top > 400) {
                    // manDnaHalf.style.display = "none";
                    // womanDnaHalf.style.display = "none";
                    // dnaLines.style.visibility = 'hidden';
                } else if (boundingHalfHalf.top <= 400 && boundingHalfHalf.top > 270) {
                    if (removeWidth < halfHalfDnaPos) {
                        // manDnaHalf.style.display = "none";
                        // womanDnaHalf.style.display = "none";
                        // dnaLines.style.visibility = 'hidden';
                    } else {
                        // manDnaHalf.style.display = "block";
                        manDnaHalf.style.left = 'calc(50% - ' + halfHalfDnaPos + 'px)';
                        // womanDnaHalf.style.display = "block";
                        womanDnaHalf.style.right = 'calc(50% - ' + halfHalfDnaPos + 'px)';
                        // womanDnaHalf.style.backgroundImage = "url('https://www.ancestrycdn.com/mars/landing/dna/post-results/us/2019/crm-dna-post-results-day2-woman-dna.png')";
                        // dnaLines.style.visibility = 'hidden';
                    }
                } else {
                    // manDnaHalf.style.display = "block";
                    manDnaHalf.style.left = 'calc(50% - 77px)';
                    // womanDnaHalf.style.display = "block";
                    womanDnaHalf.style.right = 'calc(50% - 77px)';
                    // womanDnaHalf.style.backgroundImage = "url('https://www.ancestrycdn.com/mars/landing/dna/post-results/us/2019/crm-dna-post-results-day2-woman-dna-half.png')";
                    // dnaLines.style.visibility = 'visible';
                }
            } else {
                var manDnaHalf = document.querySelector('.halfHalfManDnaHalf'),
                    womanDnaHalf = document.querySelector('.halfHalfWomanDnaHalf'),
                    dnaLines = document.querySelector('.halfHalfDnaLines');
                var halfHalfDnaPos = boundingHalfHalf.top - 200;
                if (boundingHalfHalf.top > 400) {
                    // manDnaHalf.style.display = "none";
                    // womanDnaHalf.style.display = "none";
                    // dnaLines.style.visibility = 'hidden';
                } else if (boundingHalfHalf.top <= 400 && boundingHalfHalf.top > 295) {
                    // manDnaHalf.style.display = "block";
                    manDnaHalf.style.left = 'calc(50% - ' + halfHalfDnaPos + 'px)';
                    // womanDnaHalf.style.display = "block";
                    womanDnaHalf.style.right = 'calc(50% - ' + halfHalfDnaPos + 'px)';
                    // womanDnaHalf.style.backgroundImage = "url('https://www.ancestrycdn.com/mars/landing/dna/post-results/us/2019/crm-dna-post-results-day2-woman-dna.png')";
                    // dnaLines.style.visibility = 'hidden';
                } else {
                    // manDnaHalf.style.display = "block";
                    manDnaHalf.style.left = 'calc(50% - 95px)';
                    // womanDnaHalf.style.display = "block";
                    womanDnaHalf.style.right = 'calc(50% - 95px)';
                    // womanDnaHalf.style.backgroundImage = "url('https://www.ancestrycdn.com/mars/landing/dna/post-results/us/2019/crm-dna-post-results-day2-woman-dna-half.png')";
                    // dnaLines.style.visibility = 'visible';
                }
            }
        //
        // blocks animation
        //
            if (screenWidth > 767) {
                var blocksCon = document.querySelector('.dnaBlocksCon'),
                    boundingBlocks = blocksCon.getBoundingClientRect(),
                    blocks = document.querySelector('.dnaBlocks'),
                    blocksText = document.querySelector('.dnaBlocksText');
                if (boundingBlocks.top > 500) {
                    blocks.classList.remove('show');
                    blocksText.classList.remove('show');
                } else if (boundingBlocks.top <= 600 && boundingBlocks.top >200) {
                    var blockMovement = (boundingBlocks.top*3) - 600;
                    blocks.classList.add('show');
                    blocksText.classList.add('show');
                    blocks.style.marginLeft = "-" + blockMovement + "px";
                    blocksText.style.marginRight = "-" + blockMovement + "px";
                } else {
                    blocks.style.marginLeft = "0";
                    blocksText.style.marginRight = "0";
                    blocks.classList.add('show');
                    blocksText.classList.add('show');
                }
            }
        //
        // Build Edward Animation
        //
        var edwardBlocks = document.querySelectorAll('#buildEdward .edwardName.blockName .blockLetter'),
            edLetterE = document.querySelector('.greenLetter.letterE'),
            edLetterD = document.querySelector('.greenLetter.letterD'),
            edLetterW = document.querySelector('.greenLetter.letterW'),
            edLetterA = document.querySelector('.blueLetter.letterA'),
            edLetterR = document.querySelector('.blueLetter.letterR'),
            edLetterD2 = document.querySelector('.blueLetter.letterD2');
            if (screenWidth <= 767) {
                if (boundingBuildEdward.top <= 300) {
                    buildEdwardAnim.classList.add('animateGo');
                }
            } else if (screenWidth < 1050 && screenWidth > 767) {
                if (boundingBuildEdward.top > 600) {
                    for (var i = 0; i < edwardBlocks.length; i++) {
                        edwardBlocks[i].style.top = "0vw";
                        edwardBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildEdward.top <= 600 && boundingBuildEdward.top >= 410) {
                    var edBlockTop = (600 - boundingBuildEdward.top) * .1;
                    for (var i = 0; i < edwardBlocks.length; i++) {
                        edwardBlocks[i].style.top = edBlockTop + "vw";
                        edwardBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < edwardBlocks.length; i++) {
                        edwardBlocks[i].style.top = "19vw";
                        edwardBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildEdward.top >= 410) {
                    for (var i = 0; i < edwardBlocks.length; i++) {
                        edLetterE.style.left = 'calc(50% - 18.8vw)';
                        edLetterD.style.left = 'calc(50% - 34vw)';
                        edLetterW.style.left = 'calc(50% - 11.2vw)';
                        edLetterA.style.right = 'calc(50% - 18.85vw)';
                        edLetterR.style.right = 'calc(50% - 41.65vw)';
                        edLetterD2.style.right = 'calc(50% - 34vw)';
                    }
                } else if (boundingBuildEdward.top < 410 && boundingBuildEdward.top >= 210) {
                    var edBlockPerc = (boundingBuildEdward.top - 210)/2 * .01,
                        edLetterECalc = 22.1 - ((22.1 - 18.2) * edBlockPerc),
                        edLetterDCalc = 14.7 + ((33.6 - 14.7) * edBlockPerc),
                        edLetterWCalc = 7.3 + ((10.5 - 7.3) * edBlockPerc),
                        edLetterACalc = 7.3 + ((18.2 - 7.3) * edBlockPerc),
                        edLetterRCalc = 14.7 + ((41.2 - 14.7) * edBlockPerc),
                        edLetterD2Calc = 22.1 + ((33.6 - 22.1) * edBlockPerc);
                    
                    edLetterE.style.left = 'calc(50% - ' + edLetterECalc + 'vw)';
                    edLetterD.style.left = 'calc(50% - ' + edLetterDCalc + 'vw)';
                    edLetterW.style.left = 'calc(50% - ' + edLetterWCalc + 'vw)';
                    edLetterA.style.right = 'calc(50% - ' + edLetterACalc + 'vw)';
                    edLetterR.style.right = 'calc(50% - ' + edLetterRCalc + 'vw)';
                    edLetterD2.style.right = 'calc(50% - ' + edLetterD2Calc + 'vw)';
                } else {
                    edLetterE.style.left = 'calc(50% - 22.1vw)';
                    edLetterD.style.left = 'calc(50% - 14.7vw)';
                    edLetterW.style.left = 'calc(50% - 7.3vw)';
                    edLetterA.style.right = 'calc(50% - 7.3vw)';
                    edLetterR.style.right = 'calc(50% - 14.7vw)';
                    edLetterD2.style.right = 'calc(50% - 22.1vw)';
                }
            } else if (screenWidth >= 1050) {
                if (boundingBuildEdward.top > 600) {
                    for (var i = 0; i < edwardBlocks.length; i++) {
                        edwardBlocks[i].style.top = "0px";
                        edwardBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildEdward.top <= 600 && boundingBuildEdward.top >= 410) {
                    var edBlockTop = 600 - boundingBuildEdward.top;
                    for (var i = 0; i < edwardBlocks.length; i++) {
                        edwardBlocks[i].style.top = edBlockTop + "px";
                        edwardBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < edwardBlocks.length; i++) {
                        edwardBlocks[i].style.top = "190px";
                        edwardBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildEdward.top >= 410) {
                    for (var i = 0; i < edwardBlocks.length; i++) {
                        edLetterE.style.left = 'calc(50% - 191px)';
                        edLetterD.style.left = 'calc(50% - 353px)';
                        edLetterW.style.left = 'calc(50% - 110px)';
                        edLetterA.style.right = 'calc(50% - 190px)';
                        edLetterR.style.right = 'calc(50% - 433px)';
                        edLetterD2.style.right = 'calc(50% - 352px)';
                    }
                } else if (boundingBuildEdward.top <= 409 && boundingBuildEdward.top >= 209) {
                    var edBlockPerc = (boundingBuildEdward.top - 209)/2 * .01,
                        edLetterECalc = 246 - ((246 - 191) * edBlockPerc),
                        edLetterDCalc = 161 + ((353 - 161) * edBlockPerc),
                        edLetterWCalc = 79 + ((110 - 79) * edBlockPerc),
                        edLetterACalc = 79 + ((190 - 79) * edBlockPerc),
                        edLetterRCalc = 161 + ((433 - 161) * edBlockPerc),
                        edLetterD2Calc = 246 + ((352 - 246) * edBlockPerc);
                    
                    edLetterE.style.left = 'calc(50% - ' + edLetterECalc + 'px)';
                    edLetterD.style.left = 'calc(50% - ' + edLetterDCalc + 'px)';
                    edLetterW.style.left = 'calc(50% - ' + edLetterWCalc + 'px)';
                    edLetterA.style.right = 'calc(50% - ' + edLetterACalc + 'px)';
                    edLetterR.style.right = 'calc(50% - ' + edLetterRCalc + 'px)';
                    edLetterD2.style.right = 'calc(50% - ' + edLetterD2Calc + 'px)';
                } else {
                    edLetterE.style.left = 'calc(50% - 246px)';
                    edLetterD.style.left = 'calc(50% - 161px)';
                    edLetterW.style.left = 'calc(50% - 79px)';
                    edLetterA.style.right = 'calc(50% - 79px)';
                    edLetterR.style.right = 'calc(50% - 161px)';
                    edLetterD2.style.right = 'calc(50% - 246px)';
                }
            } 

        //
        // Build Angela Animation
        //
            var angelaBlocks = document.querySelectorAll('#buildAngela .angelaName.blockName .blockLetter'),
                angLetterA = document.querySelector('.purpleLetter.letterA'),
                angLetterN = document.querySelector('.orangeLetter.letterN'),
                angLetterG = document.querySelector('.purpleLetter.letterG'),
                angLetterE = document.querySelector('.orangeLetter.letterE'),
                angLetterL = document.querySelector('.orangeLetter.letterL'),
                angLetterA2 = document.querySelector('.purpleLetter.letterA2');
            if (screenWidth <= 767) {
                if (boundingBuildAngela.top <= 300) {
                    buildAngelaAnim.classList.add('animateGo');
                }
            } else if (screenWidth < 1050 && screenWidth > 767) {
                if (boundingBuildAngela.top > 600) {
                    for (var i = 0; i < angelaBlocks.length; i++) {
                        angelaBlocks[i].style.top = "0vw";
                        angelaBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildAngela.top <= 600 && boundingBuildAngela.top >= 410) {
                    var angBlockTop = (600 - boundingBuildAngela.top) * .1;
                    for (var i = 0; i < angelaBlocks.length; i++) {
                        angelaBlocks[i].style.top = angBlockTop + "vw";
                        angelaBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < angelaBlocks.length; i++) {
                        angelaBlocks[i].style.top = "19vw";
                        angelaBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildAngela.top >= 410) {
                    for (var i = 0; i < angelaBlocks.length; i++) {
                        angLetterA.style.left = 'calc(50% - 34vw)';
                        angLetterN.style.right = 'calc(50% - 41.65vw)';
                        angLetterG.style.left = 'calc(50% - 49.25vw)';
                        angLetterE.style.right = 'calc(50% - 11.2vw)';
                        angLetterL.style.right = 'calc(50% - 18.9vw)';
                        angLetterA2.style.left = 'calc(50% - 18.9vw)';
                    }
                } else if (boundingBuildAngela.top < 410 && boundingBuildAngela.top >= 210) {
                    var angBlockPerc = (boundingBuildAngela.top - 210)/2 * .01,
                        angLetterACalc = 22.1 + ((34 - 22.1) * angBlockPerc),
                        angLetterNCalc = 7.4 + ((-7.4 - 41.65) * angBlockPerc),
                        angLetterGCalc = 7.3 + ((49.25 - 7.3) * angBlockPerc),
                        angLetterECalc = 7.3 + ((11.2 - 7.3) * angBlockPerc),
                        angLetterLCalc = 14.7 + ((18.9 - 14.7) * angBlockPerc),
                        angLetterA2Calc = 14.8 + ((-14.8 - 18.9) * angBlockPerc);
                    
                    angLetterA.style.left = 'calc(50% - ' + angLetterACalc + 'vw)';
                    angLetterN.style.right = 'calc(50% + ' + angLetterNCalc + 'vw)';
                    angLetterG.style.left = 'calc(50% - ' + angLetterGCalc + 'vw)';
                    angLetterE.style.right = 'calc(50% - ' + angLetterECalc + 'vw)';
                    angLetterL.style.right = 'calc(50% - ' + angLetterLCalc + 'vw)';
                    angLetterA2.style.left = 'calc(50% + ' + angLetterA2Calc + 'vw)';
                } else {
                    angLetterA.style.left = 'calc(50% - 22.1vw)';
                    angLetterN.style.right = 'calc(50% + 7.4vw)';
                    angLetterG.style.left = 'calc(50% - 7.3vw)';
                    angLetterE.style.right = 'calc(50% - 7.3vw)';
                    angLetterL.style.right = 'calc(50% - 14.7vw)';
                    angLetterA2.style.left = 'calc(50% + 14.8vw)';
                }
            } else if (screenWidth >= 1050) {
                if (boundingBuildAngela.top > 600) {
                    for (var i = 0; i < angelaBlocks.length; i++) {
                        angelaBlocks[i].style.top = "0px";
                        angelaBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildAngela.top <= 600 && boundingBuildAngela.top >= 410) {
                    var angBlockTop = 600 - boundingBuildAngela.top;
                    for (var i = 0; i < angelaBlocks.length; i++) {
                        angelaBlocks[i].style.top = angBlockTop + "px";
                        angelaBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < angelaBlocks.length; i++) {
                        angelaBlocks[i].style.top = "190px";
                        angelaBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildAngela.top >= 410) {
                    for (var i = 0; i < angelaBlocks.length; i++) {
                        angLetterA.style.left = 'calc(50% - 353px)';
                        angLetterN.style.right = 'calc(50% - 433px)';
                        angLetterG.style.left = 'calc(50% - 515px)';
                        angLetterE.style.right = 'calc(50% - 109px)';
                        angLetterL.style.right = 'calc(50% - 190px)';
                        angLetterA2.style.left = 'calc(50% - 191px)';
                    }
                } else if (boundingBuildAngela.top <= 409 && boundingBuildAngela.top >= 209) {
                    var angBlockPerc = (boundingBuildAngela.top - 209)/2 * .01,
                        angLetterACalc = 243 + ((353 - 243) * angBlockPerc),
                        angLetterNCalc = 83 + ((-83 - 433) * angBlockPerc),
                        angLetterGCalc = 79 + ((515 - 79) * angBlockPerc),
                        angLetterECalc = 79 + ((109 - 79) * angBlockPerc),
                        angLetterLCalc = 161 + ((190 - 161) * angBlockPerc),
                        angLetterA2Calc = 163 + ((-163 - 191) * angBlockPerc);
                    
                    angLetterA.style.left = 'calc(50% - ' + angLetterACalc + 'px)';
                    angLetterN.style.right = 'calc(50% + ' + angLetterNCalc + 'px)';
                    angLetterG.style.left = 'calc(50% - ' + angLetterGCalc + 'px)';
                    angLetterE.style.right = 'calc(50% - ' + angLetterECalc + 'px)';
                    angLetterL.style.right = 'calc(50% - ' + angLetterLCalc + 'px)';
                    angLetterA2.style.left = 'calc(50% + ' + angLetterA2Calc + 'px)';
                } else {
                    angLetterA.style.left = 'calc(50% - 243px)';
                    angLetterN.style.right = 'calc(50% + 83px)';
                    angLetterG.style.left = 'calc(50% - 79px)';
                    angLetterE.style.right = 'calc(50% - 79px)';
                    angLetterL.style.right = 'calc(50% - 161px)';
                    angLetterA2.style.left = 'calc(50% + 163px)';
                }
            } 

        //
        // Build Kids Animation
        //
            var buildKidsCon = document.getElementById('buildKidsCon'),
                glendaBlocks = document.querySelectorAll('#buildKids .glendaName.blockName .blockLetter'),
                reaganBlocks = document.querySelectorAll('#buildKids .reaganName.blockName .blockLetter'),
                geraldBlocks = document.querySelectorAll('#buildKids .geraldName.blockName .blockLetter'),
                gleLetterG = document.querySelector('.glendaName .purpleLetter.letterG'),
                gleLetterL = document.querySelector('.glendaName .orangeLetter.letterL'),
                gleLetterE = document.querySelector('.glendaName .greenLetter.letterE'),
                gleLetterN = document.querySelector('.glendaName .orangeLetter.letterN'),
                gleLetterD = document.querySelector('.glendaName .greenLetter.letterD'),
                gleLetterA = document.querySelector('.glendaName .blueLetter.letterA'),
                reaLetterR = document.querySelector('.reaganName .blueLetter.letterR'),
                reaLetterE = document.querySelector('.reaganName .greenLetter.letterE'),
                reaLetterA = document.querySelector('.reaganName .blueLetter.letterA'),
                reaLetterG = document.querySelector('.reaganName .purpleLetter.letterG'),
                reaLetterA2 = document.querySelector('.reaganName .purpleLetter.letterA2'),
                reaLetterN = document.querySelector('.reaganName .orangeLetter.letterN'),
                gerLetterG = document.querySelector('.geraldName .purpleLetter.letterG'),
                gerLetterE = document.querySelector('.geraldName .orangeLetter.letterE'),
                gerLetterR = document.querySelector('.geraldName .blueLetter.letterR'),
                gerLetterA = document.querySelector('.geraldName .blueLetter.letterA'),
                gerLetterL = document.querySelector('.geraldName .orangeLetter.letterL'),
                gerLetterD = document.querySelector('.geraldName .blueLetter.letterD');
            if (screenWidth <= 767) {
                if (boundingBuildKidsScroll.top <= 300) {
                    buildKidsAnim.classList.add('animateGo');
                }
            } else if (screenWidth < 1050 && screenWidth > 767) {
                if (boundingBuildKidsScroll.top > 0) {
                    buildKidsCon.style.position = "absolute";
                } else if (boundingBuildKidsScroll.top <= 0 && boundingBuildKidsScroll.top >= -600) {
                    buildKidsCon.style.position = "fixed";
                    buildKidsCon.style.top = "0";
                    buildKidsCon.style.bottom = "inherit";
                } else {
                    buildKidsCon.style.position = "absolute";
                    buildKidsCon.style.top = "inherit";
                    buildKidsCon.style.bottom = "0";
                }
                if (boundingBuildKidsScroll.top > 0) {
                    for (var i = 0; i < glendaBlocks.length; i++) {
                        glendaBlocks[i].style.position = "absolute";
                        glendaBlocks[i].style.top = "0vw";
                        glendaBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildKidsScroll.top <= 0 && boundingBuildKidsScroll.top >= -90) {
                    var gleBlockTop = -(boundingBuildKidsScroll.top) * .4;
                    for (var i = 0; i < glendaBlocks.length; i++) {
                        glendaBlocks[i].style.position = "absolute";
                        glendaBlocks[i].style.top = gleBlockTop + "vw";
                        glendaBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < glendaBlocks.length; i++) {
                        glendaBlocks[i].style.position = "absolute";
                        glendaBlocks[i].style.top = "36.0vw";
                        glendaBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildKidsScroll.top >= -90) {
                    for (var i = 0; i < glendaBlocks.length; i++) {
                        gleLetterG.style.right = 'calc(50% - 26.4vw)';
                        gleLetterL.style.right = 'calc(50% - 41.6vw)';
                        gleLetterE.style.left = 'calc(50% - 49.3vw)';
                        gleLetterN.style.right = 'calc(50% - 18.9vw)';
                        gleLetterD.style.left = 'calc(50% - 41.6vw)';
                        gleLetterA.style.left = 'calc(50% - 26.4vw)';
                    }
                } else if (boundingBuildKidsScroll.top <= -91 && boundingBuildKidsScroll.top >= -191) {
                    var gleBlockPerc = (boundingBuildKidsScroll.top + 191) * .01,
                        gleLetterGCalc = 15.1 + ((-15.1 - 26.4) * gleBlockPerc),
                        gleLetterLCalc = 7.6 + ((-7.6 - 41.6) * gleBlockPerc),
                        gleLetterECalc = 7.4 + ((49.3 - 7.4) * gleBlockPerc),
                        gleLetterNCalc = 7.4 + ((18.9 - 7.4) * gleBlockPerc),
                        gleLetterDCalc = 7.6 + ((-7.6 - 41.6) * gleBlockPerc),
                        gleLetterACalc = 15.1 + ((-15.1 - 26.4) * gleBlockPerc);
                    
                    gleLetterG.style.right = 'calc(50% + ' + gleLetterGCalc + 'vw)';
                    gleLetterL.style.right = 'calc(50% + ' + gleLetterLCalc + 'vw)';
                    gleLetterE.style.left = 'calc(50% - ' + gleLetterECalc + 'vw)';
                    gleLetterN.style.right = 'calc(50% - ' + gleLetterNCalc + 'vw)';
                    gleLetterD.style.left = 'calc(50% + ' + gleLetterDCalc + 'vw)';
                    gleLetterA.style.left = 'calc(50% + ' + gleLetterACalc + 'vw)';
                } else {
                    gleLetterG.style.right = 'calc(50% + 15.1vw)';
                    gleLetterL.style.right = 'calc(50% + 7.6vw)';
                    gleLetterE.style.left = 'calc(50% - 7.4vw)';
                    gleLetterN.style.right = 'calc(50% - 7.4vw)';
                    gleLetterD.style.left = 'calc(50% + 7.6vw)';
                    gleLetterA.style.left = 'calc(50% + 15.1vw)';
                }

                if (boundingBuildKidsScroll.top > -200) {
                    for (var i = 0; i < reaganBlocks.length; i++) {
                        reaganBlocks[i].style.position = "absolute";
                        reaganBlocks[i].style.top = "0px";
                        reaganBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildKidsScroll.top <= -200 && boundingBuildKidsScroll.top >= -290) {
                    var reaBlockTop = -(200 + boundingBuildKidsScroll.top) * .3;
                    for (var i = 0; i < reaganBlocks.length; i++) {
                        reaganBlocks[i].style.position = "absolute";
                        reaganBlocks[i].style.top = reaBlockTop + "vw";
                        reaganBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < reaganBlocks.length; i++) {
                        reaganBlocks[i].style.position = "absolute";
                        reaganBlocks[i].style.top = "27.0vw";
                        reaganBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildKidsScroll.top >= -290) {
                    for (var i = 0; i < reaganBlocks.length; i++) {
                        reaLetterR.style.left = 'calc(50% - 18.8vw)';
                        reaLetterE.style.left = 'calc(50% - 49.2vw)';
                        reaLetterA.style.left = 'calc(50% - 26.4vw)';
                        reaLetterG.style.right = 'calc(50% - 26.4vw)';
                        reaLetterA2.style.right = 'calc(50% - 49.2vw)';
                        reaLetterN.style.right = 'calc(50% - 18.8vw)';
                    }
                } else if (boundingBuildKidsScroll.top <= -291 && boundingBuildKidsScroll.top >= -391) {
                    var reaBlockPerc = (boundingBuildKidsScroll.top + 391) * .01,
                        reaLetterRCalc = 22.4 - ((22.4 - 18.8) * reaBlockPerc),
                        reaLetterECalc = 14.9 + ((49.2 - 14.9) * reaBlockPerc),
                        reaLetterACalc = 7.4 + ((26.4 - 7.4) * reaBlockPerc),
                        reaLetterGCalc = 7.4 + ((26.4 - 7.4) * reaBlockPerc),
                        reaLetterA2Calc = 14.9 + ((49.2 - 14.9) * reaBlockPerc),
                        reaLetterNCalc = 22.4 - ((22.4 - 18.8) * reaBlockPerc);
                    
                    reaLetterR.style.left = 'calc(50% - ' + reaLetterRCalc + 'vw)';
                    reaLetterE.style.left = 'calc(50% - ' + reaLetterECalc + 'vw)';
                    reaLetterA.style.left = 'calc(50% - ' + reaLetterACalc + 'vw)';
                    reaLetterG.style.right = 'calc(50% - ' + reaLetterGCalc + 'vw)';
                    reaLetterA2.style.right = 'calc(50% - ' + reaLetterA2Calc + 'vw)';
                    reaLetterN.style.right = 'calc(50% - ' + reaLetterNCalc + 'vw)';
                } else {
                    reaLetterR.style.left = 'calc(50% - 22.4vw)';
                    reaLetterE.style.left = 'calc(50% - 14.9vw)';
                    reaLetterA.style.left = 'calc(50% - 7.4vw)';
                    reaLetterG.style.right = 'calc(50% - 7.4vw)';
                    reaLetterA2.style.right = 'calc(50% - 14.9vw)';
                    reaLetterN.style.right = 'calc(50% - 22.4vw)';
                }

                if (boundingBuildKidsScroll.top > -400) {
                    for (var i = 0; i < geraldBlocks.length; i++) {
                        geraldBlocks[i].style.position = "absolute";
                        geraldBlocks[i].style.top = "0vw";
                        geraldBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildKidsScroll.top <= -400 && boundingBuildKidsScroll.top >= -490) {
                    var reaBlockTop = -(400 + boundingBuildKidsScroll.top) * .2;
                    for (var i = 0; i < geraldBlocks.length; i++) {
                        geraldBlocks[i].style.position = "absolute";
                        geraldBlocks[i].style.top = reaBlockTop + "vw";
                        geraldBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < geraldBlocks.length; i++) {
                        geraldBlocks[i].style.position = "absolute";
                        geraldBlocks[i].style.top = "18.0vw";
                        geraldBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildKidsScroll.top >= -490) {
                    for (var i = 0; i < geraldBlocks.length; i++) {
                        gerLetterG.style.right = 'calc(50% - 26.4vw)';
                        gerLetterE.style.right = 'calc(50% - 34vw)';
                        gerLetterR.style.left = 'calc(50% - 18.8vw)';
                        gerLetterA.style.left = 'calc(50% - 26.5vw)';
                        gerLetterL.style.right = 'calc(50% - 41.7vw)';
                        gerLetterD.style.left = 'calc(50% - 11.2vw)';
                    }
                } else if (boundingBuildKidsScroll.top <= -491 && boundingBuildKidsScroll.top >= -591) {
                    var gerBlockPerc = (boundingBuildKidsScroll.top + 591) * .01,
                        gerLetterGCalc = 15.1 + ((-15.1 - 26.4) * gerBlockPerc),
                        gerLetterECalc = 7.6 + ((-34 - 7.6) * gerBlockPerc),
                        gerLetterRCalc = 7.4 + ((18.8 - 7.4) * gerBlockPerc),
                        gerLetterACalc = 0 - ((26.5 - 0) * gerBlockPerc),
                        gerLetterLCalc = 14.8 - ((14.8 - 41.7) * gerBlockPerc),
                        gerLetterDCalc = 15 + ((-11.2 - 15) * gerBlockPerc);
                    
                    gerLetterG.style.right = 'calc(50% + ' + gerLetterGCalc + 'vw)';
                    gerLetterE.style.right = 'calc(50% + ' + gerLetterECalc + 'vw)';
                    gerLetterR.style.left = 'calc(50% - ' + gerLetterRCalc + 'vw)';
                    gerLetterA.style.left = 'calc(50% + ' + gerLetterACalc + 'vw)';
                    gerLetterL.style.right = 'calc(50% - ' + gerLetterLCalc + 'vw)';
                    gerLetterD.style.left = 'calc(50% + ' + gerLetterDCalc + 'vw)';
                } else {
                    gerLetterG.style.right = 'calc(50% + 15.1vw)';
                    gerLetterE.style.right = 'calc(50% + 7.6vw)';
                    gerLetterR.style.left = 'calc(50% - 7.4vw)';
                    gerLetterA.style.left = 'calc(50% + 0vw)';
                    gerLetterL.style.right = 'calc(50% - 14.8vw)';
                    gerLetterD.style.left = 'calc(50% + 15vw)';
                }
            } else if (screenWidth >= 1050) {
                if (boundingBuildKidsScroll.top > 0) {
                    buildKidsCon.style.position = "absolute";
                } else if (boundingBuildKidsScroll.top <= 0 && boundingBuildKidsScroll.top >= -600) {
                    buildKidsCon.style.position = "fixed";
                    buildKidsCon.style.top = "0";
                    buildKidsCon.style.bottom = "inherit";
                } else {
                    buildKidsCon.style.position = "absolute";
                    buildKidsCon.style.top = "inherit";
                    buildKidsCon.style.bottom = "0";
                }
                if (boundingBuildKidsScroll.top > 0) {
                    for (var i = 0; i < glendaBlocks.length; i++) {
                        glendaBlocks[i].style.position = "absolute";
                        glendaBlocks[i].style.top = "0px";
                        glendaBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildKidsScroll.top <= 0 && boundingBuildKidsScroll.top >= -90) {
                    var gleBlockTop = -(boundingBuildKidsScroll.top) * 4.21;
                    for (var i = 0; i < glendaBlocks.length; i++) {
                        glendaBlocks[i].style.position = "absolute";
                        glendaBlocks[i].style.top = gleBlockTop + "px";
                        glendaBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < glendaBlocks.length; i++) {
                        glendaBlocks[i].style.position = "absolute";
                        glendaBlocks[i].style.top = "380px";
                        glendaBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildKidsScroll.top >= -90) {
                    for (var i = 0; i < glendaBlocks.length; i++) {
                        gleLetterG.style.right = 'calc(50% - 271px)';
                        gleLetterL.style.right = 'calc(50% - 433px)';
                        gleLetterE.style.left = 'calc(50% - 515px)';
                        gleLetterN.style.right = 'calc(50% - 190px)';
                        gleLetterD.style.left = 'calc(50% - 433px)';
                        gleLetterA.style.left = 'calc(50% - 271px)';
                    }
                } else if (boundingBuildKidsScroll.top <= -91 && boundingBuildKidsScroll.top >= -191) {
                    var gleBlockPerc = (boundingBuildKidsScroll.top + 191) * .01,
                        gleLetterGCalc = 164 + ((-164 - 271) * gleBlockPerc),
                        gleLetterLCalc = 83 + ((-83 - 433) * gleBlockPerc),
                        gleLetterECalc = 79 + ((515 - 79) * gleBlockPerc),
                        gleLetterNCalc = 79 + ((190 - 79) * gleBlockPerc),
                        gleLetterDCalc = 83 + ((-83 - 433) * gleBlockPerc),
                        gleLetterACalc = 163 + ((-163 - 271) * gleBlockPerc);
                    
                    gleLetterG.style.right = 'calc(50% + ' + gleLetterGCalc + 'px)';
                    gleLetterL.style.right = 'calc(50% + ' + gleLetterLCalc + 'px)';
                    gleLetterE.style.left = 'calc(50% - ' + gleLetterECalc + 'px)';
                    gleLetterN.style.right = 'calc(50% - ' + gleLetterNCalc + 'px)';
                    gleLetterD.style.left = 'calc(50% + ' + gleLetterDCalc + 'px)';
                    gleLetterA.style.left = 'calc(50% + ' + gleLetterACalc + 'px)';
                } else {
                    gleLetterG.style.right = 'calc(50% + 164px)';
                    gleLetterL.style.right = 'calc(50% + 83px)';
                    gleLetterE.style.left = 'calc(50% - 79px)';
                    gleLetterN.style.right = 'calc(50% - 79px)';
                    gleLetterD.style.left = 'calc(50% + 83px)';
                    gleLetterA.style.left = 'calc(50% + 163px)';
                }

                if (boundingBuildKidsScroll.top > -200) {
                    for (var i = 0; i < reaganBlocks.length; i++) {
                        reaganBlocks[i].style.position = "absolute";
                        reaganBlocks[i].style.top = "0px";
                        reaganBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildKidsScroll.top <= -200 && boundingBuildKidsScroll.top >= -290) {
                    var reaBlockTop = -(200 + boundingBuildKidsScroll.top) * 3.21;
                    for (var i = 0; i < reaganBlocks.length; i++) {
                        reaganBlocks[i].style.position = "absolute";
                        reaganBlocks[i].style.top = reaBlockTop + "px";
                        reaganBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < reaganBlocks.length; i++) {
                        reaganBlocks[i].style.position = "absolute";
                        reaganBlocks[i].style.top = "290px";
                        reaganBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildKidsScroll.top >= -290) {
                    for (var i = 0; i < reaganBlocks.length; i++) {
                        reaLetterR.style.left = 'calc(50% - 191px)';
                        reaLetterE.style.left = 'calc(50% - 515px)';
                        reaLetterA.style.left = 'calc(50% - 272px)';
                        reaLetterG.style.right = 'calc(50% - 272px)';
                        reaLetterA2.style.right = 'calc(50% - 515px)';
                        reaLetterN.style.right = 'calc(50% - 191px)';
                    }
                } else if (boundingBuildKidsScroll.top <= -291 && boundingBuildKidsScroll.top >= -391) {
                    var reaBlockPerc = (boundingBuildKidsScroll.top + 391) * .01,
                        reaLetterRCalc = 241 - ((241 - 191) * reaBlockPerc),
                        reaLetterECalc = 161 + ((515 - 161) * reaBlockPerc),
                        reaLetterACalc = 79 + ((272 - 79) * reaBlockPerc),
                        reaLetterGCalc = 79 + ((272 - 79) * reaBlockPerc),
                        reaLetterA2Calc = 161 + ((515 - 161) * reaBlockPerc),
                        reaLetterNCalc = 241 - ((241 - 191) * reaBlockPerc);
                    
                    reaLetterR.style.left = 'calc(50% - ' + reaLetterRCalc + 'px)';
                    reaLetterE.style.left = 'calc(50% - ' + reaLetterECalc + 'px)';
                    reaLetterA.style.left = 'calc(50% - ' + reaLetterACalc + 'px)';
                    reaLetterG.style.right = 'calc(50% - ' + reaLetterGCalc + 'px)';
                    reaLetterA2.style.right = 'calc(50% - ' + reaLetterA2Calc + 'px)';
                    reaLetterN.style.right = 'calc(50% - ' + reaLetterNCalc + 'px)';
                } else {
                    reaLetterR.style.left = 'calc(50% - 241px)';
                    reaLetterE.style.left = 'calc(50% - 161px)';
                    reaLetterA.style.left = 'calc(50% - 79px)';
                    reaLetterG.style.right = 'calc(50% - 79px)';
                    reaLetterA2.style.right = 'calc(50% - 161px)';
                    reaLetterN.style.right = 'calc(50% - 241px)';
                }

                if (boundingBuildKidsScroll.top > -400) {
                    for (var i = 0; i < geraldBlocks.length; i++) {
                        geraldBlocks[i].style.position = "absolute";
                        geraldBlocks[i].style.top = "0px";
                        geraldBlocks[i].style.display = "none";
                    }
                } else if (boundingBuildKidsScroll.top <= -400 && boundingBuildKidsScroll.top >= -490) {
                    var reaBlockTop = -(400 + boundingBuildKidsScroll.top) * 2.21;
                    for (var i = 0; i < geraldBlocks.length; i++) {
                        geraldBlocks[i].style.position = "absolute";
                        geraldBlocks[i].style.top = reaBlockTop + "px";
                        geraldBlocks[i].style.display = "block";
                    }
                } else {
                    for (var i = 0; i < geraldBlocks.length; i++) {
                        geraldBlocks[i].style.position = "absolute";
                        geraldBlocks[i].style.top = "200px";
                        geraldBlocks[i].style.display = "block";
                    }
                }
                if (boundingBuildKidsScroll.top >= -490) {
                    for (var i = 0; i < geraldBlocks.length; i++) {
                        gerLetterG.style.right = 'calc(50% - 271px)';
                        gerLetterE.style.right = 'calc(50% - 353px)';
                        gerLetterR.style.left = 'calc(50% - 190px)';
                        gerLetterA.style.left = 'calc(50% - 271px)';
                        gerLetterL.style.right = 'calc(50% - 434px)';
                        gerLetterD.style.left = 'calc(50% - 109px)';
                    }
                } else if (boundingBuildKidsScroll.top <= -491 && boundingBuildKidsScroll.top >= -591) {
                    var gerBlockPerc = (boundingBuildKidsScroll.top + 591) * .01,
                        gerLetterGCalc = 162 + ((-162 - 271) * gerBlockPerc),
                        gerLetterECalc = 83 + ((-353 - 83) * gerBlockPerc),
                        gerLetterRCalc = 79 + ((190 - 79) * gerBlockPerc),
                        gerLetterACalc = 1 - ((271 - 1) * gerBlockPerc),
                        gerLetterLCalc = 161 - ((161 - 434) * gerBlockPerc),
                        gerLetterDCalc = 163 + ((-109 - 163) * gerBlockPerc);
                    
                    gerLetterG.style.right = 'calc(50% + ' + gerLetterGCalc + 'px)';
                    gerLetterE.style.right = 'calc(50% + ' + gerLetterECalc + 'px)';
                    gerLetterR.style.left = 'calc(50% - ' + gerLetterRCalc + 'px)';
                    gerLetterA.style.left = 'calc(50% + ' + gerLetterACalc + 'px)';
                    gerLetterL.style.right = 'calc(50% - ' + gerLetterLCalc + 'px)';
                    gerLetterD.style.left = 'calc(50% + ' + gerLetterDCalc + 'px)';
                } else {
                    gerLetterG.style.right = 'calc(50% + 162px)';
                    gerLetterE.style.right = 'calc(50% + 83px)';
                    gerLetterR.style.left = 'calc(50% - 79px)';
                    gerLetterA.style.left = 'calc(50% + 1px)';
                    gerLetterL.style.right = 'calc(50% - 161px)';
                    gerLetterD.style.left = 'calc(50% + 163px)';
                }
            } 

        //
        // Build Grandkids Animation
        //
            var buildGrandKidsCon = document.getElementById('buildGrandKidsCon'),
                gkidsShow = document.getElementById('grandKidsShow'),
                gkidsNotShow = document.getElementById('grandKidsNotShow'),
                gkidsBlockLetter = document.querySelectorAll('#buildGrandKids .blockLetter'),
                gkidsLetterAll = document.querySelectorAll('#buildGrandKids .blockLetter.letterAll'),
                gkidsLetterGN2 = document.querySelectorAll('#buildGrandKids .blockLetter.letterGN2'),
                gkidsLetterGN = document.querySelectorAll('#buildGrandKids .blockLetter.letterGN');
            if (screenWidth <= 767) {
                if (boundingBuildGrandKids.top <= 300) {
                    buildGrandKidsAnim.classList.add('animateGo');
                }
            } else {
                if (boundingBuildGrandKidsScroll.top > 0) {
                    buildGrandKidsCon.style.position = "absolute";
                } else if (boundingBuildGrandKidsScroll.top <= 0 && boundingBuildGrandKidsScroll.top >= -500) {
                    buildGrandKidsCon.style.position = "fixed";
                    buildGrandKidsCon.style.top = "0";
                    buildGrandKidsCon.style.bottom = "inherit";
                } else {
                    buildGrandKidsCon.style.position = "absolute";
                    buildGrandKidsCon.style.top = "inherit";
                    buildGrandKidsCon.style.bottom = "0";
                }
                if (boundingBuildGrandKidsScroll.top > 0) {
                    if (gkidsShow.classList.contains('gkidsFadeIn')){
                        gkidsShow.classList.remove('gkidsFadeIn');
                        gkidsShow.classList.add('gkidsFadeOut');
                    }
                    for (var i = 0; i < gkidsBlockLetter.length; i++) {
                        if (gkidsBlockLetter[i].classList.contains('fadeToGrey')){
                            gkidsBlockLetter[i].classList.remove('fadeToGrey');
                            gkidsBlockLetter[i].classList.add('fadeToSolid');
                        }
                    }
                } else if (boundingBuildGrandKidsScroll.top <= 0 && boundingBuildGrandKidsScroll.top > -300) {
                    gkidsShow.classList.remove('gkidsFadeOut');
                    gkidsShow.classList.add('gkidsFadeIn');
                    if (gkidsNotShow.classList.contains('gkidsFadeIn')){
                        gkidsNotShow.classList.remove('gkidsFadeIn');
                        gkidsNotShow.classList.add('gkidsFadeOut');
                    }
                    for (var i = 0; i < gkidsBlockLetter.length; i++) {
                        gkidsBlockLetter[i].classList.remove('fadeToSolid');
                        gkidsBlockLetter[i].classList.add('fadeToGrey');
                    }
                    for (var i = 0; i < gkidsLetterAll.length; i++) {
                        gkidsLetterAll[i].classList.remove('fadeToGrey');
                        gkidsLetterAll[i].classList.add('fadeToSolid');
                    }
                } else {
                    if (gkidsShow.classList.contains('gkidsFadeIn')){
                        gkidsShow.classList.remove('gkidsFadeIn');
                        gkidsShow.classList.add('gkidsFadeOut');
                    }
                    gkidsNotShow.classList.remove('gkidsFadeOut');
                    gkidsNotShow.classList.add('gkidsFadeIn');
                    for (var i = 0; i < gkidsBlockLetter.length; i++) {
                        gkidsBlockLetter[i].classList.remove('fadeToSolid');
                        gkidsBlockLetter[i].classList.add('fadeToGrey');
                    }
                    for (var i = 0; i < gkidsLetterGN2.length; i++) {
                        gkidsLetterGN2[i].classList.remove('fadeToGrey');
                        gkidsLetterGN2[i].classList.add('fadeToSolid');
                    }
                    for (var i = 0; i < gkidsLetterGN.length; i++) {
                        gkidsLetterGN[i].classList.remove('fadeToGrey');
                        gkidsLetterGN[i].classList.add('fadeToSolid');
                    }
                }
            }

        //
        // Build Complex DNA Animation
        //
            if (screenWidth > 767) {
                var dnaNames = document.querySelectorAll('.complexDnaHero .blockName'),
                    complexDnaBkg = document.querySelector('.complexDnaHero .complexDnaBkg');

                if (boundingComplexDna.top > 250) {	
                    for (var i = 0; i < dnaNames.length; i++) {
                        dnaNames[i].style.opacity = "1";
                    }
                    complexDnaBkg.style.opacity = "0";
                } else if (boundingComplexDna.top <= 250 && boundingComplexDna.top > 150) {
                    var complexDnaFade = (boundingComplexDna.top - 150) * .01,
                        complexDnaFadeInverse = -((boundingComplexDna.top - 150) * .01) + 1;
                    for (var i = 0; i < dnaNames.length; i++) {
                        dnaNames[i].style.opacity = complexDnaFade;
                    }
                    complexDnaBkg.style.opacity = complexDnaFadeInverse;
                } else {
                    for (var i = 0; i < dnaNames.length; i++) {
                        dnaNames[i].style.opacity = "0";
                    }
                    complexDnaBkg.style.opacity = "1";
                }
            } 
        //
        // Family Connect animation
        //
            if (screenWidth >= 320) {
                var famConnect = document.querySelector('.familyConnectCon'),
                    boundingFamConnect = famConnect.getBoundingClientRect(),
                    ethnicityTag = document.querySelector('.ethnicityTag'),
                    matchTag = document.querySelector('.matchTag');
                if (boundingFamConnect.top > 800) {
                    ethnicityTag.classList.remove('show');
                    matchTag.classList.remove('show');
                } else if (boundingFamConnect.top <= 800 && boundingFamConnect.top > 400) {
                    var connectMovement = (boundingFamConnect.top * 3) - 1200;
                    ethnicityTag.classList.add('show');
                    matchTag.classList.add('show');
                    ethnicityTag.style.marginLeft = "-" + connectMovement + "px";
                    matchTag.style.marginRight = "-" + connectMovement + "px";
                    ethnicityTag.classList.remove('lines');
                    matchTag.classList.remove('lines');
                } else {
                    ethnicityTag.style.marginLeft = "0";
                    matchTag.style.marginRight = "0";
                    ethnicityTag.classList.add('show');
                    matchTag.classList.add('show');
                    ethnicityTag.classList.add('lines');
                    matchTag.classList.add('lines');
                }
            }
        //
        // Build Growing Faces Animation
        //
            // load large background image on scroll
            var growingSctn = document.getElementById('growingSctn');
            growingSctn.classList.add('loadBkg');
            if (screenWidth <= 767) {
                if (boundingGrowingFaces.top <= 0 && boundingGrowingFaces.top >= -450) {
                    greenSticky.classList.add('stickyGreen');
                    greenSticky.classList.remove('noStickyGreen');
                } else if (boundingGrowingFaces.top > 0) {
                    greenSticky.classList.remove('stickyGreen');
                } else if (boundingGrowingFaces.top < -450) {
                    greenSticky.classList.remove('stickyGreen');
                    greenSticky.classList.add('noStickyGreen');
                }
                
            } else if (screenWidth <= 1005) {
                if (boundingGrowingFaces.top <= 0 && boundingGrowingFaces.top >= -550) {
                    greenSticky.classList.add('stickyGreen');
                    greenSticky.classList.remove('noStickyGreen');
                } else if (boundingGrowingFaces.top > 0) {
                    greenSticky.classList.remove('stickyGreen');
                } else if (boundingGrowingFaces.top < -550) {
                    greenSticky.classList.remove('stickyGreen');
                    greenSticky.classList.add('noStickyGreen');
                }
                if (facesBottom <= 0 && facesBottom >= -260) {
                    logoAnim.classList.add('logoMove');
                    logoAnim.classList.remove('fadeLogo');
                    if (colorLogo.classList.contains('fadeInLogo')){
                        colorLogo.classList.remove('fadeInLogo');
                        colorLogo.classList.add('fadeOutLogo');
                    }
                } else if (facesBottom > 0) {
                    logoAnim.classList.remove('logoMove');
                } else if (facesBottom < -260) {
                    logoAnim.classList.remove('logoMove');
                    logoAnim.classList.add('fadeLogo');
                    colorLogo.classList.remove('fadeOutLogo');
                    colorLogo.classList.add('fadeInLogo');
                }
            } else {
                if (boundingGrowingFaces.top <= 0 && boundingGrowingFaces.top >= -800) {
                    greenSticky.classList.add('stickyGreen');
                    greenSticky.classList.remove('noStickyGreen');
                } else if (boundingGrowingFaces.top > 0) {
                    greenSticky.classList.remove('stickyGreen');
                } else if (boundingGrowingFaces.top < -800) {
                    greenSticky.classList.remove('stickyGreen');
                    greenSticky.classList.add('noStickyGreen');
                }
                if (facesBottom <= 0 && facesBottom >= -360) {
                    logoAnim.classList.add('logoMove');
                    logoAnim.classList.remove('fadeLogo');
                    if (colorLogo.classList.contains('fadeInLogo')){
                        colorLogo.classList.remove('fadeInLogo');
                        colorLogo.classList.add('fadeOutLogo');
                    }
                } else if (facesBottom > 0) {
                    logoAnim.classList.remove('logoMove');
                } else if (facesBottom < -360) {
                    logoAnim.classList.remove('logoMove');
                    logoAnim.classList.add('fadeLogo');
                    colorLogo.classList.remove('fadeOutLogo');
                    colorLogo.classList.add('fadeInLogo');
                }
            }

        });
    })();
}
