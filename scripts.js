// Entrar e sair da conta
// media do aluno
// aluno - nome e curso

const area = document.getElementById("area");

const entrar = () => {
  const nome = prompt("Digite seu nome: ");

  if (nome === "" || nome === null) {
    alert("Ops! Algo deu errado...");
    area.innerHTML = "Clique no botão e tente novamente...";
  } else {
    area.innerHTML = "Bem vindo " + nome + " ";

    let btnSair = document.createElement("button");
    btnSair.innerText = "Sair da conta";
    btnSair.onclick = sair;

    area.appendChild(btnSair);
  }
};

function sair() {
  alert("Até mais!");
  area.innerHTML = "Você saiu...";
}

const mediaAluno = (nota1, nota2) => {
  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
    console.log("Aluno aprovado com média: " + media);
  } else if (media < 7) {
    console.log("Aluno reprovado com média: " + media);
  }
};

const aluno = (nome, curso) => {
  const mensagem = "Bem vindo " + nome + " ao curso de " + curso;
  console.log(mensagem);
};
