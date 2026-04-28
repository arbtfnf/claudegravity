package com.pulse.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Post {
    private Long id;
    private String title;
    private String slug;
    private String date;
    private String category;
    private List<String> tags;
    private String excerpt;
    private YoutubeVideo youtubeVideo;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class YoutubeVideo {
        private String title;
        private String thumbnail;
        private String url;
    }
}
