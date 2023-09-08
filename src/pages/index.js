import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <section className="app-info section section--colored">
        <div className="app-info__wrapper">
          <div className="app-info__pictures">
            <div className="app-info__picture-1">
              <Image
                className="app-info__image"
                src="/images/CoffeeNotes.jpg"
                fill={true}
                alt="Coffe Notes"
                sizes="(max-width: 768px) 100vw"
              />
            </div>

            <div className="app-info__picture-2">
              <Image
                className="app-info__image"
                src="/images/Notes.jpg"
                fill={true}
                alt="Notes"
                sizes="(max-width: 1050px) 100vw"
              />
            </div>
          </div>

          <div className="app-info__content">
            <h1 className="app-info__header">About the app</h1>

            <p className="app-info__description">
              In ToDo App (logotype) you can not only create a simple todo list,
              but you can also create a much advanced tasklist.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
