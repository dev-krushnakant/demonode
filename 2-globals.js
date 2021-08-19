// GLOBALS - No window !!!

//__dirname - path to current directory
//__filename - file name
//require - function to use modules( CommonJS )
//module - info about current module
//process - info about the env where the program is executed

console.log(__dirname);
setInterval(() => {
    console.log("Hello world");
},1000)