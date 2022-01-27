localStorage.setItem('ambu1','open');
localStorage.setItem('ambu2','open');
localStorage.setItem('ambu3','open');
localStorage.setItem('ambu4','open');

function status_button1(){
    localStorage.setItem('ambu1','closed');
}

function status_button2(){
    localStorage.setItem('ambu2','closed');
}

function status_button3(){
    localStorage.setItem('ambu3','closed');
}

function status_button4(){
    localStorage.setItem('ambu4','closed');
}

function b1(){
    if(localStorage.getItem('ambu1')=='closed'){
        alert('Ambulance already Booked!!');
    }
    else{
        alert('Ambulance Booked!!');
        status_button1();
    }
}

function b2(){
    if(localStorage.getItem('ambu2')=='closed'){
        alert('Ambulance already Booked!!');
    }
    else{
        alert('Ambulance Booked!!');
        status_button2();
    }
}

function b3(){
    if(localStorage.getItem('ambu3')=='closed'){
        alert('Ambulance already Booked!!');
    }
    else{
        alert('Ambulance Booked!!');
        status_button3();
    }
}

function b4(){
    if(localStorage.getItem('ambu4')=='closed'){
        alert('Ambulance already Booked!!');
    }
    else{
        alert('Ambulance Booked!!');
        status_button4();
    }
}