var

let 


const

//-------------------------------------

var test = 'exemplo';

(() => {
    console.log('valor dentro da funcao "${test}"');

    if (true) {
        var test = 'example';
        console.log('valor dentro do-if-"${test}"');
    }
    console.log('valor apos a execusao do -if-"${test}"');

})();

function teste() {

}

//-----------------------



(() =>{
    let test = 'valor da fucao';
    console.log('valor dentro da funcao "${test}"');
     
    if (true) {
        let test = ('valor dentro do if "${test}"');

    }
    console.log('valor apos a execucao do if "${test}"');

})();


//----------------------------------



(() =>{
    const test = 'valor da fucao';
    console.log('valor dentro da funcao "${test}"');
     
    if (true) {
        const test = ('valor dentro do if "${test}"');

    }
    console.log('valor apos a execucao do if "${test}"');

})();













