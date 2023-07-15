// MENUU TOGGLE

const menuToggle=document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});



//DATA JSON
const tableBody = document.querySelector('#myTable');

fetch('https://ojk-invest-api.vercel.app/api/apps')
    .then(function (response) {
        return response.json();
    })
    .then(function (datas) {
        
        tableBody.innerHTML = '';

        datas.data.apps.forEach(val => {
            console.log(val);
            const baris = document.createElement('tr');
            tableBody.appendChild(baris);

            const elemenId = document.createElement('td');
            elemenId.textContent = val.id;
            baris.appendChild(elemenId);

            const elemenName = document.createElement('td');
            elemenName.textContent = val.name;
            baris.appendChild(elemenName);  

            const elemenUrl = document.createElement('td');
            const elemenLink=document.createElement('a');
            elemenLink.textContent = val.url;
            elemenLink.href= val.url;
            elemenLink.target="_blank";
            elemenUrl.appendChild(elemenLink);
            baris.appendChild(elemenUrl);

            const elemenOwner = document.createElement('td')
            elemenOwner.textContent = val.owner;
            baris.appendChild(elemenOwner);
        });
    });
 