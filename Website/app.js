const button = document.querySelector('#generate');
const input = document.querySelector('#zip');
const date = document.querySelector('#date');
const temperature = document.querySelector('#temp');
const content = document.querySelector('#content');

button.addEventListener('click', function() {
  fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + input.value + '&units=imperial&appid=8dabeb6bdd269e6310fb811ecbb3e87c')
    .then(response => response.json())
    .then(data => {
      const tempValue = data['main']['temp'].toFixed(0);
      const descValue = data['weather'][0]['description'];

      let d = new Date();

      temperature.innerHTML = tempValue + '℉';
      content.innerHTML = descValue;
      date.innerHTML = d.toDateString();
    })

    .catch(err => alert("Wrong Zip Code"))
})


const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch('', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header
      body: JSON.stringify(data),
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

  document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  const userFeelings = document.querySelector('#feelings').value
  document.getElementById('info').innerHTML = userFeelings;

postData('', {feeling: userFeelings}); }
