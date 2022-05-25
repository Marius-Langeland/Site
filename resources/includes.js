var counter = 0;

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
                        <p>${desc}</p>`;
            $(obj).append(node)
            let folder = data.substring(0, data.lastIndexOf("/")+1);
            bg = bg.includes("www") ? bg : folder + bg;
            $(obj).css("background-image", `url("${bg}")`);
        });

        $(obj).click(function(){
            $("iframe").attr("src", `${data}`);
            if(counter == 0){
                $(".site").addClass("site-sidebar-close")
                counter++;
            }
        });
    });
});
