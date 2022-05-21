$(function(){
    fetch('resources/footer.html').then(response => response.text().then(html => $("#footer").append(html)));
    fetch('resources/navbar.html').then(response => response.text().then(html => $("#navbar").append(html)));
    fetch('resources/objects.html').then(response => response.text().then(html => htmlObjects = html));
    
    $.get("resources/objects.html", data => {
        $("*[data-object]").each(function(){
            let object = $(this).data("object");
            console.log(object);
            $(this).append($(`#${object}`, data).html());
        });
    });
});
