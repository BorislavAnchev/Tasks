const insert = (symbol) => {
    document.form.textview.value = document.form.textview.value + symbol;
}

const equal = () => {
    let exp = document.form.textview.value;
    if(exp) {
        document.form.textview.value = eval(exp);
    }   
}

const clean = () => {
    document.form.textview.value = "";
}

const back = () => {
    let exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length-1);
}