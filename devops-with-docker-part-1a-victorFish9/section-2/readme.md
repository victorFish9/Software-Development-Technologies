# Part 1 section 2

The theory for the following exercises is presented at https://devopswithdocker.com/part-1/section-2.


## Exercise 1.3: Secret message (10 %)

> Now that we've warmed up it's time to get inside a container while it's running!
>
> Image `devopsdockeruh/simple-web-service:ubuntu` will start a container that outputs logs into a file.
> Go inside the container and use `tail -f ./text.log` to follow the logs.
> Every 10 seconds the clock will send you a "secret message".
>
> Source: https://devopswithdocker.com/part-1/section-2#exercise-13


**Save the secret message and command(s) given in the file [ex13.txt](./ex13.txt).**


## Exercise 1.4: Missing dependencies (10 %)

> Start a Ubuntu image with the process:
>
> ```
> sh -c 'while true; do echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website; done'
> ```
>
> If you're on Windows, you'll want to switch the `'` and `"` around:
>
> ```
> sh -c "while true; do echo 'Input website:'; read website; echo 'Searching..'; sleep 1; curl http://$website; done"
> ```
>
> You will notice that a few things required for proper execution are missing. Be sure to remind yourself which flags to use so that the container actually waits for input.
>
> > Note also that curl is NOT installed in the container yet. You will have to install it from inside of the container.
>
> Test inputting `helsinki.fi` into the application. It should respond with something like
>
> ```html
> <html>
>   <head>
>     <title>301 Moved Permanently</title>
>   </head>
>
>   <body>
>     <h1>Moved Permanently</h1>
>     <p>The document has moved <a href="http://www.helsinki.fi/">here</a>.</p>
>   </body>
> </html>
> ```
>
>
> **Hint** for installing the missing dependencies you could start a new process with `docker exec`.
>
> **Hint** installation of the `curl` command in the Ubuntu container works just like installing `curl` in any Ubuntu installation. You may want to try first running Ubuntu and installing curl, and after that install curl on the running container.
>
> **Hint** In the default Ubuntu container, you will be logged in as `root`, and therefore should not use the `sudo` command.
>
> 💡 This exercise has multiple solutions, if the curl for helsinki.fi works then it's done. Can you figure out other (smart) solutions?
>
> Source: https://devopswithdocker.com/part-1/section-2#exercise-14

**Save the commands you used to start process and the command(s) you used to fix the ensuing problems in the file [ex14.txt](./ex14.txt).**
