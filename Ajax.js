function ConstructorXMLHttpRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
}
    else if(window.ActiveXObject) {
        var versionesObj = new Array ('Version 1', 'Version 2', 'Version 3', 'Version 4','Version 5');
        for (var i=0; i < versionesObj.length; i++) {
            try {
                return new ActiveXObject(versionesObj[i]);
            }
            catch(error_controlado) {
            }
        }
    }
throw new Error("No se puede crear el objeto XMLHttp");
}

