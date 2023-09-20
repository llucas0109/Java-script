let amigo={nome:'jose',
sexo:'M',
Peso:87,
engordar(p=0){
    console.log('engordou')
    this.Peso += p 
}}
amigo.engordar(4)
console.log(`O ${amigo.nome} pesa ${amigo.Peso}`)