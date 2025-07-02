function login() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('login-message');
    if (password === 'sigitganteng') {
      window.location.href = 'monitoring.html';
    } else {
      message.textContent = 'Password salah';
    }
  }
  
  function toggleActuator(name) {
    const log = document.getElementById('log-list');
    const li = document.createElement('li');
    li.textContent = `Aktuator ${name} diklik pada ${new Date().toLocaleTimeString()}`;
    log.appendChild(li);
  }
  
  // Simulasi nilai sensor
  setInterval(() => {
    if (document.getElementById('sensor1')) {
      document.getElementById('sensor1').textContent = Math.floor(Math.random() * 100);
      document.getElementById('sensor2').textContent = Math.floor(Math.random() * 100);
      document.getElementById('sensor3').textContent = Math.floor(Math.random() * 100);
    }
  }, 2000);
