function switchMode(mode) {
    var resultLabel = document.getElementById('result-label');
    var resultValue = document.getElementById('result-value');

    if (mode === 'luas') {
        resultLabel.innerText = 'Luas:';
        resultValue.innerText = '';
    } else if (mode === 'keliling') {
        resultLabel.innerText = 'Keliling:';
        resultValue.innerText = '';
    }
}

function calculate() {
    var sideLength = parseFloat(document.getElementById('sideLength').value);

    if (isNaN(sideLength) || sideLength <= 0) {
        alert('Masukkan panjang sisi yang valid!');
        return;
    }

    var mode = document.getElementById('result-label').innerText;
    var result;

    if (mode === 'Luas:') {
        result = sideLength * sideLength;
    } else if (mode === 'Keliling:') {
        result = 4 * sideLength;
    }

    document.getElementById('result-value').innerText = result.toFixed(2);
}
