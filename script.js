const form = document.getElementById("formContato");
const status = document.getElementById("mensagemStatus");

form.addEventListener("submit", function (event) {
  event.preventDefault(); //Impede recarregar a página ao enviar o formulário

  //Pega os valores dos campos do formulário
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  //Valida os campos do formulário
  if (!nome || !email || !mensagem) {
    status.textContent = "Por favor, preencha todos os campos.";
    status.style.color = "red";
    return;
  }

  //Valida o formato do email
  if (!email.includes("@") || !email.includes(".")) {
    status.textContent = "Por favor, insira um email válido.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Mensagem enviada com sucesso!";
  status.style.color = "green";
  form.reset(); //Limpa os campos do formulário
});

function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

//Função de mensagem na tela
function mostrarMensagem(texto, tipo) {
    status.innerHTML = ` <p class="${tipo}">${texto}</p>`;       
}

//Menu Mobile

const menuToggle = document.getElementById("menuToggle");
const menuLista = document.getElementById("menuLista");

menuToggle.addEventListener("click", () => {
  menuLista.classList.toggle("ativo");
});
 
// Fecha o menu automaticamente ao clicar em um link (no mobile)
menuLista.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuLista.classList.remove("ativo");
  });
});
 
// TEMA CLARO / ESCURO
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
 
// Verifica se o usuário já tinha escolhido um tema antes (salvo no navegador)
if (localStorage.getItem("tema") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}
 
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
 
  if (body.classList.contains("dark")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("tema", "dark");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("tema", "light");
  }
});