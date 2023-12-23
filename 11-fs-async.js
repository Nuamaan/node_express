const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    first = result;
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        second = result;
        writeFile('./content/result-async.txt',
            `Here is the result : ${first},${second}`,
            (err, result) => {
                if (err) {
                    return err
                    console.log(err);
                }
                console.log(result);
            }
        )
    }
    )
})