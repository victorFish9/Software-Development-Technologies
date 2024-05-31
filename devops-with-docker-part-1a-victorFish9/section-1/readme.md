# Part 1 section 1

The theory for the following exercises is presented at https://devopswithdocker.com/part-1/section-1.


## Exercise 1.1: Getting started (10 %)

> Since we already did "Hello, World!" in the material let's do something else.
>
> Start 3 containers from an image that does not automatically exit (such as nginx) in detached mode.
>
> Stop two of the containers and leave one container running.
>
> Source: https://devopswithdocker.com/part-1/section-1#exercises-11-12

**Save the output for <code>docker ps -a</code> which shows 2 stopped containers and one running into the file [ex11.txt](./ex11.txt).**

💡 *Make sure to include the *full output* including the **header rows**.*


## Exercise 1.2: Cleanup (10 %)

> We have containers and an image that are no longer in use and are taking up space. Running <code>docker ps -as</code> and <code>docker images</code> will confirm this.
>
> Clean the Docker daemon by removing all images and containers.
>
> Source: https://devopswithdocker.com/part-1/section-1#exercises-11-12

**Save the output for <code>docker ps -as</code> and <code>docker images</code> into the file [ex12.txt](./ex12.txt).**

💡 *Make sure to include the *full output* including the **header rows**.*

💡 *You don't necessarily need to remove **all** images and containers, if you have ones that are not related to this exercise. It is enough to remove all `hello-world` and `nginx` related ones.*
