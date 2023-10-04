
let h5Content = $("#HD_1").text();
let count = 0;
let loaded = false;
let h1Content = $("#HD_2").text();
let count2 = 0;
let h6Content = $("#HD_3").text();
let count3 = 0;


function animateText() {
    let content = h5Content.substring(0, count);
    $("#HD_1").text(content);
    count++;
    if (count == h5Content.size) {
        count = 0;
    }
    if (count > h5Content.length) {
        loaded = true;
    }

    let content2 = h1Content.substring(0, count2);
    $("#HD_2").text(content2);
    if (loaded) {
        count2++;
        if (count2 == h1Content.size) {
            count2 = 0;
        }
    }
    console.log(loaded)

    if (count2 > h1Content.length) {
        loaded = true;
    }
    let content3 = h6Content.substring(0, count3);
    $("#HD_3").text(content3);
    if (loaded) {
        count3++;
        if (count3 == h6Content.size) {
            count3 = 0;
        }
    }
    console.log(loaded)

}

if (loaded != true) {
    setInterval(animateText, 200);
}

$(function () {

// Rotate Skill Badges
    var $badges = $(".amg-badge img");

    function rotateBadge(passedBadge, speed) {
        var rotateSpeed = speed / 180,
            current = 0;

        function badgeRotation(passedBadge) {
            current = (current == 90) ? 271 : current + 1;

            passedBadge.css({
                "-webkit-transform": "rotate3d(0,1,0," + current + "deg)",
                "-moz-transform": "rotate3d(0,1,0," + current + "deg)",
                "transform": "rotate3d(0,1,0," + current + "deg)"
            });

            if (current === 360) {
                clearInterval(rotateInterval);
                passedBadge.removeAttr('style').removeClass('spinning');
            }
        }

        var rotateInterval = setInterval(function () {
            badgeRotation(passedBadge)
        }, rotateSpeed);
    }

    $badges.mouseenter(function () {
        if ($(this).hasClass('spinning')) {
            return false;
        } else {
            rotateBadge($(this), 500);
            $(this).addClass('spinning');
        }
    });

});
