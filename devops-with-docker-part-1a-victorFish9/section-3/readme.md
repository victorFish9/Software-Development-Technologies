# Part 1 section 3

The theory for the following exercises is presented at https://devopswithdocker.com/part-1/section-3.


## Exercise 1.5: Sizes of images (10 %)

> In the [Exercise 1.3](https://devopswithdocker.com/part-1/section-2#exercise-13) we used `devopsdockeruh/simple-web-service:ubuntu`.
>
> Here is the same application but instead of Ubuntu is using [Alpine Linux](https://www.alpinelinux.org/): `devopsdockeruh/simple-web-service:alpine`.
>
> Pull both images and compare the image sizes. Go inside the alpine container and make sure the secret message functionality is the same. Alpine version doesn't have bash but it has sh.
>
> Source: https://devopswithdocker.com/part-1/section-3

**Run the command that displays the sizes of these images and save the output in the file [ex15.txt](./ex15.txt).**


## Exercise 1.6: Hello Docker Hub (10 %)

> Run `docker run -it devopsdockeruh/pull_exercise`.
>
> It will wait for your input. Navigate through Docker hub to find the docs and Dockerfile that was used to create the image.
>
> Read the Dockerfile and/or docs to learn what input will get the application to answer a "secret message".
>
> Source: https://devopswithdocker.com/part-1/section-3

**Save the secret message in the file [ex16.txt](./ex16.txt)**


## Exercise 1.7: Image for script (20 %)

> We can improve our previous solutions now that we know how to create and build a Dockerfile.
>
> Let us now get back to [Exercise 1.4](https://devopswithdocker.com/part-1/section-2#exercise-14).
>
> Create a new file on your local machine and append the script into that file:
>
> ```bash
> echo "Input website:"
> read website; echo "Searching.."
> curl http://$website
> ```
>
> Create a Dockerfile for a new image that starts from ubuntu:20.04 and add instructions to install curl into that image. Then add instructions to copy the script file into that image and finally set it to run on container start using CMD.
>
> After you have filled the Dockerfile, build the image with the name "curler".
>
> * If you are getting permission denied, use `chmod` to give permission to run the script.
>
> The following should now work:
>
> ```bash
> $ docker run -it curler
>
>   Input website:
>   helsinki.fi
>   Searching..
>   <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
>   <html><head>
>   <title>301 Moved Permanently</title>
>   </head><body>
>   <h1>Moved Permanently</h1>
>   <p>The document has moved <a href="https://www.helsinki.fi/">here</a>.</p>
>   </body></html>
> ```
>
> Remember that [RUN](https://docs.docker.com/engine/reference/builder/#run) can be used to execute commands while building the image!
>
> Source: https://devopswithdocker.com/part-1/section-3

**Write your solution in the [Dockerfile](./Dockerfile) in this folder. You can utilize the existing [script.sh](./script.sh) file that contains the script needed in this exercise.**

Note that the [script.sh](./script.sh) does not contain a loop, unlike the original version of this exercise. This makes the solution easier to test automatically.


## Exercise 1.8: Two line Dockerfile (20 %)

> By default our `devopsdockeruh/simple-web-service:alpine` doesn't have a CMD. It instead uses _ENTRYPOINT_ to declare which application is run.
>
> We'll talk more about _ENTRYPOINT_ in the next section, but you already know that the last argument in `docker run` can be used to give a command or an argument.
>
> As you might've noticed it doesn't start the web service even though the name is "simple-web-service". A suitable argument is needed to start the server!
>
> Try `docker run devopsdockeruh/simple-web-service:alpine hello`. The application reads the argument "hello" but will inform that hello isn't accepted.
>
> In this exercise create a Dockerfile and use FROM and CMD to create a brand new image that automatically runs `server`.
>
> The Docker documentation [CMD](https://docs.docker.com/engine/reference/builder/#cmd) says a bit indirectly that if a image has ENTRYPOINT defined, CMD is used to define it the default arguments.
>
> Tag the new image as "web-server"
>
> Return the Dockerfile and the command you used to run the container.
>
> Running the built "web-server" image should look like this:
>
> ```console
> $ docker run web-server
> [GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.
>
> [GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
> - using env:   export GIN_MODE=release
> - using code:  gin.SetMode(gin.ReleaseMode)
>
> [GIN-debug] GET    /*path                    --> server.Start.func1 (3 handlers)
> [GIN-debug] Listening and serving HTTP on :8080
> ```
>
> * We don't have any method of accessing the web service yet. As such confirming that the console output is the same will suffice.
>
> * The exercise title may be a useful hint here.
>
> Source: https://devopswithdocker.com/part-1/section-3

**Save your solution to the file [server.Dockerfile](./server.Dockerfile).**

When there are multiple Dockerfiles or your Dockerfile has a custom name, you will need to [specify which file to use when building](https://docs.docker.com/engine/reference/commandline/image_build/#file). In this exercise, we need to use the file [server.Dockerfile](./server.Dockerfile), so our build command could be:

```sh
docker build . --file server.Dockerfile --tag web-server
```

After the image is built, you can start a new container with it:

```sh
docker run -it --rm --publish 8080:8080 web-server
```

In the above command, the [argument `--rm` automatically removes the container when it exits](https://docs.docker.com/engine/reference/commandline/container_run/), and the [`--publish 8080:8080` to publishes the container's port 8080 on the host system](https://docs.docker.com/engine/reference/commandline/container_run/).
