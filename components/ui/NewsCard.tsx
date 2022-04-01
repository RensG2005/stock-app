import Title from "./Title";

export function NewsCard({ news }) {
    return (
        <div className="p-4">
            <a href={news.url} target="_blank">
                <img src={news.urlToImage} className="object-cover mx-auto max-h-40" />
                <Title h3>{news.title}</Title>
                <p>{news.description}</p>
            </a>
        </div>
    )
}
