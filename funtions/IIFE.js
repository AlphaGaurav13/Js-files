//IMMEDIATELY  INVOKED FUNCTION  EXPRESSION (IIFE) --> to  not to get affect from the pollution of gloabal variable we use this IIFE ()().



(function chai() {  //Named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) =>  {
    console.log(`DB CONNECTED TWO! ${name}`)
})("Gaurav")

// ()()

