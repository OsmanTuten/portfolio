window.onload = function() {
    $('.loading').fadeOut(500);
}

$(document).ready(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 0);


    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom-500 <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function() {
        $('.image-left-side').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('left-to-right');
                $(this).removeClass('invisible');
            }
        });
        $('.image-right-side').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('right-to-left');
                $(this).removeClass('invisible');
            }
        });
    });
});


$(document).ready(function() {
    
    var openPopup = function(){
        var parentNode4 = this.parentNode.parentNode.parentNode.parentNode
        var popup = parentNode4.getElementsByClassName("pop-up")[0]
        popup.classList.add('visible')
        
        $('body').css('overflow', 'hidden')
    };

    var closePopup = function(){
        var parentNode4 = this.parentNode.parentNode.parentNode.parentNode
        var popup = parentNode4.getElementsByClassName("pop-up")[0]
        popup.classList.remove('visible')
        
        $('body').css('overflow', 'auto')
    };

    let myBtns=document.querySelectorAll('.open-pop-up');

    for (var i = 0; i < myBtns.length; i++) {
        myBtns[i].addEventListener('click', openPopup, false);
    }

    let myBtnsc=document.querySelectorAll('.close-button');

    for (var i = 0; i < myBtnsc.length; i++) {
        myBtnsc[i].addEventListener('click', closePopup, false);
    }


})






