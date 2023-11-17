function appendtodisplay(value){
    document.getElementById('display').value+=value;
}

function clearscreen(){
    document.getElementById('display').value = '';
}

function backspace(){
    display.value = display.value.slice(0, -1);
}


function resultcalculator(){
    try{
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;

    }catch(error){
        document.getElementById('display').value = 'Expression error';
    }


}