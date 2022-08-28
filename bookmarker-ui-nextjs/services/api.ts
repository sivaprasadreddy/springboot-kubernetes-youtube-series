import axios from "axios"
import {BookmarksResponse} from "./models";

const API_BASE_URL = "http://localhost:8080"

export const fetchBookmarks = async (page: number, query: string): Promise<BookmarksResponse> => {
    let url = `${API_BASE_URL}/api/bookmarks?page=${page}`
    if(query) {
        url += `&query=${query}`
    }
    const res = await axios.get<BookmarksResponse>(url)
    return res.data
}