(function(){
    //   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
    //   Возвращает true, если все аргументы, кроме первого входят в первый.
    //   Первым всегда должен быть массив.

    function isInArray<A>(arr: A[], ...args: A[]):boolean {
        if (args) {
            args.forEach(argument => {
                if (arr.indexOf(argument) === -1) {
                    console.log(`This argument - ${argument} doesn't exist in provided array.`);
                    return false;    
                }

                return true;
            });
        }

        console.log('Please provide arguments that you want to check.');
        return false;
    }

    let numbersList: number[] = [2, 4, 6, 8, 10];
    let stringsList: string[] = ['May', 'June', 'August'];

    let result1: boolean = isInArray(numbersList); // No arguments
    let result2: boolean = isInArray(numbersList, 2, 4); // Two existing arguments
    let result3: boolean = isInArray(numbersList, 2, 4, 7); // Three arguments with 1 that's not in array
    let result4: boolean = isInArray(stringsList, 'May'); // Strings array with 1 argument
    let result5: boolean = isInArray(stringsList, 'June', 'October'); // Strings array with 1 arguments that's not in array

    console.log('No arguments: ', result1);
    console.log('Two existing arguments: ', result2);
    console.log('Three arguments with one that\'s not in array: ', result3);
    console.log('Strings array with 1 argument: ', result4);
    console.log('Strings array with 1 arguments that\'s not in array: ', result5);
})();
