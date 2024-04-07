import TopCarousel from "../components/home/TopCarousel";
import "../components/Home.css";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <div className="carousel-container">
          <TopCarousel />
        </div>
        <img
          className="home-img"
          src="https://media.istockphoto.com/id/1320062421/vector/cartoon-icon-cartoon-character-flat-vote-people-for-concept-design-poster-design.jpg?s=612x612&w=0&k=20&c=AASatZP46Igcf8NH4E6rmH3N6USU1whbq0GusGYN1gA="
          alt="vote img"
        />
        <section>
          <p className="home-card">
            LegisLink is an innovative application designed to empower and
            inform new voters, facilitating their active participation in the
            democratic process. This app aims to bridge the information gap that
            often hinders individuals entering the world of politics by
            providing user-friendly, reliable, and accessible information.
          </p>
        </section>
      </div>
    </main>
  );
}
