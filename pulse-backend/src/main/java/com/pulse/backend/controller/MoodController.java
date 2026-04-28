package com.pulse.backend.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/mood")
@CrossOrigin(origins = "http://localhost:3000")
public class MoodController {

    @PostMapping("/generate-game")
    public Map<String, Game> generateGame(@RequestBody Map<String, Object> body) {
        // Simulate LLM processing delay
        try { Thread.sleep(2000); } catch (InterruptedException e) { e.printStackTrace(); }

        Game mockGame = new Game(
            "The Neon Pathfinder",
            "Exploration & Grounding",
            Arrays.asList(
                new GameTask(1L, "Walk exactly 100 steps away from your current location.", "physical", false),
                new GameTask(2L, "Find and take a photo of something bright yellow.", "ar", false),
                new GameTask(3L, "Do 10 deep breaths while looking at the sky.", "mindfulness", false)
            )
        );

        return Map.of("game", mockGame);
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Game {
        private String title;
        private String theme;
        private List<GameTask> tasks;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class GameTask {
        private Long id;
        private String description;
        private String type;
        private boolean completed;
    }
}
