package io.github.jhipster.application.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class NewoApp9MicroKafkaConsumer {

    private final Logger log = LoggerFactory.getLogger(NewoApp9MicroKafkaConsumer.class);
    private static final String TOPIC = "topic_newoapp9micro";

    @KafkaListener(topics = "topic_newoapp9micro", groupId = "group_id")
    public void consume(String message) throws IOException {
        log.info("Consumed message in {} : {}", TOPIC, message);
    }
}
