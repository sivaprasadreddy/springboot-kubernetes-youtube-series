package com.sivalabs.bookmarker.domain;

import java.time.Instant;


public class BookmarkDTO {
    private Long id;
    private String title;
    private String url;
    private Instant createdAt;

    public BookmarkDTO(Long id, String title, String url, Instant createdAt) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
