# Implement this Dockerfile in exercise 1.7
FROM ubuntu:20.04

WORKDIR /usr/src/app

RUN apt-get update && \
    apt-get install -y curl

COPY script.sh .

RUN chmod +x script.sh

CMD ./script.sh

