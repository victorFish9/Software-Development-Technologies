# Implement this Dockerfile in exercise 1.8
FROM devopsdockeruh/simple-web-service:alpine

WORKDIR /usr/src/app/simple-web-service

COPY server .

EXPOSE 8080

CMD ["/bin/sh"]