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
    past.slice().reverse().forEach((element) => {
        $("#past-list").html($("#past-list").html() + '<li>' + element + '</li>');
    });
    $("#future-list").html('');
    future.slice().reverse().forEach((element) => {
        $("#future-list").html($("#future-list").html() + '<li>' + element + '</li>');
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
    current = (current < 20 - 1) ? current + 1 : 1;
}

getPortals();

setInterval(function(){
    getPortals();
}, 30000)

setInterval(nextPortal, 4000);
