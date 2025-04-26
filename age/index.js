const MyAge = document.getElementById("MyAge");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let age;

submit.onclick = function () {
    age = Number(MyAge.value);
    if (age >= 100) {
        result.textContent = `You are Too OLD to Enter this site 0_o`
    }
    else if (age == 0) {
        result.textContent = `You Can't Enter You Were Just Born 0_0`
    }
    else if (age < 0) {
        result.textContent = `Your Age can't be Below 0 XD`
    }
    else if (age >= 18) {
        result.textContent = `You Are OLD Enough to Enter this site :)`
    }
    else {
        result.textContent = `You Must Be 18+ to Enter this Site :(`
    }
    MyAge.value = "";
}
