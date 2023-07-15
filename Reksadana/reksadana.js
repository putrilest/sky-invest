// MENUU TOGGLE

const menuToggle=document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


// TABEL
const tamPilih=document.getElementById("pilih");
data();

tamPilih.addEventListener("change", function(param){
    if(param.target.value=="1"){
        data();
    }
    else if(param.target.value=="2"){
        data2();
    }
    else if(param.target.value=="3"){
        data3();
    }
    else if(param.target.value=="4"){
        data4();
    }
    else if(param.target.value=="5"){
        data5();
    }
    else if(param.target.value=="6"){
        data6();
    }
    else if(param.target.value=="7"){
        data7();
    }
    else if(param.target.value=="8"){
        data8();
    }
    else if(param.target.value=="9"){
        data9();
    }
    else if(param.target.value=="10"){
        data10();
    }

});

function data() {
    const datalist = document.getElementById("myTable"); 

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {

            datalist.innerHTML="";

            buildTable(datas.data.products);

            function buildTable(data) {
                var table = document.getElementById("myTable");

                for (var i = 0; i < 100; i++) {
                        var row = `<tr>
                            <td>${data[i].id}</td>
                            <td>${data[i].name}</td>
                            <td>${data[i].management}</td>
                            <td>${data[i].custodian}</td>
                            <td>${data[i].type}</td>
                            </tr>`

                        table.innerHTML += row;
                }
            }
        });
}

function data2() {
    const datalist2 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist2.innerHTML='';
            buildTable2(datas.data.products);

            function buildTable2(data) {
                var table2 = document.getElementById("myTable");

                for (var a = 100; a < 200; a++) {
                        var row2 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table2.innerHTML += row2;
                }
            }
        });
}


function data3() {
    const datalist3 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist3.innerHTML='';
            buildTable3(datas.data.products);

            function buildTable3(data) {
                var table3 = document.getElementById("myTable");

                for (var a = 200; a < 300; a++) {
                        var row3 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table3.innerHTML += row3;
                }
            }
        });
}


function data4() {
    const datalist4 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist4.innerHTML='';
            buildTable4(datas.data.products);

            function buildTable4(data) {
                var table4 = document.getElementById("myTable");

                for (var a = 300; a < 400; a++) {
                        var row4 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table4.innerHTML += row4;
                }
            }
        });
}

function data5() {
    const datalist5 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist5.innerHTML='';
            buildTable5(datas.data.products);

            function buildTable5(data) {
                var table5 = document.getElementById("myTable");

                for (var a = 400; a < 500; a++) {
                        var row5 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table5.innerHTML += row5;
                }
            }
        });
}

function data6() {
    const datalist6 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist6.innerHTML='';
            buildTable6(datas.data.products);

            function buildTable6(data) {
                var table6 = document.getElementById("myTable");

                for (var a = 500; a < 600; a++) {
                        var row6 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table6.innerHTML += row6;
                }
            }
        });
}

function data7() {
    const datalist7 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist7.innerHTML='';
            buildTable7(datas.data.products);

            function buildTable7(data) {
                var table7 = document.getElementById("myTable");

                for (var a = 600; a < 700; a++) {
                        var row7 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table7.innerHTML += row7;
                }
            }
        });
}

function data8() {
    const datalist8 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist8.innerHTML='';
            buildTable8(datas.data.products);

            function buildTable8(data) {
                var table8 = document.getElementById("myTable");

                for (var a = 700; a < 800; a++) {
                        var row8 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table8.innerHTML += row8;
                }
            }
        });
}

function data9() {
    const datalist9 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist9.innerHTML='';
            buildTable9(datas.data.products);

            function buildTable9(data) {
                var table9 = document.getElementById("myTable");

                for (var a = 800; a < 900; a++) {
                        var row9 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table9.innerHTML += row9;
                }
            }
        });
}

function data10() {
    const datalist10 = document.getElementById("myTable");

    fetch("https://ojk-invest-api.vercel.app/api/products")
        .then(function (respon) {
            return respon.json();
        }).then(function (datas) {
            
            datalist10.innerHTML='';
            buildTable10(datas.data.products);

            function buildTable10(data) {
                var table10 = document.getElementById("myTable");

                for (var a = 900; a < 1000; a++) {
                        var row10 = `<tr>
                            <td>${data[a].id}</td>
                            <td>${data[a].name}</td>
                            <td>${data[a].management}</td>
                            <td>${data[a].custodian}</td>
                            <td>${data[a].type}</td>
                            </tr>`

                        table10.innerHTML += row10;
                }
            }
        });
}