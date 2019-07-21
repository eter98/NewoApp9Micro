package io.github.jhipster.application.web.rest;

import io.github.jhipster.application.NewoApp9MicroApp;
import io.github.jhipster.application.service.NewoApp9MicroKafkaProducer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.kafka.test.context.EmbeddedKafka;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@EmbeddedKafka
@SpringBootTest(classes = NewoApp9MicroApp.class)
public class NewoApp9MicroKafkaResourceIT {

    @Autowired
    private NewoApp9MicroKafkaProducer kafkaProducer;

    private MockMvc restMockMvc;

    @BeforeEach
    public void setup() {
        NewoApp9MicroKafkaResource kafkaResource = new NewoApp9MicroKafkaResource(kafkaProducer);

        this.restMockMvc = MockMvcBuilders.standaloneSetup(kafkaResource)
            .build();
    }

    @Test
    public void sendMessageToKafkaTopic() throws Exception {
        restMockMvc.perform(post("/api/newo-app-9-micro-kafka/publish?message=yolo"))
            .andExpect(status().isOk());
    }
}
