function myFunction() {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;
    
        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');
    
            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };
    
    function formatText(bookings){
    if('BARbookings' === 'FreeUntil')
        return 'Free until'
    if('BARbookings' === 'BookedUntil')
        return 'Booked until'
    };
    
    var humidity = getUrlParameter('humidity');
    var temp = getUrlParameter('temp');
    var ambientnoise = getUrlParameter('ambientnoise');
    var name = getUrlParameter('name');
    var airquality = getUrlParameter('airquality');
    var pccur = getUrlParameter('pccur');
    var peoplecount = getUrlParameter('peoplecount');
    var sound = getUrlParameter('sound');
    var ppresence = getUrlParameter('ppresence');
    var bookings = getUrlParameter('bookings');
    var bookingstime = getUrlParameter('bookingstime');
    
    document.getElementById("NAVhumidity").innerHTML = humidity;
    document.getElementById("NAVtemp").innerHTML = temp;
    document.getElementById("BARambientnoise").innerHTML = ambientnoise;
    document.getElementById("BARname").innerHTML = name;
    document.getElementById("NAVairquality").innerHTML = airquality;
    document.getElementById("BARpeoplecount").innerHTML = peoplecount;
    document.getElementById("BARsound").innerHTML = sound;
    document.getElementById("BARppresence").innerHTML = ppresence;
    document.getElementById("BARbookings").innerHTML = bookings;
    document.getElementById("BARbookingstime").innerHTML = bookingstime;

    }
