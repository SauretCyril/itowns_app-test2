package com.example.demo;

import com.fasterxml.jackson.annotation.JsonAlias;

public class SimulationConfig {
    private int height;
    private int width;
    private double probability;

    @JsonAlias("initialPositions")
    private int[][] initialFirePositions;

    // Getters
    public int getHeight() {
        return height;
    }

    public int getWidth() {
        return width;
    }

    public double getProbability() {
        return probability;
    }

    public int[][] getInitialFirePositions() {
        return initialFirePositions;
    }

    // Setters
    public void setHeight(int height) {
        this.height = height;
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public void setProbability(double probability) {
        this.probability = probability;
    }

    public void setInitialFirePositions(int[][] initialFirePositions) {
        this.initialFirePositions = initialFirePositions;
    }
}