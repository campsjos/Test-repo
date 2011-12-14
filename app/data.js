App.Data = (function(lng, app, undefined) {
    var getApartments = function(){
        var aparts = new Array();
        var url = 'http://localhost/proves/lungo/apartments/';
        var data = null;

        lng.Service.get(url, data, function(response) {
            return aparts;
        });
        
    };
    return {
        getApartments : getApartments
    }
    

})(LUNGO, App);