package com.example.demo;

import java.io.IOException;
import java.io.InputStream;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/simulation")
@CrossOrigin(origins = "http://localhost:3000")
public class SimulationController {
    private ForestFireSimulation simulation;

    @GetMapping("/init")
    public ResponseEntity<int[][]> initializeSimulation() {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            InputStream inputStream = getClass().getClassLoader().getResourceAsStream("config.json");
            if (inputStream == null) {
                throw new IOException("File not found: config.json");
            }
            SimulationConfig config = objectMapper.readValue(inputStream, SimulationConfig.class);

            int height = config.getHeight();
            int width = config.getWidth();
            double probability = config.getProbability();
            int[][] initialPositions = config.getInitialFirePositions();

            simulation = new ForestFireSimulation(height, width, probability);
            simulation.initialize(initialPositions);
            return new ResponseEntity<>(simulation.getGrid(), HttpStatus.OK);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/step")
    public ResponseEntity<int[][]> stepSimulation() {
        simulation.step();
        return new ResponseEntity<>(simulation.getGrid(), HttpStatus.OK);
    }
}