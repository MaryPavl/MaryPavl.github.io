document.body.onload = () => {
    const Button = document.querySelector('#dark');
    labelDark = document.querySelector('.label-mod');
    let darkcss;

    let counter = 1;

    Button.addEventListener('click', (e) => {
        if (counter == 1) {
            counter = 2;
            console.log(counter);
            darkcss = document.createElement('link');
            darkcss.rel = 'stylesheet';
            darkcss.href = 'mystyle2Dark.css';
            let head = document.querySelector('head');
            head.append(darkcss);
            console.log(darkcss);
            
        }
        else {
            darkcss.remove();
            counter = 1;
            console.log(counter);
        }

    })

}       