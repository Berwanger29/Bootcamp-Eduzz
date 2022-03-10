// function soma(a: number, b:number){
//     console.log(a + b)
// }
// soma(2, 3)



// INTERFACE
// interface Animal{
//     nome: string;
//     tipo: 'terrestre' | 'aquatico';
//     executarRugido(volumeSom: number): void
// }



// interface Felinos extends Animal{
//     visaoNoturna:boolean;
// }


// const animal :Animal = {
//     nome:'Elefante',
//     tipo:"terrestre",
//     executarRugido: (volumeSom)=>(`${volumeSom}db`)
// }
// animal.executarRugido(2)

// const gato :Felinos = {
//     nome:'Leao',
//     tipo:"terrestre",
//     visaoNoturna: true,
//     executarRugido: (volumeSom) => (console.log(volumeSom)+'db')
// }





//TYPE
// usando para definir o tipo de uma estrutura de dados, no exemplo abaixo
// o tipo Domestico pode receber as interfaces de Canino ou Felino
// type Animal = {
//     nome:string;
//     tipo:'terrestre' | 'aquatico';
//     domestico: boolean;
// }

// interface Felino extends Animal{
//     visaoNoturna:boolean;
// }

// interface Canino extends Animal{
//     porte:'pequeno' |'medio'| 'grande'
// }

// type Domestico = Felino | Canino

// const animal: Domestico = {
//     domestico: true,
//     nome:'Cachorro',
//     porte:"medio",
//     tipo:"terrestre",
//     visaoNoturna:false
// }

//INPUT HTML
// let input = document.getElementById('input') as HTMLInputElement;
// input.addEventListener('input',(event)=>{
//     const i = event.currentTarget as HTMLInputElement;
//     console.log(i.value)
// })



//GENERIC TYPES
// function addAppendLista<NaoSei>(arr: NaoSei[], value:NaoSei){
//     return arr.map(()=> value)
// }
// addAppendLista([1,2,3],1)


// interface Usuario{
//     id:string;
//     email:string;
//     cargo?:'funcionario'| 'gerente'| 'coordenador' | 'supervisor';
// }

// function redirect(usuario: Usuario){
//     if(usuario.cargo === 'funcionario'){
//         console.log('funcionario')
//     }
//     else {
//         console.log('não funcionario')
//     }
// }
// let user = {
//     id:'Vinicius',
//     email:'email',
//     cargo:'gerente'
// }

// redirect(user)