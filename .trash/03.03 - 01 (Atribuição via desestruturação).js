const usuarios = [
    {
      nome: "Alice",
      idade: 28,
      enderecos: [
        { cidade: "São Paulo", estado: "SP", cep: "01000-000" },
        { cidade: "Rio de Janeiro", estado: "RJ", cep: "20000-000" }
      ]
    },
    {
      nome: "Bruno",
      idade: 34,
      enderecos: [
        { cidade: "Belo Horizonte", estado: "MG", cep: "30000-000" },
        { cidade: "Curitiba", estado: "PR", cep: "80000-000" }
      ]
    },
    {
      nome: "Carla",
      idade: 22,
      enderecos: [
        { cidade: "Salvador", estado: "BA", cep: "40000-000" }
      ]
    }
  ];

let [{nome: nomeAlice, idade: idadeAlice}] = usuarios
let [  , {enderecos: [  , {cidade: cidadeBruno, estado: estadoBruno, cep: cepBruno}]}] = usuarios
let [  ,   , {enderecos: [{estado: estadoCarla, cep: cepCarla}]}] = usuarios

function dados(usuarios) {
    for(let i = 0; i < usuarios.length; i++){
        let { nome, idade, enderecos: [{ cidade, estado }] } = usuarios[i];

        console.log(`Nome: ${nome}, Idade: ${idade}, Cidade Principal: ${cidade}, Estado Principal: ${estado}`)
    }
}

console.log(`USER 01: Nome: ${nomeAlice}, Idade: ${idadeAlice}
    `)
console.log(`USER 02:Cidade: ${cidadeBruno}, Estado: ${estadoBruno}, CEP: ${cepBruno}
    `)
console.log(`USER 03: Estado: ${estadoCarla}, CEP: ${cepCarla}
    `)

dados(usuarios)