// Filtro de Especialistas
function filtrar() {
    const especialidadeAlvo = document.getElementById('filter-specialty').value.toLowerCase();
    const planoAlvo = document.getElementById('filter-plan').value.toLowerCase();
    const cards = document.querySelectorAll('.doctor-card');

    cards.forEach(card => {
        // Pega os dados que inserimos no HTML (data-specialty e data-plans)
        const especialidadesDoCard = card.getAttribute('data-specialty').toLowerCase();
        const planosDoCard = card.getAttribute('data-plans').toLowerCase();

        // Verifica se o texto selecionado existe nos dados do card
        const matchEspecialidade = especialidadeAlvo === "" || especialidadesDoCard.includes(especialidadeAlvo);
        const matchPlano = planoAlvo === "" || planosDoCard.includes(planoAlvo);

        if (matchEspecialidade && matchPlano) {
            card.style.display = "flex";
        } 
        else {
            card.style.display = "none";
        }
    });
}

// Formulário "Sou Especialista"
document.getElementById('form-medico').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o F5 na página
    
    const nome = document.getElementById('nome-medico').value;
    alert(`Show de bola! O cadastro de ${nome} foi recebido. Em breve entraremos em contato.`);
    
    this.reset(); // Limpa os campos
});