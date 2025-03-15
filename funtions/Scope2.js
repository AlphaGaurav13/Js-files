const user = {
    username : "Gaurav",
    price : 999,
    welcomeMessage :  function() {
        console.log(`${this.username} , Welcome To Website`);
        console.log(this);
    } 
}

// user.welcomeMessage();
// user.username = "Krishna"

// user.welcomeMessage();


console.log(this) // this will print the empty object but if you run the same code on the browser console it will give you window Object.

//this cant be used inside the function to extract the value only use it Objects