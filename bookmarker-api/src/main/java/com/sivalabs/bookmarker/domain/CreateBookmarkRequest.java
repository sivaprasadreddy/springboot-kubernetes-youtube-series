package com.sivalabs.bookmarker.domain;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;

@Setter
@Getter
public class CreateBookmarkRequest {
    @NotEmpty(message = "Title should not be empty")
    private String title;
    @NotEmpty(message = "Url should not be empty")
    private String url;
}
