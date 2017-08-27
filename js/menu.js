
$(document).ready(function () {
    
        $(".btn-menu a").click(function () {
            $(".overlay").fadeToggle(200);
            $(this).toggleClass('btn-open').toggleClass('btn-close');
        });
    
        $('.overlay').on('click', function () {
            $(".overlay").fadeToggle(200);
            $(".btn-menu a").toggleClass('btn-open').toggleClass('btn-close');
        });
    
        $('.menu a').on('click', function () {
            $(".overlay").fadeToggle(200);
            $(".btn-menu a").toggleClass('btn-open').toggleClass('btn-close');
        });
    
    });

    function myFunction(x) {
        x.classList.toggle("change");
    }