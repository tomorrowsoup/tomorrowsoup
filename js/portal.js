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
}
var current = 1;
function nextPortal() {
    // $("#img-portal").fadeTo(100, 0.8, function() {
    //     $('#img-portal').attr('src', 'img/portal/portal' + current + '.png');
    //     $("#img-portal").on('load', function(){
    //       $("#img-portal").fadeTo(50,1);
    //     });
    //    });
    $('#top-img').attr('src', 'img/portal/portal' + current + '.png');
    $('#img-portal-mobile').attr('src', 'img/portal/portal' + current + '.png');
    current = (current < 20 - 1) ? current + 1 : 1;
}

$("#portal-past-mobile").click(function() {
    if ($("#mobile-col-past").is(":visible")) {
        // only show main page in middle col
        $("#mobile-col-main").show();
        $("#mobile-col-future").hide();
        $("#mobile-col-past").hide();
        // past word no longer underlined and back to inactive portal image
        $("#past-link").css("text-decoration", "none");
        $('#past-portal-mobile').attr('src', 'img/portal/portal-past-mobile.png');
        // change background color to black
        $("body").css('background-color', '#16161E');
        // show years on main page
        $(".fixed-year").show();
    } else {
        // only show past items in portal
        $("#mobile-col-main").hide();
        $("#mobile-col-future").hide();
        $("#mobile-col-past").show();
        // underline past word and add new portal image
        $("#past-link").css("text-decoration", "underline");
        $('#past-portal-mobile').attr('src', 'img/portal/portal-past-mobile-active.png');
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
        // future word no longer underlined and back to inactive portal image
        $("#future-link").css("text-decoration", "none");
        $('#future-portal-mobile').attr('src', 'img/portal/portal-future-mobile.png');
        // change background color to black
        $("body").css('background-color', '#16161E');
        // show years on main page
        $(".fixed-year").show();
    } else {
        // only show past items in portal
        $("#mobile-col-main").hide();
        $("#mobile-col-past").hide();
        $("#mobile-col-future").show();
        // underline past word and add new portal image
        $("#future-link").css("text-decoration", "underline");
        $('#future-portal-mobile').attr('src', 'img/portal/portal-future-mobile-active.png');
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
