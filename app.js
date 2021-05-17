// Getting The API using Fetch Api Method

function getDogs(){
    console.log('The Animals API has been Fetched');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      return res.json();
    }).then((data) => {
    let dogApi = document.querySelector('.dogApi');
    dogApi.innerHTML = `<img src="${data.message}">`;
    // data.file.style.height = '100px';

    }).catch((error) => {
      console.error(`The error is ${error}`);
    }); 
}

const getBtn = document.querySelector('#getBtn');
getBtn.addEventListener('click', getDogs);

// Doing it with AJAX XMLHTTPRequest

// function getDogs(){
//     console.log('The Animals API has been fetched');
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', true);
//     xhr.onprogress = function(){
//         console.log('Progressing......');
//     }

//     xhr.onreadystatechange = function(){
//         if(this.readyState === 4 && this.status === 200){
//             let dogApi = document.querySelector('.dogApi    ');
//             let Dog = JSON.parse(this.responseText);
//             dogApi.innerHTML = `<img src="${Dog.message}">`;

//         }
//     }
//     xhr.onerror = function(error){
//         console.error(`The error is ${error}`);
//     }
//     xhr.send();
//     }


