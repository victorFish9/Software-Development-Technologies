# Exercise 0

This exercise is not actually an exercise you need to complete, but an example how the exercises are implemented. This exercise has the solution already implemented in the [ex00.txt](./ex00.txt) file.

Each exercise folder in this repository is structured as follows:

* a `readme.md` file such as this
* text or script files where you copy and paste your commands and their outputs

The `readme.md` file contains the instructions for completing the exercise and you must fill the correct commands and/or outputs in the text files. See an example of the instructions below, and an example of the solution in [ex00.txt](./ex00.txt).

Read more about the exercise here: https://devopswithdocker.com/part-1/section-1


## Exercise: Running containers

> You already have Docker installed so let's run our first container!
>
> The hello-world is a simple application that outputs "Hello from Docker!" and some additional info.
>
> Simply run `docker container run hello-world`, the output will be the following:
>
> ```console
> $ docker container run hello-world
>   Unable to find image 'hello-world:latest' locally
>   latest: Pulling from library/hello-world
>   b8dfde127a29: Pull complete
>   Digest: sha256:308866a43596e83578c7dfa15e27a73011bdd402185a84c5cd7f32a88b501a24
>   Status: Downloaded newer image for hello-world:latest
>
>   Hello from Docker!
>   This message shows that your installation appears to be working correctly.
>
>   To generate this message, Docker took the following steps:
>    1. The Docker client contacted the Docker daemon.
>    2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
>       (amd64)
>    3. The Docker daemon created a new container from that image which runs the
>       executable that produces the output you are currently reading.
>    4. The Docker daemon streamed that output to the Docker client, which sent it
>       to your terminal.
>
>   To try something more ambitious, you can run an Ubuntu container with:
>    $ docker run -it ubuntu bash
>
>   Share images, automate workflows, and more with a free Docker ID:
>    https://hub.docker.com/
>
>   For more examples and ideas, visit:
>    https://docs.docker.com/get-started/
> ```
>
> If you already ran hello-world previously it will skip the first 5 lines. The first 5 lines tell that an **image** "hello-world:latest" wasn't found and it was downloaded. Try it again:
>
> ```console
> $ docker container run hello-world
>
>   Hello from Docker!
>   ...
> ```
>
> It found the **image** locally so it skipped right to running the hello-world.
>
> Source: https://devopswithdocker.com/part-1/section-1

**To complete this exercise, copy the output of the command you executed in [ex00.txt](./ex00.txt).**

*(As this is just an example of an exercise, [the file](./ex00.txt) already contains the desired commands.)*
