let x = 0, y = 1, z;
    for (let i = 1; i <= 10; i++) {

        console.log(y);
        z = x + y;
        x = y;
        y = z;
    }