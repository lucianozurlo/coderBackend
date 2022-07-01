class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }
    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }
    addMascota(m) {
        this.mascotas.push(m)
        console.log(this.mascotas)
    }
    countMascotas() {
        console.log(this.mascotas.length)
    }
    addBook(nombre, autor) {
        this.libros.push({ nombre: nombre, autor: autor })
        console.log(this.libros)
    }
    getBookNames() {
        for (const libro of this.libros) {
            console.log(libro.nombre)
        }
    }
}

// Crear usuario1 e invocar todos sus métodos 
const usuario1 = new Usuario("Juan", "Perez")
usuario1.getFullName()
usuario1.addMascota("Roque")
usuario1.addMascota("Quinto")
usuario1.addMascota("Juanca")
usuario1.countMascotas()
usuario1.addBook("Mi planta de naranja lima", "José Mauro de Vasconcelos")
usuario1.addBook("Carrie", "Stephen King")
usuario1.getBookNames()

