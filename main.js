function timer() {
    let number = 0;
    // console.log('first');

    const addNumber = function() {
        number++;
        document.body.textContent = `Time you spent on out page ${number} seconds.`
        console.log('druga funkcja')

    }


    return addNumber

}

const start = timer();

setInterval(start, 1000)