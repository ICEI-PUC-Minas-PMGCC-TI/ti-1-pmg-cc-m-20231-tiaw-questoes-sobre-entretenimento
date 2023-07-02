let users = [
    {
      id: 1,
      nome: "João",
      sobrenome: "Silva",
      email: "joao.silva@gmail.com",
      senha: "123456",
      data_nascimento: "1990-01-01",
      sexo: "masculino"
    },
    {
      id: 2,
      nome: "Maria",
      sobrenome: "Santos",
      email: "maria.santos@hotmail.com",
      senha: "abcdef",
      data_nascimento: "1995-05-10",
      sexo: "feminino"
    }
  ];
  
  function listarUsuarios() {
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      console.log(`ID: ${user.id}, Nome: ${user.nome} ${user.sobrenome}, Email: ${user.email}, Data de Nascimento: ${user.data_nascimento}, Sexo: ${user.sexo}`);
    }
  }
  
  function adicionarUsuario(user) {
    user.id = users.length + 1;
    users.push(user);
    console.log("Usuário adicionado com sucesso!");
  }
  
  function atualizarUsuario(id, user) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users[i] = user;
        console.log("Usuário atualizado com sucesso!");
        return;
      }
    }
    console.log("Usuário não encontrado!");
  }
  
  function excluirUsuario(id) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1);
        console.log("Usuário excluído com sucesso!");
        return;
      }
    }
    console.log("Usuário não encontrado!");
  }
  
  listarUsuarios();
  adicionarUsuario({nome: "Pedro", sobrenome: "Souza", email: "pedro.souza@gmail.com", senha: "ghijkl", data_nascimento: "1985-11-20", sexo: "masculino"});
  listarUsuarios();
  atualizarUsuario(2, {id: 2, nome: "Maria", sobrenome: "Santos", email: "maria.santos@outlook.com", senha: "abcdef", data_nascimento: "1995-05-10", sexo: "feminino"});
  listarUsuarios();
  excluirUsuario(1);
  listarUsuarios();
  