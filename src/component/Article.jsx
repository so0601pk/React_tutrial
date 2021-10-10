import {Content, Title} from "./index";
import { useState } from "react";
import PublishedButton from "./PublishedButton";

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false)
    const publishedArticle = () =>{
        setIsPublished(true)
    }
    return (
        <div>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishedButton isPublished={isPublished} onClick={publishedArticle} />
        </div>
    );
};

export default Article;