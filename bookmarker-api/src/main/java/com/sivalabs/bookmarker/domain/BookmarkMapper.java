package com.sivalabs.bookmarker.domain;

import org.springframework.stereotype.Component;

@Component
public class BookmarkMapper {

    public BookmarkDTO toDTO(Bookmark bookmark) {
        BookmarkDTO dto = new BookmarkDTO(bookmark.getId(), bookmark.getTitle(), bookmark.getUrl(), bookmark.getCreatedAt());
        dto.setId(bookmark.getId());
        dto.setTitle(bookmark.getTitle());
        dto.setUrl(bookmark.getUrl());
        dto.setCreatedAt(bookmark.getCreatedAt());
        return dto;
    }
}
