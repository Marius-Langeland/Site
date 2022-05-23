$(function(){
    $.get("resources/objects.html", data => {
        $("*[data-object]").each((index, obj) => {
            let object = $(obj).data("object");
            let h = $(data).filter(`.${object}`);
            $(obj).append(h);
        });
    });

    $('.sidebar-toggle').click(function(){
        $('.site').toggleClass('site-sidebar-close');
    });
});
