window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
function openNavbar() {
    document.querySelector("#navbar").style.width = "100%";
    document.querySelectorAll(".open")[0].style.opacity = 0;
}
function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelectorAll(".open")[0].style.opacity = 1;
}
$(window).load(function () {
    $(".arc").fadeOut();
    $(".options").delay(2000).fadeOut("slow");
});
function scrollFooter(scrollY, heightFooter)
{
    console.log(scrollY);
    console.log(heightFooter);
    if(scrollY >= heightFooter)
    {
        $('footer').css({
            'bottom' : '0px'
        });
    }
    else
    {
        $('footer').css({
            'bottom' : '-' + heightFooter + 'px'
        });
    }
}
$(window).load(function(){
    let windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;
    // Definindo o tamanho do elemento pra animar
    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });
    // Definindo o tamanho dos elementos header e conteúdo
    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });
    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });
    scrollFooter(window.scrollY, footerHeight);
    // ao dar rolagem
    window.onscroll = function(){
        let scroll = window.scrollY;
        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
        $('header').css({
            'background-position-y' : 50 - (scroll * 100 / heightDocument) + '%'
        });
        scrollFooter(scroll, footerHeight);
    }
});
gsap.to("h1", {
    text: "MY PROJECTS",
    duration:3,
    repeatDelay:1,
    ease: "Power1.in",
    yoyo: true,
    delay: 1,
})
gsap.from('.arrow-left', { duration: 2, x: '-0.5vw', ease: 'power1.out', repeat:-1, })
