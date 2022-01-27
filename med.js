localStorage.setItem('med1','open');
localStorage.setItem('med2','open');
localStorage.setItem('med3','open');
localStorage.setItem('med4','open');

function status_button1(){
    localStorage.setItem('med1','closed');
}

function status_button2(){
    localStorage.setItem('med2','closed');
}

function status_button3(){
    localStorage.setItem('med3','closed');
}

function status_button4(){
    localStorage.setItem('med4','closed');
}

function b1(){
    if(localStorage.getItem('med1')=='closed'){
        alert('Medicine already Booked!!');
    }
    else{
        alert('Medicine Booked!!');
        status_button1();
    }
}

function b2(){
    if(localStorage.getItem('med2')=='closed'){
        alert('Medicine already Booked!!');
    }
    else{
        alert('Medicine Booked!!');
        status_button2();
    }
}

function b3(){
    if(localStorage.getItem('med3')=='closed'){
        alert('Medicine already Booked!!');
    }
    else{
        alert('Medicine Booked!!');
        status_button3();
    }
}

function b4(){
    if(localStorage.getItem('med4')=='closed'){
        alert('Medicine already Booked!!');
    }
    else{
        alert('Medicine Booked!!');
        status_button4();
    }
}