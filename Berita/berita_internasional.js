
// MENUU TOGGLE

const menuToggle=document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});




//BERITA INTERNASIONAL
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '907d455e4amsheba7a63cd965bbap117226jsn3c388d3983fc',
		'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com'
	}
};

const tampData=document.querySelector('#container');

fetch('https://crypto-pulse.p.rapidapi.com/news', options)
.then(function(response) {
    return response.json();
}).then(function(hasil) {
    tampData.innerHTML = '';
    for (let berita of hasil) {
        console.log(berita);

        const flexi=document.createElement("div");
        flexi.className="flexbox";

        const elementBerita = document.createElement("div");
        elementBerita.className="item";
        
        const elemenTitle = document.createElement('h2');
        elemenTitle.textContent = berita.title;
        elementBerita.appendChild(elemenTitle);
        
        const elementSource = document.createElement('p');
        elementSource.className="small";
        elementSource.textContent = berita.source;
        elementBerita.appendChild(elementSource);

        const elementWaktu = document.createElement('p');
        elementWaktu.className="small";
        elementWaktu.textContent = berita.date;
        elementBerita.appendChild(elementWaktu);

        const elementDeskripsi = document.createElement('p');
        elementDeskripsi.textContent = berita.description + '...';
        elementBerita.appendChild(elementDeskripsi);


        const elementLink = document.createElement('a');
        elementLink.href = berita.link;
        elementLink.className = 'link';
        elementLink.target = '_blank';
        elementLink.textContent = 'Read More...';
        elementBerita.appendChild(elementLink);

        flexi.appendChild(elementBerita);
        tampData.appendChild(flexi);

    }
});
