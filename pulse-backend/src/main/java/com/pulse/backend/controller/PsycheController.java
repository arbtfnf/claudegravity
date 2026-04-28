package com.pulse.backend.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/psyche")
@CrossOrigin(origins = "http://localhost:3000")
public class PsycheController {

    private static final List<Map<String, Object>> PSYCHE_PROMPTS = Arrays.asList(
        Map.of("id", 1L, "imageUrl", "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80", "question", "Look at the image above. What is the first situation or memory that comes to mind? Describe it in detail."),
        Map.of("id", 2L, "imageUrl", "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80", "question", "If this image represented a conflict you are currently facing, what would it be?"),
        Map.of("id", 3L, "imageUrl", "https://images.unsplash.com/photo-1605342416801-443b3552fc87?auto=format&fit=crop&w=800&q=80", "question", "What emotion does the focal point of this image evoke? Write down your raw, unfiltered thoughts.")
    );

    @GetMapping
    public Map<String, List<Map<String, Object>>> getPrompts() {
        List<Map<String, Object>> shuffled = new ArrayList<>(PSYCHE_PROMPTS);
        Collections.shuffle(shuffled);
        return Map.of("prompts", shuffled);
    }

    @PostMapping
    public Map<String, Object> analyzeResponses(@RequestBody Map<String, Object> body) {
        // Simulated LLM analysis delay
        try { Thread.sleep(2500); } catch (InterruptedException e) { e.printStackTrace(); }

        Map<String, Object> mockAnalysis = Map.of(
            "dominantEmotion", "Reflective & Analytical",
            "cognitivePatterns", Arrays.asList(
                "High tendency to seek structure within chaotic environments.",
                "Underlying focus on resolving past or abstract conflicts.",
                "Empathetic language detected in projective descriptions."
            ),
            "recommendation", "You are currently exhibiting a highly analytical psychological state. Engaging in unstructured physical activities or creative hobbies may help balance this cognitive load."
        );

        return Map.of("analysis", mockAnalysis);
    }
}
