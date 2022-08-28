import type {GetServerSideProps, NextPage} from 'next'
import {BookmarksResponse} from "../../services/models";
import {fetchBookmarks} from "../../services/api";
import Bookmarks from "../../components/Bookmarks";

interface HomeProps {
    bookmarks: BookmarksResponse
}
const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
        <Bookmarks bookmarks={props.bookmarks}/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {page = 1 } = context.query
    const bookmarks = await fetchBookmarks(parseInt(String(page)))
    return {
        props: {
            bookmarks
        }
    }
}

export default Home
