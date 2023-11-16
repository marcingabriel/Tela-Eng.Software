  // Lista para armazenar as reservas
  var reservas = [];
  var hourSelected;

  function criarCards() {
    // Função para criar os cards com horários
    const horarios = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
    const container = document.getElementById('horariosContainer');

    horarios.forEach(horario => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = `${horario}`;
        card.onclick = function() {
            selecionarHorario(horario);
        };
        container.appendChild(card);
    });
}

  function selecionarHorario(horario) {
      // Função para selecionar o horário
      // Você pode adicionar lógica aqui se necessário
      hourSelected = horario;
      console.log(`Horário selecionado: ${horario}`);
  }
  function getHour(){
      return hourSelected;
  }

  function reservarSala() {
      // Função para reservar a sala
      console.log(getHour());
      // throw "osi"
      const data = document.getElementById('data').value;
      // throw data;
      const lab = document.getElementById('lab').value;
      const horarioSelecionado = getHour();
      // throw "osi"
      if (!data || !lab || !horarioSelecionado) {
          alert('Por favor, preencha todos os campos.');
          return false;
      }

      // const horario = horarioSelecionado.textContent;
      const reserva = { data, lab, horarioSelecionado };
      // throw "oi"
      reservas.push(reserva);
      // throw "oi"
      localStorage.setItem('reservas', JSON.stringify(reservas));
      // Lógica adicional, se necessário
      console.log('Reserva realizada:', reserva);
      // throw "oi"
      // return true;
  }

  // Chama a função ao carregar a página


  // Função para redirecionar para a página de salas reservadas
  function verReservas() {
      window.location.href = 'minhas_reservas.html';
  }