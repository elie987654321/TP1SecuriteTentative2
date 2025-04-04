const CANADA_HINT = "CA";
const USA_HINT = "US";
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ipAddress = data.ip;

      document.getElementById('ip').innerText = "Adresse IP: " + ipAddress

      fetch(`https://api.country.is/${ipAddress}`)
        .then(response => response.json())
        .then(location => {
          document.getElementById('country').innerText = "Pays du visiteur: " + location.country;
          if(location.country !== CANADA_HINT) {
              document.getElementById('body').innerHTML = "";
            document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
          }
        })
        .catch(error => {
          console.error('Erreur lors de la récupération du pays:', error);
          document.getElementById('country').innerText = "Incapable de récupérer le pays"
        });
    })
    .catch(error => {
      console.error('Erreur lors de la récupération de l\'adresse ip:', error);
      document.getElementById('id').innerText = "Incapable de récupérer l'adresse ip"
    })
