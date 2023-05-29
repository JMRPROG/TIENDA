
// Realiza una solicitud a la API
fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data =>{
    // Manipula los datos recibidos de la API
    console.log(data); // Podes hacer lo que quieras con los datos aquí
    
    // Ejemplo: Agrega los nombres de los productos a la página
    const contenedorPrincipal = document.querySelector('.contenedor-principal');
    data.forEach(producto => {
      const nombreProducto = document.createElement('p');
      nombreProducto.textContent = producto.name;
      contenedorPrincipal.appendChild(nombreProducto);
    });
  })
  .catch(error => {
    // Maneja el error en caso de que ocurra
    console.error('Ha ocurrido un error:', error);
  });
