App.Events = (function(lng, app, undefined) {  
    lng.Dom.Event.live("#opennav", "TAP", function(){
        var aparts = new Array();
        var liStr = '';
        aparts = app.Data.getApartments();
    
        for (i in aparts){
            alert(aparts[i]);
        //        liStr += '<li>'+aparts[i]+'</li>'
        }
    });
    return {

    }

})(LUNGO, App);