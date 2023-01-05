var past = [];
var future = [];
function getPortals(){
    $.ajax({
        dataType: 'json',
        url: 'https://api.airtable.com/v0/appumSNCmsdTpTJ9m/portals?maxRecords=300&view=Grid%20view',
        headers: {
            'Authorization': 'Bearer keyhOi0FXnmVlQcS8'
        },
        success: function(response, status, xhr) {
            // clear the lists
            past = [];
            future = [];
            response['records'].forEach((element) => {
                if (element.fields['past'] != undefined) {
                    past.push(element.fields['past']);
                }
                if (element.fields['future'] != undefined) {
                    future.push(element.fields['future']);
                }
            })
            updateLists();
        }
    });
}
function updateLists() {
    $("#past-list").html('');
    $("#past-list-mobile").html('');
    past.slice().reverse().forEach((element) => {
        $("#past-list").html($("#past-list").html() + '<li>' + element + '</li>');
        $("#past-list-mobile").html($("#past-list-mobile").html() + '<li>' + element + '</li>');
    });
    $("#future-list").html('');
    $("#future-list-mobile").html('');
    future.slice().reverse().forEach((element) => {
        $("#future-list").html($("#future-list").html() + '<li>' + element + '</li>');
        $("#future-list-mobile").html($("#future-list-mobile").html() + '<li>' + element + '</li>');
    });
    // ambient twinkling look
    $("#past-list > li").each(function () {
        $(this).css("animation", "blinker " + (Math.random() * (10 - 3) + 3) + "s infinite")
    });
    $("#future-list > li").each(function () {
        $(this).css("animation", "blinker " + (Math.random() * (10 - 3) + 3) + "s infinite")
    });
    $("#past-list-mobile > li").each(function () {
        $(this).css("animation", "blinker " + (Math.random() * (10 - 3) + 3) + "s infinite")
    });
    $("#future-list-mobile > li").each(function () {
        $(this).css("animation", "blinker " + (Math.random() * (10 - 3) + 3) + "s infinite")
    });
}
var current = 1;
var secondPortal = true;
function nextPortal() {
    // fade in images consecutively
    if (secondPortal) {
        $('#top-img-2').attr('src', 'img/portal/portal' + current + '.png');
        $('#img-portal-mobile-2').attr('src', 'img/portal/portal' + current + '.png');
        $('#img-portal-mobile-1').fadeOut(2000);
        $('#top-img-1').fadeOut(2000);
        secondPortal = false;
        current = (current < 20 - 1) ? current + 1 : 1;
    } else {
        $('#top-img-1').attr('src', 'img/portal/portal' + current + '.png');
        $('#img-portal-mobile-1').attr('src', 'img/portal/portal' + current + '.png');
        $('#img-portal-mobile-1').fadeIn(2000);
        $('#top-img-1').fadeIn(2000);
        secondPortal = true;
        current = (current < 20 - 1) ? current + 1 : 1;
    }
    $('#img-portal-mobile').attr('src', 'img/portal/portal' + current + '.png');
}

$("#portal-past-mobile").click(function() {
    if ($("#mobile-col-past").is(":visible")) {
        // only show main page in middle col
        $("#mobile-col-main").show();
        $("#mobile-col-future").hide();
        $("#mobile-col-past").hide();
        // past word no longer underlined and back to inactive portal image + main portal animation appears
        $("#past-link").css("text-decoration", "none");
        $("#future-link").css("text-decoration", "none");
        $('#past-portal-mobile').attr('src', 'img/portal/portal-past-mobile.png');
        $('#img-portal-mobile-1').removeClass("hide");
        $('#img-portal-mobile-2').removeClass("hide");
        // change background color to black
        $("body").css('background-color', '#16161E');
        // show years on main page
        $(".fixed-year").show();
    } else {
        // only show past items in portal
        $("#mobile-col-main").hide();
        $("#mobile-col-future").hide();
        $("#mobile-col-past").show();
        // underline past word and add new portal image + remove main portal animation
        $("#past-link").css("text-decoration", "underline");
        $("#future-link").css("text-decoration", "none");
        $('#past-portal-mobile').attr('src', 'img/portal/portal-past-mobile-active.png');
        $('#img-portal-mobile-1').addClass("hide");
        $('#img-portal-mobile-2').addClass("hide");
        // change background color to purple
        $("body").css('background-color', '#561F55');
        // hide years from main page
        $(".fixed-year").hide();
    }
})
$("#portal-future-mobile").click(function() {
    if ($("#mobile-col-future").is(":visible")) {
        // only show main page in middle col
        $("#mobile-col-main").show();
        $("#mobile-col-past").hide();
        $("#mobile-col-future").hide();
        // future/past word no longer underlined and back to inactive portal image + main portal animation appears
        $("#future-link").css("text-decoration", "none");
        $("#past-link").css("text-decoration", "none");
        $('#future-portal-mobile').attr('src', 'img/portal/portal-future-mobile.png');
        $('#img-portal-mobile-1').removeClass("hide");
        $('#img-portal-mobile-2').removeClass("hide");
        // change background color to black
        $("body").css('background-color', '#16161E');
        // show years on main page
        $(".fixed-year").show();
    } else {
        // only show past items in portal
        $("#mobile-col-main").hide();
        $("#mobile-col-past").hide();
        $("#mobile-col-future").show();
        // underline future word and add new portal image + remove main portal animation
        $("#future-link").css("text-decoration", "underline");
        $("#past-link").css("text-decoration", "none");
        $('#future-portal-mobile').attr('src', 'img/portal/portal-future-mobile-active.png');
        $('#img-portal-mobile-1').addClass("hide");
        $('#img-portal-mobile-2').addClass("hide");
        // change background color to green
        $("body").css('background-color', '#293415');
        // hide years from main page
        $(".fixed-year").hide();
    }
})

getPortals();

setInterval(function(){
    getPortals();
}, 30000)

setInterval(nextPortal, 4000);
