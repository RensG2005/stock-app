import Image from "next/image"
import Layout from "../components/layouts/Layout"
import Title from "../components/ui/Title"

const Homepage = () => {
  return (
    <Layout title="Homepage">
      <Image src={"/homepageHero.jpg"} layout="fill" />
      <Image src={"/homepageHero.jpg"} layout="fill" />
      <Title h1>Homepage</Title>
    </Layout>
  )
}

export default Homepage
