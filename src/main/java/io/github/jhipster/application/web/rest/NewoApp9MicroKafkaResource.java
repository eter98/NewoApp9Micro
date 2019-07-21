package io.github.jhipster.application.web.rest;

import io.github.jhipster.application.service.NewoApp9MicroKafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/newo-app-9-micro-kafka")
public class NewoApp9MicroKafkaResource {

    private final Logger log = LoggerFactory.getLogger(NewoApp9MicroKafkaResource.class);

    private NewoApp9MicroKafkaProducer kafkaProducer;

    public NewoApp9MicroKafkaResource(NewoApp9MicroKafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping(value = "/publish")
    public void sendMessageToKafkaTopic(@RequestParam("message") String message) {
        log.debug("REST request to send to Kafka topic the message : {}", message);
        this.kafkaProducer.sendMessage(message);
    }
}
