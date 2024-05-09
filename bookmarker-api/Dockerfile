FROM eclipse-temurin:17.0.11_9-jre-focal

ADD target/*.jar app.jar
RUN sh -c 'touch /app.jar'
EXPOSE 8080
ENTRYPOINT [ "sh", "-c", "java -jar /app.jar" ]
