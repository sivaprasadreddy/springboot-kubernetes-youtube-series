import React from "react";
import {Bookmark} from "../services/models";
import Link from "next/link";
interface BookmarkProps {
    bookmark: Bookmark
}
const Bookmark: React.FC<BookmarkProps> = ({bookmark}) => (
    <div>
        <div className="alert alert-primary" role="alert">
            <h5>
                <Link href={bookmark.url}>
                     <a target={"_blank"} className={'text-decoration-none'}>{bookmark.title}</a>
                </Link>
            </h5>
        </div>
    </div>
)

export default Bookmark;