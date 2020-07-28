//Adding in Google Maps API (Code taken From Google's Website)
//Map should not be dark as I added billing information

(function (exports) {
    "use strict";

    function initMap() {
        var myLatLng = {
            lat: 44.3742360,
            lng: -79.6980166
        };
        exports.map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 44.4121,
                lng: -79.6668
            },
            zoom: 11
        });

        //Adding markers to show where I can complete these chores
        var carWash = new google.maps.Marker({
            map: map,
            position: {
                lat: 44.3742360,
                lng: -79.6980166
            }
        });

        var georgianCollege = new google.maps.Marker({
            map: map,
            position: {
                lat: 44.4117,
                lng: -79.6668
            }
        });
        var home = new google.maps.Marker({
            map: map,
            position: {
                lat: 44.4471,
                lng: -79.7302
            }
        });
        var warlmart = new google.maps.Marker({
            map: map,
            position: {
                lat: 44.4109,
                lng: -79.7112
            }
        });
    }

    exports.initMap = initMap;
})((this.window = this.window || {}));