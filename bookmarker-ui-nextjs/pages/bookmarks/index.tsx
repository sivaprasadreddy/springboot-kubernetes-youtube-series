import type {GetServerSideProps, NextPage} from 'next'
import {BookmarksResponse} from "../../services/models";
import {fetchBookmarks} from "../../services/api";
import Bookmarks from "../../components/Bookmarks";
import SearchForm from "../../components/SearchForm";

interface HomeProps {
    bookmarks: BookmarksResponse
    query?: string
}
const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
        <SearchForm/>
        <Bookmarks bookmarks={props.bookmarks} query={props.query}/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {page = 1, query = "" } = context.query
    const bookmarks = await fetchBookmarks(parseInt(String(page)), String(query))
    return {
        props: {
            bookmarks,
            query
        }
    }
}

export default Home
