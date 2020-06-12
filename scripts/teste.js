const carregador = [
    {cor: 1, tamanho: 1},
    {cor: 2, tamanho:2},
    {cor: 1, tamanho: 1},
]

const items = carregador.filter(celular => celular.tamanho === 1);

console.log(items)

const pessoas = [
    {key: 1, name: 'Meu nome', age: 21, height: 1},
    {key: 2, name: 'Outro nome', age: 21, height: 2},
    {key: 3, name: 'Fulano', age: 22, height: 3},
    {key: 3, name: 'Bertano', age: 19, height: 4},
    ];

  // 1º Método FILTER: Serve para filtrar informações:

    const filted = pessoas.filter((itemDoMomento) => itemDoMomento.age === 21);
    console.table(filted);

  // 2º Método push: sever para adicionar um item no final do array
    pessoas.push({key: 1, name: 'Meu nome', age: 21, height: 1});
    console.log(pessoas);

  // 3º Método pop: Serve para remover o último item do array
    const removeItem = pessoas.pop();
    console.log(removeItem, pessoas);

  // 4º Método pop: Serve para adicionar no início do array
    const adicionarNoInicio = pessoas.unshift();
    console.log(adicionarNoInicio);

  // 5º Método map: Serve para percorrer e modificar um resultado desse item do array
    const multiplicarAltura = pessoas.map(
    (itemDoMomento) => itemDoMomento.height * itemDoMomento.age,
    );

    console.log(multiplicarAltura);

  // Array: É uma lista de informações que podem ser percorridas
  // JSON = 'JavaScript Object Notation'
