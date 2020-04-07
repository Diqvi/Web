function start() 
{
    console.log("Request handler 'start' was called.");
}
function upload() 
{
    console.log("Request handler 'upload' was called.");
}
function func1()
{
    console.log("Request handler 'func1' was called.");
}
function func2()
{
    console.log("Request handler 'func2' was called.");
}
function func3()
{
    console.log("Request handler 'func3' was called.");
}
exports.start = start;
exports.upload = upload;
exports.func1 = func1;
exports.func2 = func2;
exports.func3 = func3;