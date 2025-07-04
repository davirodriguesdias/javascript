let amigo = {
    nome: "Davi",
    sexo: 'M',
    peso: 64,
    engordar(p=0){
       this.peso += p
    }
}

amigo.engordar(2)

console.log(amigo.peso)