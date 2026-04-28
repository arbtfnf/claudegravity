package com.pulse.backend.controller;

import com.pulse.backend.model.Post;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @GetMapping
    public List<Post> getPosts() {
        return Arrays.asList(
            new Post(1L, "The Heartbeat of Equity: Fixing the Healthcare Divide", "/posts/healthcare-revolution", "April 28, 2026", "Medical", Arrays.asList("Social", "Healthcare"), "Exploring the gap between India and US systems and our initiative to fix the geographic lottery.", new Post.YoutubeVideo("The Geographic Lottery: Indian Healthcare vs US", "/video-thumb.png", "https://www.youtube.com/results?search_query=Pulse+Initiatives+Healthcare+Divide")),
            new Post(2L, "Scaling Referral Protocols for Rural India", "/tech/scaling-referral-systems", "April 27, 2026", "Tech", Arrays.asList("Progressive", "Infrastructure"), "A deep dive into the decentralized architecture needed to connect 600,000 villages.", null),
            new Post(3L, "Digital Privacy in the Age of Health Insurance", "/posts/healthcare-revolution", "April 26, 2026", "Medical", Arrays.asList("Responsible", "Data"), "How we can build trust-less verification systems to prevent insurance fraud.", null),
            new Post(4L, "The 10,000 Step Initiative: Gamifying Community Movement", "/posts/healthcare-revolution", "April 29, 2026", "Fitness", Arrays.asList("Physical", "AR"), "Using AR technology to incentivize entire neighborhoods to hit their daily movement goals.", null),
            new Post(5L, "Community Kitchens: Tech-Enabled Nutrition Routing", "/posts/healthcare-revolution", "April 30, 2026", "Social", Arrays.asList("Nutrition", "Logistics"), "How predictive modeling is helping route excess restaurant food to local community kitchens.", null)
        );
    }
}
