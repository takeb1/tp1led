function checkearEdad() {
  var fechaNacimiento = document.getElementById('fnacimiento').value;
  if (fechaNacimiento.length == 0 || /^\s+$/.test(fechaNacimiento)) {
      alert ('Debe ingresar su fecha de nacimiento.')
        return false;
      }
  var fechaNace = new Date(fechaNacimiento);
  var fechaActual = new Date();
  console.log(fechaNacimiento);
  var edad = fechaActual.getFullYear() - fechaNace.getFullYear();
  var mes = fechaActual.getMonth() - fechaNace.getMonth();
  if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaActual.getDate())) {
      edad--;
  }   
  console.log(edad)
  if(edad < 18){
      alert ('Debe ser mayor de edad para realizar esta acción.')
      return false
  }
  return true;
}

//funcion limite de caracteres
function countChars(obj){
  var maxLength = 500;
  var strLength = obj.value.length;
  var charRemain = (maxLength - strLength);
  
  if(charRemain < 0){
      document.getElementById("charNum").innerHTML = '<span style="color: red;">Se excedió los ' + maxLength + ' caracteres</span>';
  }else{
      document.getElementById("charNum").innerHTML = strLength+'/500  caracteres';
  }
}

//funcion validar vacio.
function validar() {
  //validar nombre y apellido.
  var nombreApellido = document.getElementById("nomape").value;
  //la condición.
  if (nombreApellido.length == 0 || /^\s+$/.test(nombreApellido)) {
    alert('Debe ingresar su nombre y apellido.');
      return false;
    }

  //validar dni.
  var dni = document.getElementById("dni").value;
  //la condicion.
  if (dni.length == 0 || /^\s+$/.test(dni)) {
    alert ('Debe ingresar su DNI.')
      return false;
    }

  //validar fecha de nacimiento.
  var fechaNacimiento = document.getElementById('fnacimiento').value;
  //la condicion.
  if (fechaNacimiento.length == 0 || /^\s+$/.test(fechaNacimiento)) {
      alert ('Debe ingresar su fecha de nacimiento.')
        return false;
      }
  var fechaNace = new Date(fechaNacimiento);
  var fechaActual = new Date();
  console.log(fechaNacimiento);
  var edad = fechaActual.getFullYear() - fechaNace.getFullYear();
  var mes = fechaActual.getMonth() - fechaNace.getMonth();
  if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaActual.getDate())) {
      edad--;
  }   
  console.log(edad)
  if(edad < 18){
      alert ('Debe ser mayor de edad para realizar esta acción.')
      return false
  }

  //validar direccion.
  var direccion = document.getElementById("direccion").value;
  //la condicion.
  if (direccion.length == 0 || /^\s+$/.test(direccion)) {
    alert ('Debe ingresar su domicilio.')
      return false;
    }

  //validar telefono.
  var telefono = document.getElementById("telefono").value;
  //la condicion.
  if (telefono.length == 0 || /^\s+$/.test(telefono)) {
    alert ('Debe ingresar su número de telefono.')
      return false;
    }

  //validar correo electronico.
  var correo = document.getElementById("correo").value;
  //la condicion.
  if (correo.length == 0 || /^\s+$/.test(correo)) {
    alert ('Debe ingresar su correo electronico.')
      return false;
    }

  //validar textarea.
  var textarea = document.getElementById("textarea").value;
  //la condicion.
  if (textarea.length == 0 || /^\s+$/.test(textarea)) {
    alert ('Debe ingresar contenido en la carta de presentación.')
      return false;
    }
    return true;
    }