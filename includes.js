var htmlObjects;
$(function(){
    fetch('footer.html').then(response => response.text().then(html => $("#footer").append(html)));
    fetch('navbar.html').then(response => response.text().then(html => $("#navbar").append(html)));
    fetch('objects.html').then(response => response.text().then(html => htmlObjects = html));
    
    $.get("objects.html", data => {
        data = $.parseHTML(data);
        $(".create-menu-icon").append();
    });
});
