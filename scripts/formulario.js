let alojarInformacion = 0;
var boton_Enviar =document.getElementById('survey_form')

boton_Enviar.addEventListener('submit',function(e){
    e.preventDefault()
    const input_Nombre = document.querySelector('#nombre').value
    let input_apellido = document.querySelector('#apellido').value
    const input_telee = document.querySelector('#numeroTel').value
    let direetc = document.getElementById('direccion').value
    const datos = {nombre : input_Nombre,apellido :input_apellido,numeroTel :input_telee,direccion :direetc,}
    condicional()
    alojarInformacion.push(datos);
    console.log(alojarInformacion)
} )

const condicional = ()=>{
    if(localStorage.getItem("datos_Usu") === null){
        alojarInformacion = []
    }
}
