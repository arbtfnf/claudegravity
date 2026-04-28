package com.pulse.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tech-challenge")
@CrossOrigin(origins = "http://localhost:3000")
public class TechController {

    private static final List<Map<String, String>> MOCK_QUESTIONS = Arrays.asList(
        Map.of("type", "DSA", "title", "Two Sum in O(N)", "desc", "Find two numbers that add up to target in O(N) time using a HashMap."),
        Map.of("type", "OOPS", "title", "Design a Parking Lot", "desc", "Define the classes, interfaces, and design patterns for a multi-level parking lot."),
        Map.of("type", "HLD", "title", "Design a URL Shortener", "desc", "Design a highly available URL shortener like bit.ly. Consider DB sharding and unique ID generation."),
        Map.of("type", "LLD", "title", "Rate Limiter", "desc", "Implement a sliding window rate limiter in code. Focus on thread-safety."),
        Map.of("type", "DSA", "title", "Reverse Linked List", "desc", "Reverse a singly linked list in-place in O(N) time and O(1) space."),
        Map.of("type", "HLD", "title", "Design a Chat System", "desc", "Design a real-time chat application like WhatsApp. Consider WebSockets and Message Queues."),
        Map.of("type", "OOPS", "title", "Design a Chess Game", "desc", "What are the core classes and interactions for a Chess game? Focus on state management."),
        Map.of("type", "DSA", "title", "Merge Intervals", "desc", "Given an array of intervals, merge all overlapping intervals efficiently."),
        Map.of("type", "LLD", "title", "Cache Eviction", "desc", "Implement an LRU Cache with O(1) get and put operations using a Doubly Linked List."),
        Map.of("type", "HLD", "title", "Design Netflix", "desc", "Design a video streaming service. Discuss CDN integration, transcoding, and scalable storage.")
    );

    @GetMapping
    public Map<String, List<Map<String, String>>> getQuestions() {
        return Map.of("questions", MOCK_QUESTIONS);
    }
}
