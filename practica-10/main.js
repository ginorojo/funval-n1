let tarjeta= document.querySelector(".card")

async function fetchUsers() {
    try{
        const response= await fetch("https://jsonplaceholder.typicode.com/users")
        const datos = await response.json()
        console.log(datos)
        datos.forEach(element => {
            tarjeta.innerHTML+= `
            <div class="w-[300px] h-[120px] pl-1 bg-[#D2D0A0] rounded-lg flex flex-col justify-center">
            <h3><strong>Nombre:</strong> ${element.name}</h3>
            <p><strong>Usuario:</strong> ${element.username}</p>
            <p> <strong>Email:</strong> ${element.email}</p>
            <p> <strong>Empresa:</strong> ${element.company.name}</p>
            </div>
        
            `
            
        });

    }
    catch(error){
        console.log("Error al cargar los usuarios. Inténtalo de nuevo más tarde.")

    }
    

}

fetchUsers()