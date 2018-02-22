window.onload = function myClick() {
    setTimeout(
        function() {
            var c = document.getElementById('c');
            var parallaxInstance = new Parallax(c);
        }, 3800);
    setTimeout(
        function() {
            var v = document.getElementById('Layer_2');
            var parallaxInstance = new Parallax(v);
        }, 3800);
};


$(document).ready(function() {

    var controller = new ScrollMagic.Controller();


    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#c',
        triggerHook: 0.3


    })

        .setTween("#asd1", 3, {ease: Power4.easeOut,y: '0', x:'0', delay:1})
        .addTo(controller);

    var ourScene2 = new ScrollMagic.Scene({
        triggerElement: '#c',
        triggerHook: 0.3


    })

        .setTween("#asd2", 3, {ease: Power4.easeOut,y: '0', x:'0', delay:0.2})
        .addTo(controller);

    var ourScene3 = new ScrollMagic.Scene({
        triggerElement: '#c',
        triggerHook: 0.3


    })

        .setTween("#asd3", 3, {ease: Power4.easeOut,y: '0', x:'0', delay:0.6})
        .addTo(controller);


















    var wipeAnimation2 = new TimelineMax()
    // animate to second panel
        .to("#home", 0.4, {ease: Power4.easeOut,y: -60, opacity:0.2, scale:1,x:-25},0)
        .to("#projects", 0.4, {css: {ease: Power4.easeOut,y:-72,  scale:1.5, opacity:1, x:32}},0)
        .to("#contact", 0.4, {ease: Power4.easeOut,y: -60, opacity:0.2},0)
        .to("#skills", 0.4, {ease: Power4.easeOut,y: -60, opacity:0.1},0);


    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: "0.4"

    })

        .setTween(wipeAnimation2)
        .addTo(controller);


    var wipeAnimation3 = new TimelineMax()
    // animate to second panel
        .to("#home", 0.4, {ease: Power4.easeOut,y: -120, opacity:0.1, scale:1},0)
        .to("#projects", 0.4, {ease: Power4.easeOut,y: -130, opacity:0.2,scale:1,x:0},0)
        .to("#contact", 0.4, {ease: Power4.easeOut,y: -130, opacity:1, scale:1.5,x:35},0)
        .to("#skills", 0.4, {ease: Power4.easeOut,y: -120, opacity:0.2, scale:1},0);



    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#yellow",
        triggerHook: "0.6"


    })

        .setTween(wipeAnimation3)
        .addTo(controller);

    var wipeAnimation4 = new TimelineMax()
    // animate to second panel
        .to("#home", 0.4, {ease: Power4.easeOut,y: -180, opacity:0, scale:1},0)
        .to("#projects", 0.4, {ease: Power4.easeOut,y: -190, opacity:0.1,scale:1,x:0},0)
        .to("#contact", 0.4, {ease: Power4.easeOut,y: -190, opacity:0.2, scale:1,x:0},0)
        .to("#skills", 0.4, {ease: Power4.easeOut,y: -190, opacity:1, scale:1.5,x:20},0);



    // create scene to pin and link animation
    new ScrollMagic.Scene({
        triggerElement: "#Layer_2",
        triggerHook: "0.6"


    })

        .setTween(wipeAnimation4)
        .addTo(controller);





    new ScrollMagic.Scene({
        triggerElement: "#yellow",
        triggerHook: "0.6"


    })

        .setTween(wipeAnimation3)
        .addTo(controller);









    var ourScene10 = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.4,
        reverse:false
    })
        .setTween("#kartica1", 2, {ease: Power3.easeOut,opacity:1, scale:1})
        .addTo(controller);



    var ourScene11 = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.4,
        reverse:false
    })
        .setTween("#kartica2", 2, {ease: Power3.easeOut,opacity:1, scale:1, delay: 0.2})
        .addTo(controller);


    var ourScene12 = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.4,
        reverse:false
    })
        .setTween("#kartica3", 2, {ease: Power3.easeOut,opacity:1, scale:1, delay: 0.4})
        .addTo(controller);


    var ourScene13 = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.4,
        reverse:false
    })
        .setTween("#kartica4", 2, {ease: Power3.easeOut,opacity:1, scale:1, delay: 0.6})
        .addTo(controller);


    var ourScene14 = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.4,
        reverse:false
    })
        .setTween("#kartica5", 2, {ease: Power3.easeOut,opacity:1, scale:1, delay: 0.8})
        .addTo(controller);


    var ourScene15 = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.4,
        reverse:false
    })
        .setTween("#kartica6", 2, {ease: Power3.easeOut,opacity:1, scale:1, delay: 1})
        .addTo(controller);

    var ourSceneNav = new ScrollMagic.Scene({
        triggerElement: "#nav",
        triggerHook: 0.3,
        reverse:false
    })
        .setTween("#nav", 3, {ease: Power1.easeOut,opacity:1})
        .addTo(controller);

    var ourScenearrowright = new ScrollMagic.Scene({
        triggerElement: "#red",
        triggerHook: 0.5
    })
        .setTween("#arrowright", 2, {ease: Power1.easeOut,opacity:1,delay:2})
        .addTo(controller);


    var textanimationwrite = new ScrollMagic.Scene({
        triggerElement: "#kkk",
        triggerHook:0.6,
        reverse:false
    })

        .setTween("#ccc",3, {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dolor nulla,commodo non ultricies quis,sollicitudin sed ante.commodo non ultricies quis,sollicitudin sed ante.commodo non ultricies quis,sollicitudin sed ante. commodo non ultricies quis,sollicitudin sed ante.",opacity:1})
        .addTo(controller);

    var textanimationwrite2 = new ScrollMagic.Scene({
        triggerElement: "#kkkk",
        triggerHook:0.6,
        reverse:false
    })

        .setTween("#cccc",3, {text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus dolor nulla,commodo non ultricies quis,sollicitudin sed ante.commodo non ultricies quis,sollicitudin sed ante.commodo non ultricies quis,sollicitudin sed ante. commodo non ultricies quis,sollicitudin sed ante.",opacity:1})
        .addTo(controller);

    var loremopacity = new ScrollMagic.Scene({
        triggerElement: "#kkkk",
        triggerHook:0.6,
        reverse:false
    })

        .setTween("#kkkk", 1, {ease: Power2.easeOut,opacity:1})
        .addTo(controller);

    var loremopacity2 = new ScrollMagic.Scene({
        triggerElement: "#kkk",
        triggerHook:0.6,
        reverse:false
    })

        .setTween("#kkk", 1, {ease: Power2.easeOut,opacity:1})
        .addTo(controller);

    var kontaktme = new ScrollMagic.Scene({
        triggerElement: "#kontaktme",
        triggerHook:0.6,
        reverse:false
    })

        .setTween("#kontaktme", 1,{ css:  {ease: Power2.easeOut,opacity:1, "transform": "scale:(1)"}})
        .addTo(controller);


});



