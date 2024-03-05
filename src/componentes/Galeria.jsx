import MyCard from "./MyCard";

const Galeria = () => {
    const datos = [
        {
            imagen:"https://images.unsplash.com/photo-1631336988208-ab930b897e89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHBhc3RvciUyMGFsZW1hbnxlbnwwfHwwfHx8MA%3D%3D",
            nombre:"Centauro",
            descripcion:"Lleno de mucho amor tiene Centauro para dar, es muy sociable y fiel. Esta esperando un hogar para compartir su cariño.",
            color:"success",
            raza:"Pastor Aleman"
        },
        {
            imagen:"https://images.unsplash.com/photo-1629246999700-1e7ad7a1ba03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SHVza3klMjBTaWJlcmlhbm98ZW58MHx8MHx8fDA%3D",
            nombre:"Mickey",
            descripcion:"Es muy activo e inteligente, le encanta dar paseos largos. Se lleva bien con los niños. Hazlo parte de tu familia.",
            color:"danger",
            raza:"Husky Siberiano"
        },
        {
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuUJHRlZnCvh8l7PfAluXnDgRDAnFjMih0ZsweiNhdFDSW72F13SG9w8K2RLdik0P2ws&usqp=CAU",
            nombre:"Neron",
            descripcion:"Es un buen compañero para esos paseos en la tarde, le gusta los abrazos. Ayuda a Neron a encontar su hogar.",
            color:"primary",
            raza:"Alaskan Klee Kai"
        },
        {
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzmEiaEhlI1Zo2MDQ3RpymqXmRqfedRDA-BLciUWPpRoi4I12vy4cDwOjBa3tZdq6T9Y&usqp=CAU",
            nombre:"Alvi",
            descripcion:"Es tenaz, energico con mucha energia. Necesita a encontar un hogar.",
            color:"warning",
            raza:"Manchester Terrier"
        },
        {
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxIn6KFJngPhpd3HI7NBQB10sNVEMAeBRKiA&usqp=CAU",
            nombre:"Princesa",
            descripcion:"Es un amor y muy cariñosa, le gusta jugar mucho. Esta en busqueda de un hogar.",
            color:"info",
            raza:"Schauzer Miniatura"
        },
        {
            imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLJqH7XzQ4oaQIklKhftDmrSfaGTNg1NQ0Q&usqp=CAU",
            nombre:"Britney",
            descripcion:"Posee una gran inteligencia con un caracter excepcional y es una buena compañera en el hogar.",
            color:"dark",
            raza:"Golden Retriever"
        },
    ]
    return (
        <div className="container">
            <div className="row">
                {datos.map ((dato, index) => (
                    <div className="col-md-4 mt-3 text-center" key={index}>
                        <MyCard
                        imagen={dato.imagen}
                        nombre={dato.nombre}
                        descripcion={dato.descripcion}
                        color={dato.color}
                        raza={dato.raza}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Galeria;