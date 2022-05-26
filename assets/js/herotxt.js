var animeCus = {
    opacityIn: [0, 1],
    scaleIn: [0.8, 1],
    scaleOut: 5,
    durationIn: 2000,
    durationOut: 500,
    delay: 200
};

anime.timeline({loop: true})
    .add({
        targets: '.custom-animation .letters-1',
        opacity: animeCus.opacityIn,
        scale: animeCus.scaleIn,
        duration: animeCus.durationIn
    }).add({
        targets: '.custom-animation .letters-1',
        opacity: 0,
        scale: animeCus.scaleOut,
        duration: animeCus.durationOut,
        easing: "easeInExpo",
        delay: animeCus.delay,
        scale:0
    }).add({
        targets: '.custom-animation .letters-2',
        opacity: animeCus.opacityIn,
        scale: animeCus.scaleIn,
        duration: animeCus.durationIn
    }).add({
        targets: '.custom-animation .letters-2',
        opacity: 0,
        scale: animeCus.scaleOut,
        duration: animeCus.durationOut,
        easing: "easeInExpo",
        delay: animeCus.delay,
        scale:0
    }).add({
        targets: '.custom-animation .letters-3',
        opacity: animeCus.opacityIn,
        scale: animeCus.scaleIn,
        duration: animeCus.durationIn
    }).add({
        targets: '.custom-animation .letters-3',
        opacity: 0,
        scale: animeCus.scaleOut,
        duration: animeCus.durationOut,
        easing: "easeInExpo",
        delay: animeCus.delay,
        scale:0
    }).add({
        targets: '.custom-animation .letters-4',
        opacity: animeCus.opacityIn,
        scale: animeCus.scaleIn,
        duration: animeCus.durationIn
    }).add({
        targets: '.custom-animation .letters-4',
        opacity: 0,
        scale: animeCus.scaleOut,
        duration: animeCus.durationOut,
        easing: "easeInExpo",
        delay: animeCus.delay,
        scale:0
    }).add({
        targets: '.custom-animation .letters-5',
        opacity: animeCus.opacityIn,
        scale: animeCus.scaleIn,
        duration: animeCus.durationIn
    }).add({
        targets: '.custom-animation .letters-5',
        opacity: 0,
        scale: animeCus.scaleOut,
        duration: animeCus.durationOut,
        easing: "easeInExpo",
        delay: animeCus.delay,
        scale:0
    }).add({
        targets: '.custom-animation .letters-6',
        opacity: animeCus.opacityIn,
        scale: animeCus.scaleIn,
        duration: animeCus.durationIn
    }).add({
        targets: '.custom-animation .letters-6',
        opacity: 0,
        scale: animeCus.scaleOut,
        duration: animeCus.durationOut,
        easing: "easeInExpo",
        delay: animeCus.delay,
        scale:0
    }).add({
        targets: '.custom-animation',
        opacity: 0,
        duration: 500,
        delay: 600
    });