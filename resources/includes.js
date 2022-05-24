$(function(){
    $.get("resources/objects.html", data => {
        $("[data-object]").each((index, obj) => {
            let object = $(obj).data("object");
            let h = $(data).filter(`.${object}`);
            $(obj).append(h);
        });
    });

    $('.sidebar-toggle').click(function(){
        $('.site').toggleClass('site-sidebar-close');
    });

    $("[data-link]").each((index, obj) =>{
        let data = $(obj).data("link");
        $.get(`projects/${data}`, get =>{
            var x = $("html").find("#");
            alert(x);

            obj.append(`
                <h3>${title}</h3>
                ${background}
                <p>${text}</p>
            `);
        });
    });
});
