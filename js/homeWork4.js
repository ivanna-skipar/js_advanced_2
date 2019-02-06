    var string = prompt('Введіть фразу');
    x=string.slice(0,1).toUpperCase();
    y = string.slice(1,string.length);
    if(string.endsWith('.')){
        alert (x+y);
    }
    else{
        alert (x+y+'.');
    }