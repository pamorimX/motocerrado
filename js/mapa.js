var map;

function initialize() {
    var myLatLng = new google.maps.LatLng(-10.1785318, -48.3617066);

    map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 14,
        center: myLatLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Moto Cerrado 2016',
        icon: 'img/marcador2.png'
    });

    var infowindow = new google.maps.InfoWindow(), marker;

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent("<b>Moto Cerrado do Tocantins - 2016</b>.<br><i>De 14 a 16 de Outubro</i>");
            infowindow.open(map, marker);
        }
    })(marker));
}

initialize();




//function carregarPontos() {
//    $.getJSON('js/pontos.json', function (pontos) {
//        $.each(pontos, function (index, ponto) {
//            var marker = new google.maps.Marker({
//                position: new google.maps.LatLng(ponto.Latitude, ponto.Longitude),
//                title: "Meu ponto personalizado! :-D",
//                map: map
//            });
//
//        });
//
//    });
//
//}
//carregarPontos();

