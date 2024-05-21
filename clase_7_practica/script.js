
const btnPop = document.getElementById('btn_pop');

document.addEventListener("DOMContentLoaded", function(){
    const p = document.getElementById('parrafo');
    p.addEventListener('mouseout', function(){
        p.style.backgroundColor="green";
        p.innerHTML="Estoy fuera";
    });
    p.addEventListener('mouseover', function(){
        p.style.backgroundColor='blue';
        p.innerText="Entre";
    });
    /////////////////////////////////////////////////////

    const btnPop = document.getElementById('btn_pop');
    const popup = document.getElementById('pop_up');
    const btnClosed = document.getElementById('closed');
    //const pop_menu = document.getElementById('pop_menu')
    //const winClosed = document.body

    btnPop.addEventListener('click', function(){
        popup.style.display="block";
        //windowsClosed();          
    })

    btnClosed.addEventListener('click', function(){
        popup.style.display="none";
    })

    window.addEventListener('click', function(event){
        if(event.target===popup){
            popup.style.display="none";
        }
    });
    /*otro pero tengo que asignar todo lo que no quiero que abra (pop_menu,etc..)
    popup.addEventListener('click', function(event){
        if(event.target!=pop_menu)
        popup.style.display="none";        
    });*/

    /*
    function windowsClosed(){
        winClosed.addEventListener('click', function(){
            alert('fef');
           // popup.style.display="none";
        });
    }*/
    
});




