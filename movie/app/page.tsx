import Header from "./_utils/Header";
import Footer from "./_utils/Footer";
import EmphasizeLabel from "./_components/EmphasizeLabel";
import Slider from "./_components/Slider";
import Category from "./_components/Category";
import requests from "./_utils/request";

export default function Home() {
  return (
    <main className="h-screen ">
      <div className="overlay w-full  h-[873px] absolute bg-gradient-to-b from-gray-900 to-gray-700"></div>
      <div className="container max-w-[1516px] m-auto">
        <Header />
      </div>
      <section className="max-w-[1920px] m-auto flex flex-col gap-[10px]">
        <EmphasizeLabel />
        <Slider />
        <div className="container max-w-[1516px] m-auto mt-[200px] flex flex-col gap-[110px]">
          <Category request={requests.fetchComedyMovies} label="Currently playing" />
          <Category request={requests.fetchHorrorMovies} label="Coming soon" />
        </div>
      </section>
      <div className="container max-w-[1516px] m-auto">
        <Footer />
      </div>
    </main>
  );
}
