var login = require("facebook-chat-api");

//Input message
var args = process.argv.slice(2);
var jointArgs = args.join();
var msg = jointArgs.replace(new RegExp(",","gm")," ");

//var msg = {body: "Hello World!"};
var email = "1phongphawit@gmail.com";
var pwd = "12345";
var fbGroupID = 123456789012345;

login({email: email, password: pwd}, function callback (err, api) {
    if(err) return console.error(err);

        try
        {
                api.sendMessage(msg, fbGroupID );

        }
        catch(err)
        {
                document.getElementById("demo").innerHTML = err.message;
        }
});