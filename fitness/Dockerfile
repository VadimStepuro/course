FROM openjdk:17

COPY src /javaApplication

WORKDIR /javaApplication

COPY .mvn/ .mvn
COPY mvnw pom.xml ./

RUN ./mvnw dependency:resolve

CMD ["./mvnw", "spring-boot:run"]