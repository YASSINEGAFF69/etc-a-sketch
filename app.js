const container = document.querySelector('.container');

for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement("div");
    div.classList.add('divv');
    div.id = `div${i}`; 
    container.appendChild(div);

    div.addEventListener("mouseover", function() {
        oppacity(div);
    });
}

function oppacity(div) {
    let alpha = getAlpha(div);
    div.style.backgroundColor = `rgba(0,0,0,${alpha})`;
}

function getAlpha(div) {
    // regex targeted at numbers with digits taken from this StackOverflow comment
    // https://stackoverflow.com/questions/3751877/how-to-extract-r-g-b-a-values-from-css-color#comment79938383_3752026
    let alphaTag = Number(window.getComputedStyle(div).backgroundColor.match(/[.?\d]+/g)[3]);

    if (alphaTag <= 1) {
        return alphaTag + 0.1; 
    }

    return alphaTag;
}
