package com.sivalabs.bookmarker.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.domain.Page;

import java.util.List;

public class BookmarksDTO {
    private List<BookmarkDTO> data;
    private long totalElements;
    private int totalPages;
    private int currentPage;
    @JsonProperty("isFirst")
    private boolean isFirst;
    @JsonProperty("isLast")
    private boolean isLast;
    private boolean hasNext;
    private boolean hasPrevious;

    public List<BookmarkDTO> getData() {
        return data;
    }

    public void setData(List<BookmarkDTO> data) {
        this.data = data;
    }

    public long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(long totalElements) {
        this.totalElements = totalElements;
    }

    public int getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(int totalPages) {
        this.totalPages = totalPages;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public boolean isFirst() {
        return isFirst;
    }

    public void setFirst(boolean first) {
        isFirst = first;
    }

    public boolean isLast() {
        return isLast;
    }

    public void setLast(boolean last) {
        isLast = last;
    }

    public boolean isHasNext() {
        return hasNext;
    }

    public void setHasNext(boolean hasNext) {
        this.hasNext = hasNext;
    }

    public boolean isHasPrevious() {
        return hasPrevious;
    }

    public void setHasPrevious(boolean hasPrevious) {
        this.hasPrevious = hasPrevious;
    }

    public BookmarksDTO(Page<BookmarkDTO> bookmarkPage) {
        this.setData(bookmarkPage.getContent());
        this.setTotalElements(bookmarkPage.getTotalElements());
        this.setTotalPages(bookmarkPage.getTotalPages());
        this.setCurrentPage(bookmarkPage.getNumber() + 1);
        this.setFirst(bookmarkPage.isFirst());
        this.setLast(bookmarkPage.isLast());
        this.setHasNext(bookmarkPage.hasNext());
        this.setHasPrevious(bookmarkPage.hasPrevious());
    }
}
