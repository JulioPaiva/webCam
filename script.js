function bater_foto(){
 	Webcam.snap(function(data_uri){
 		document.getElementById('results').innerHTML = '<img id="base64image" src="'+data_uri+'"/><button onclick="salvar_foto();">Upload desta Foto</button>';
 	});
}

function mostrar_camera(){
    Webcam.set({
        width: 640,
        height: 480,
        dest_width: 640,
        dest_height: 480,
        crop_width: 300,
        crop_height: 400,
        image_format: 'jpeg',
        jpeg_quality: 100,
        flip_horiz: true
	});
	
    Webcam.attach('#minha_camera');
}

// function salvar_foto(){
// 	document.getElementById("carregando").innerHTML="Salvando, aguarde...";
// 	var file = document.getElementById("base64image").src;
// 	var formdata = new FormData();
// 	formdata.append("base64image", file);
// 	var ajax = new XMLHttpRequest();
// 	ajax.addEventListener("load", function(event) { upload_completo(event);}, false);
// 	ajax.open("POST", "upload.php");
// 	ajax.send(formdata);
// }

function upload_completo(event){
	document.getElementById("carregando").innerHTML="";
	var image_return=event.target.responseText;
	var showup=document.getElementById("completado").src=image_return;
	var showup2=document.getElementById("carregando").innerHTML='<b>Upload feito:</b>';
}

window.onload= mostrar_camera;