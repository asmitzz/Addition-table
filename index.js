let table = document.querySelector('#table');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let count = 1;


plus.addEventListener('click',() => {
    let row = document.createElement('tr');
   
    for(let i = 1; i <= 5; i++){
       let column = document.createElement('td');
       let input = document.createElement('input');
       input.type = "number";
       column.appendChild(input);
       row.appendChild(column);
    }

    function COL1(){
      row.childNodes[3].childNodes[0].value = parseInt(row.childNodes[1].childNodes[0].value)  + parseInt(row.childNodes[2].childNodes[0].value) ;
          console.log(row.childNodes[3].childNodes[0].value)
    }

    function COL2(){
      row.childNodes[3].childNodes[0].value = parseInt(row.childNodes[1].childNodes[0].value)  + parseInt(row.childNodes[2].childNodes[0].value) ;
          console.log(row.childNodes[3].childNodes[0].value)
    }
    
    row.childNodes[0].childNodes[0].value = count;
    row.childNodes[1].onchange = COL1;
    row.childNodes[2].onchange = COL2;

    row.childNodes[0].childNodes[0].disabled = true ;
    row.childNodes[3].childNodes[0].disabled = true ;
    row.childNodes[4].childNodes[0].disabled = true ;


    table.appendChild(row);
    count++;

})

minus.addEventListener('click',() => {
  table.removeChild(table.lastChild);
  count--;
})