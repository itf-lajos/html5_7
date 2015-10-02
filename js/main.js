// Egyedi azonosító.
var userId = "user_75654356";

// Űrlap küldése.
function proccessForm( btn ) {
    // Gomb.
    var btn = $(btn);
    
    // Űrlap kiválasztása.
    var form = btn.parents( "form" );
    
    // Mentjük a beviteli mezők értékeit.
    var data = {};
    form.find( "input" ).each( function( index, input) {
        data[input.name] = input.value;
//        console.log(input);
    } );
    
    // Objektum, amit elküldünk a szerverre.
    var serverObj = {
        "user": userId,
        "data": data
    }
    
    // Post indítása.
    $.post( "http://37.139.16.100:3000", JSON.stringify(serverObj), function( response ) {
        console.log( response)
    });
    
    console.log(serverObj);

    return false;
}

// Adatok visszakérdezése a szerverről.
function getData() {
    $.getJSON( "http://37.139.16.100:3000/" + userId, function( response ) {
        console.log( response);

        // Űrlap kiválasztása.
        var form = $(".reg-form");

        form.find("input").each(function( index, input) {
            var name = input.name;
            if ( response[name] ) {
                input.value = response[name];
            }
        });
    });
        
}
