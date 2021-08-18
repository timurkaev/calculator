var tbcal = "";
const useInp = document.getElementById('useInp');
const resInp = document.getElementById('resInp');

function calculate(value) {
    tbcal += value
    useInp.value = tbcal
}

function clear() {
    tbcal = tbcal.substring(0, tbcal.length - 1);
    useInp.value = tbcal
}

function result() {
    if (tbcal.length === 0 || tbcal === "") {
        alert("Needs a input");
        return
    }
    try {
        ans = eval(tbcal)
        resInp.value = ans
    }
    catch (err) {
        alert("Invalid input")
    }
}

function reset() {
    useInp.value = "";
    resInp.value = "";
    tbcal = "";
}