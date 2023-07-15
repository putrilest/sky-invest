const tampData=document.querySelector("#container");

fetch('https://api-berita-indonesia.vercel.app/cnbc/investment/')
        .then(function(response) {
            return response.json();
        }).then(function(hasil) {
            tampData.innerHTML = '';
            for (let berita of hasil.data.posts) {
                console.log(berita);
                const elementBerita = document.createElement("div");
                elementBerita.className="item1";

                const elementGambar = document.createElement('img');
                elementGambar.src = berita.thumbnail;
                elementBerita.appendChild(elementGambar);


                const elementBerita2=document.createElement("div");
                elementBerita2.className="item2";

                
                const elemenTitle = document.createElement('h2');
                elemenTitle.textContent = berita.title;
                elementBerita2.appendChild(elemenTitle);

                
                const elementWaktu = document.createElement('p');
                elementWaktu.textContent = berita.pubDate;
                elementBerita2.appendChild(elementWaktu);

                const elementDeskripsi = document.createElement('p');
                elementDeskripsi.textContent = berita.description + '...';
                elementBerita2.appendChild(elementDeskripsi);


                const elementLink = document.createElement('a');
                elementLink.href = berita.link;
                elementLink.className = 'link';
                elementLink.target = '_blank';
                elementLink.textContent = 'Baca Selengkapnya...';
                elementBerita2.appendChild(elementLink);



                tampData.appendChild(elementBerita);
                tampData.appendChild(elementBerita2);

            }
        });






// MENUU TOGGLE

        const menuToggle=document.querySelector('.menu-toggle input');
        const nav = document.querySelector('nav ul');

        menuToggle.addEventListener('click', function(){
            nav.classList.toggle('slide');
        });