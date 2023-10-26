const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function animate(selector) {
    let interval = null;
    var element = document.querySelector(selector);
    if (element !== null) {
        let iteration = 0;
        clearInterval(interval);
        interval = setInterval(() => {
            element.innerText = element.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return element.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            if (iteration >= element.dataset.value.length) {
                clearInterval(interval);
            }
            iteration += 1 / 6;
        }, 30);
    }
}


window.onpointermove = event => {
    
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    const blobWidth = blob.offsetWidth;
    const blobHeight = blob.offsetHeight;

    const bodyWidth = document.body.scrollWidth;
    const bodyHeight = document.body.scrollHeight;

    const maxLeft = bodyWidth - blobWidth;
    const maxTop = bodyHeight - blobHeight;

    const left = Math.min(clientX + scrollX, maxLeft);
    const top = Math.min(clientY + scrollY, maxTop);


    blob.animate({
        left: `${left}px`,
        top: `${top}px`
    }, { duration: 3000, fill: "forwards" });
    }
});

