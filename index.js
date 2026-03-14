function printPattern(n) {
    let size = 2 * n - 1;

    for (let i = 0; i < size; i++) {
        let row = "";

        for (let j = 0; j < size; j++) {
            let value = n - Math.min(i, j, size - 1 - i, size - 1 - j);
            row += value + " ";
        }

        console.log(row);
    }
}

printPattern(4);
