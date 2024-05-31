# complete this Dockerfile in exercise 1.11
# Use the openjdk image with Java 8
FROM openjdk:8

# Set the working directory
WORKDIR /app

# Copy the project files
COPY . .

# Build the project
RUN ./mvnw package

# Expose the port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "./target/docker-example-1.1.3.jar"]

