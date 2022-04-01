import { NewsCard } from './../components/ui/NewsCard';
import { getSession, useSession } from "next-auth/react"
import DashboardLayout from "../components/layouts/DashboardLayout";
import Title from "../components/ui/Title";
import useFetch from "../hooks/useFetch";

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (session === null) {
        return {
            redirect: {
                destination: '/auth/signin',
                permanent: false
            }
        }
    }
    return {
        props: {
            session
        },
    }
}

export default function News() {
    const { status, data: session } = useSession();
    if (status === "loading") return null
    const user = session?.user;

    interface Article {
        title: string;
        url: string;
        urlToImage: string;
        description: string;
    }
    interface Data {
        articles: Article[];
    }


    const { data } = useFetch<Data>(`http://localhost:3000/api/news`)

    return (
        <DashboardLayout title="News Today" user={user}>
            <Title h1>Today:</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                {data && data.articles.map(news => (
                    <NewsCard news={news} key={news.title} />
                ))}
            </div>
        </DashboardLayout>
    )
}