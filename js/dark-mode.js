function darkmode() {
    let $this = $(this),
        flag = $this.data("clickflag");
    let root = document.querySelector(':root');
    if (!flag) {
        $('#circulo').css('transform','translate(1343px, 25px)');
        $('#retangulo').css('fill','#1C1C1C');
        root.style.setProperty('--background', "#1c1c1c");
        root.style.setProperty('--cor-primaria', "#d6efc7");
        root.style.setProperty('--cor-secundaria', "#184d47");
        root.style.setProperty('--footer', "#061715");
        $('.parceiros__img').css('background-color','#202020')
    } else {
        $('#circulo').css('transform','translate(1287px, 25px)');
        $('#retangulo').css('fill','#EFEFEF');
        root.style.setProperty('--background', "#efefef");
        root.style.setProperty('--cor-primaria', "#184d47");
        root.style.setProperty('--cor-secundaria', "#d6efc7");
        root.style.setProperty('--footer', "#184d47");
        $('.parceiros__img').css('background-color','#efefef')
    }
    $this.data("clickflag", !flag);
}