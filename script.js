
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  // Alternar visibilidade do menu mobile
  menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    this.classList.toggle("active"); // Anima botão
  });

  // Fecha o menu ao clicar em um item
  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      menuBtn.classList.remove("active");
    });
  });

  // Rolagem suave para seções com compensação de navbar
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      }
    });
  });

  // Controle do formulário de contato
  const formContato = document.getElementById("formContato");
  if (formContato) {
    formContato.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const mensagem = this.querySelector("textarea").value;

      console.log("Formulário enviado:");
      console.log("Nome:", nome);
      console.log("Email:", email);
      console.log("Mensagem:", mensagem);

      alert("Mensagem enviada! Em breve entraremos em contato.");
      this.reset();
    });
  }
});
