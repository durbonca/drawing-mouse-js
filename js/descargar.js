var canvasDownload = document.getElementById("area_de_dibujo");
function descargar(){
  var filename = prompt("Guardar como...","Nombre del archivo");
    if (canvasDownload.msToBlob){ //para internet explorer
        var blob = canvasDownload.msToBlob();
        window.navigator.msSaveBlob(blob, filename + ".jpeg" );// la extensión de preferencia pon jpg o png
    } else {
        link = document.getElementById("download");
        //Otros navegadores: Google chrome, Firefox etc...
        link.href = canvasDownload.toDataURL("image/jpeg");// Extensión .png ("image/png") --- Extension .jpg ("image/jpeg")
        link.download = filename;
    }
}
