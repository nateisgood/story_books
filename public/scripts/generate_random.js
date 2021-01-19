const random_num = () => {
    let num = Math.floor((Math.random() * 10) + 1);
    document.getElementById("myNumber").innerHTML = num;
}

document.getElementById("myNumber").innerHTML = "_";
