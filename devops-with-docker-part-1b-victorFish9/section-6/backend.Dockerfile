# use this Dockerfile in exercises 1.13 and 1.14
# Use openjdk image
FROM golang:1.16-alpine

# Set the working directory
WORKDIR /app

# Copy the application JAR file into the container
COPY . .

RUN go build

# Expose port 8080
EXPOSE 8080

ENV REQUEST_ORIGIN=https://example.com

# Command to run the application
CMD ["./server"]
