(function(){
    //   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    //   Возвращает true, если все аргументы, кроме первого входят в первый.
    //   Первым всегда должен быть массив.

    function isInArray<A>(arr: A[], ...args: A[]):boolean {
        if (args) {
            args.forEach(argument => {
                if (arr.indexOf(argument) === -1) {
                    console.log(`This argument ${argument} doesn't exist in provided array.`);
                    return false;    
                }

                return true;
            });
        }

        console.log('Please provide arguments that you want to check.');
        return false;
    }

    let numbersList = [2, 4, 6, 8, 10];

    let result1 = isInArray(numbersList); // No arguments
    let result2 = isInArray(numbersList, 2, 4); // Two existing arguments
    let result3 = isInArray(numbersList, 2, 4, 7); // Three arguments with one that's not in array

    console.log('No arguments: ', result1);
    console.log('Two existing arguments: ', result2);
    console.log('Three arguments with one that\'s not in array: ', result3);
})();
