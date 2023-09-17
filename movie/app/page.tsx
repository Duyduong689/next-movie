import Header from "./_utils/Header";
import Footer from "./_utils/Footer";
import EmphasizeLabel from "./_components/EmphasizeLabel";
import Carousel from "./_components/Carousel";
import Category from "./_components/Category";
import requests from "./_utils/request";
import TheaterInfo from "./_components/TheaterInfo";

export default function Home() {
  return (
    <main className="h-screen ">
      <div className="overlay w-full  h-[600px] md:h-[873px] absolute bg-gradient-to-b from-gray-700 to-gray-900"></div>
      <div className="container max-w-[1816px] m-auto px-[5%]">
        <Header />
      </div>
      <section className="max-w-[1920px] m-auto flex flex-col gap-[10px]">
        <EmphasizeLabel />
        <Carousel />
        <div className="container max-w-[1816px] m-auto flex flex-col gap-[110px] px-[5%]">
          <Category
            request={requests.fetchComedyMovies}
            label="Currently playing"
          />
          <Category request={requests.fetchHorrorMovies} label="Coming soon" />
          <TheaterInfo />
        </div>
      </section>
      <div className=" max-w-[1920px] m-auto">
        <Footer />
      </div>
    </main>
  );
}
