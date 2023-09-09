import Image from "next/image";
import { Logo } from "@/components/Logo/Logo";

export default function HomePage() {
  return (
    <main>
      <section className="app-info section section--colored">
        <div className="app-info__wrapper">
          <div className="app-info__pictures">
            <div className="app-info__picture-div-1">
              <Image
                className="app-info__image"
                src="/images/CoffeeNotes.jpg"
                fill={true}
                alt="Coffe Notes"
                sizes="(max-width: 768px) 100vw"
              />
            </div>

            <div className="app-info__picture-div-2">
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
            <h1 className="app-info__header">
              About the <Logo isDark={true} />{" "}
            </h1>

            <div className="app-info__description">
              <p className="app-info__description_p">
                In this app you can not only create a simple todo list, but you can also
                create a much advanced lists which are called 
                <span className="text-highlight"> tasklists</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
