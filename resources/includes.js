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
        $.get(`${data}`, get =>{
            let title = $(get).find("#title").text();
            let bg = $(get).find("#background").attr("src");
            let desc = $(get).find("#desc").text();
            let node = `<h3>${title}</h3>
                        <img src="${bg}">
                        <p>${desc}</p>`

            $(obj).append(node);
        });

        $(obj).click(function(){
            $("iframe").attr("src", `${data}`);
            $(".site").addClass("site-sidebar-close")
        });
    });
});
