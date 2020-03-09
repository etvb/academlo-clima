const btnSwitch = document.querySelector('#switch');
const estadoBlack = document.getElementById('estado');
const estadoHtml = document.getElementById('estado');
const ciudadHtml = document.getElementById('prueba2');
// const ciudadBlack = document.getElementById("ora");



ultimaEntrada();


function ultimaEntrada(){
  //guarda y dibuja la ultima vez que se uso
  axios.get('http://api.openweathermap.org/data/2.5/weather?q='+localStorage.getItem('ciudad2')+'&appid=01ba69f16632f972aa1d53518621137c&units=metric&lang=es')
  .then(function (response){
    console.log(response.data);
    description = response.data.weather[0].description;
    icon = response.data.weather[0].icon;
    temp = response.data.main.temp;
    temp_min = response.data.main.temp_min;
    temp_max = response.data.main.temp_max;
    wind_speed = response.data.wind.speed;

    //si no tengo valor todo queda igual
    if(localStorage.getItem == 'null'){

    }else{
      estadoHtml.options[estadoHtml.selectedIndex].text = localStorage.getItem('estado');
      ciudadHtml.options[ciudadHtml.selectedIndex].text = localStorage.getItem('ciudad2');

    }
    
    
    if(localStorage.getItem('dark-mode')== 'true'){
      document.body.classList.add('dark');
      btnSwitch.classList.add('active');
    }else{
      document.body.classList.remove('dark');
      btnSwitch.classList.remove('active');
    }
    
    iconoMainClima();
    descriptionClima();
    vientoIcono();
    tempMinima();
    tempMax();
  })
}







function ciudad(){
  let combo = document.getElementById("ciudad");
  let seleccionNameCiudad = combo.options[combo.selectedIndex].text;
  console.log(seleccionNameCiudad);
  localStorage.setItem('ciudad2', seleccionNameCiudad);

  axios.get('http://api.openweathermap.org/data/2.5/weather?q='+seleccionNameCiudad+'&appid=01ba69f16632f972aa1d53518621137c&units=metric&lang=es')
  .then(function (response){
    console.log(response.data);
    description = response.data.weather[0].description;
    icon = response.data.weather[0].icon;
    temp = response.data.main.temp;
    temp_min = response.data.main.temp_min;
    temp_max = response.data.main.temp_max;
    wind_speed = response.data.wind.speed;
    
    iconoMainClima();
    descriptionClima();
    vientoIcono();
    tempMinima();
    tempMax();
  })
}

  btnSwitch.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
  // estadoBlack.classList.toggle('dark');
  // ciudadBlack.classList.toggle('dark');
  btnSwitch.classList.toggle('active');

  //Almacenamos en que modo esta
  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', 'true');
  }else{
    localStorage.setItem('dark-mode', 'false');
  }
})


function cambio(){
  let seleccionIdEstado = document.getElementById("estado").value;

  let estadoHtml = document.getElementById('estado');
  let seleccionNameEstado = estadoHtml.options[estadoHtml.selectedIndex].text;
  console.log(seleccionIdEstado);
  localStorage.setItem('estado',seleccionNameEstado);


  // let combo = document.getElementById("ciudad");
  // let seleccionNameCiudad = combo.options[combo.selectedIndex].text;

  let nuevo = document.getElementById("prueba");
  if (seleccionIdEstado == 1) {
    nuevo.innerHTML = aguascalientes; 
  }else if(seleccionIdEstado == 2){
    nuevo.innerHTML= bc;
  } 
  // return estadoHtml;
}

function iconoMainClima(){
  // <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="imagen del clima">
  html_icono_clima = document.getElementById("clima-icon");
  if(icon=="01d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-day-sunny"></i>
    `;
  }else if(icon=="02d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-day-cloudy"></i>
    `;
  }else if(icon=="03d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-cloud"></i>
    `;
  }else if(icon=="04d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-cloudy"></i>
    `;
  }else if(icon=="09d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-showers"></i>
    `;
  }else if(icon=="10d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-rain"></i>
    `;
  }else if(icon=="11d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-thunderstorm"></i>
    `;
  }else if(icon=="13d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-snowflake-cold"></i>
    `;
  }else if(icon=="50d"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-dust"></i>
    `;
  }else if(icon=="01n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-night-clear"></i>
    `;
  }else if(icon=="02n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-night-alt-cloudy"></i>
    `;
  }else if(icon=="03n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-cloud"></i>
    `;
  }else if(icon=="04n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-cloudy"></i>
    `;
  }else if(icon=="09n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-showers"></i>
    `;
  }else if(icon=="10n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-rain"></i>
    `;
  }else if(icon=="11n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-thunderstorm"></i>
    `;
  }else if(icon=="13n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-snowflake-cold"></i>
    `;
  }else if(icon=="50n"){
    html_icono_clima.innerHTML = `
    <i class="wi wi-dust"></i>
    `;
  }else{
    html_icono_clima.innerHTML = `
    <p>No Disponible</p>
    `;
  }
}


function descriptionClima(){
  html_icono_temp_desc = document.getElementById("temp-icon");
  html_icono_temp_desc.innerHTML= `
  <p class="temp">${temp}&deg</p>
  <p>${description}</p>
  `;
}

function vientoIcono(){
  html_icono_viento= document.getElementById("winds2");
  html_icono_viento.innerHTML=`
  <p>${wind_speed}</p>
  `;
}

function tempMinima(){
  html_icono_temp_min =document.getElementById("min_temp");
  html_icono_temp_min.innerHTML=`
  <p>${temp_min}</p>
  `;
}

function tempMax(){
  html_icono_temp_max = document.getElementById("max_temp");
  html_icono_temp_max.innerHTML=`
  <p>${temp_max}</p>
  `;
}
    
    