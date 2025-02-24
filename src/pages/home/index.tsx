import Post1 from "/src/assets/post1.webp";
import "./index.scss";

const HomePage: React.FC = () => {
  return (
    <>
      <section id="section1">
        <div className="split" style={{ backgroundImage: `url(${Post1})` }}>
          <div className="left-split">
            <img src={Post1} alt="" />
          </div>
          <div className="right-split">
            <h3 className="title">
              Top 10 Must-Watch Anime Series to Binge This Weekend
            </h3>
            <p className="content">
              Are you looking for your next anime obsession? Whether you're a
              seasoned otaku or a newcomer, we've curated a list of the top 10
              must-watch anime series that will keep you hooked from the first
              episode. From action-packed adventures to heartwarming stories,
              there’s something for everyone. Dive into worlds filled with
              breathtaking animation, compelling characters, and unforgettable
              plot twists.
            </p>
            <a href="https://hianime.to/" target="_blank">
              Sahifani ochish
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
