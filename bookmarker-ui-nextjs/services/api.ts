import axios from "axios"
import {BookmarksResponse} from "./models";

export const fetchBookmarks = async (page: number, query: string): Promise<BookmarksResponse> => {
    let baseUrl = process.env.SERVER_SIDE_API_BASE_URL || process.env.CLIENT_SIDE_API_BASE_URL;
    let url = `${baseUrl}/api/bookmarks?page=${page}`
    if(query) {
        url += `&query=${query}`
    }
    const res = await axios.get<BookmarksResponse>(url)
    return res.data
}

export const saveBookmark = async (bookmark:{title: string, url: string}, apiUrl: string) => {
    const res = await axios.post(`${apiUrl}/api/bookmarks`, bookmark)
    return res.data
}