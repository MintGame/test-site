$('.carousel').carousel({
    interval: 5000
})

$(document).ready(function(){
        //Скрыть PopUp при загрузке страницы
        PopUpHide();
    });
    //Функция отображения PopUp
    function PopUpShow(){
        $(".b-popup").css({
            'display': 'block'
        });
    }
    //Функция скрытия PopUp
    function PopUpHide(){
        $(".b-popup").css({
            'display': 'none'
        });
    }
