const area = document.getElementById("area");

const entrar = () => {
  const nome = prompt("Digite seu nome");

  if (nome === "" || nome === null) {
    alert("Ops, algo deu errado...");
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
  area.innerHTML = "Voce saiu...";
}
