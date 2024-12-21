package com.example.demo;

// ForestFireSimulation.java
import java.util.Random;

public class ForestFireSimulation {
    private int height;
    private int width;
    private double probability;
    private int[][] grid;

    public ForestFireSimulation(int height, int width, double probability) {
        this.height = height;
        this.width = width;
        this.probability = probability;
        this.grid = new int[height][width];
    }

    public void initialize(int[][] initialFirePositions) {

        for (int[] pos : initialFirePositions) {
            grid[pos[0]][pos[1]] = 1; // 1 represents fire
        }

    }

    public void step() {
        int[][] newGrid = new int[height][width];
        Random rand = new Random();

        for (int i = 0; i < height; i++) {
            for (int j = 0; j < width; j++) {

                if (grid[i][j] == 1) {
                    if (i > 0 && grid[i - 1][j] == 0 && rand.nextDouble() < probability) {
                        newGrid[i - 1][j] = 1;
                    }
                    if (i < height - 1 && grid[i + 1][j] == 0 && rand.nextDouble() < probability) {
                        newGrid[i + 1][j] = 1;
                    }
                    if (j > 0 && grid[i][j - 1] == 0 && rand.nextDouble() < probability) {
                        newGrid[i][j - 1] = 1;
                    }
                    if (j < width - 1 && grid[i][j + 1] == 0 && rand.nextDouble() < probability) {
                        newGrid[i][j + 1] = 1;
                    }
                    grid[i][j] = 2;
                }
                if (grid[i][j] == 2) {
                    newGrid[i][j] = 2;
                }

            }

        }

        grid = newGrid;

    }

    public int[][] getGrid() {
        return grid;
    }
}
