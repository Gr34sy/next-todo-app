export default function HomePage() {
  return (
    <main>
      <section className="app-info section section--colored">
        <div className="app-info__wrapper">
          <div className="app-info__pictures">
            <div className="pic1"></div>

            <div className="pic2"></div>
          </div>

        

          <div className="app-info__content">
            <h1 className="app-info__header">
                About the app
            </h1>

            <p className="app-info__description">
              In ToDo App (logotype) you can not only create a simple todo list, but you can also create a much advanced tasklist. 
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
