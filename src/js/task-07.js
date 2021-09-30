const sizeRangeChange = document.querySelector('#font-size-control');


const textSizeChanger = function (event) {
    document.getElementById("text").style.fontSize = `${Number(event.currentTarget.value)}px`;
};

sizeRangeChange.addEventListener('change', textSizeChanger);

