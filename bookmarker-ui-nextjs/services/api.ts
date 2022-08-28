import axios from "axios"
import {BookmarksResponse} from "./models";

const API_BASE_URL = "http://localhost:8080"

export const fetchBookmarks = async (page: number): Promise<BookmarksResponse> => {
    const res = await axios.get<BookmarksResponse>(`${API_BASE_URL}/api/bookmarks?page=${page}`)
    return res.data
}