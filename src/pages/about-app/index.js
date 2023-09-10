import Image from "next/image";
import { Logo } from "@/components/Logo/Logo";

export default function AboutAppPage() {
  return (
    <main>
      <section className="app-info section section--colored">
        <div className="app-info__wrapper">
          <div className="app-info__pictures">
            <Image
              src="/images/ImgDecoration.png"
              width={120}
              height={100}
              className="app-info__decoration-top"
              alt="image decoration"
            />
            <Image
              src="/images/ImgDecoration.png"
              width={120}
              height={100}
              className="app-info__decoration-bottom"
              alt="image decoration"
            />

            <div className="app-info__picture-div-1">
              <Image
                className="app-info__image"
                src="/images/MacNotes.jpg"
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
              <h2 className="app-info__description_h2">Foreword</h2>
              <p className="app-info__description_p">
                Hello, I'm Peter.I study IT in Wrocław. I build this app to
                repeat my frontend knowledge. You can find more information
                about me{" "}
                <span className="text-highlight">
                  <a
                    target="_blank"
                    href="https://heroic-quokka-3e69bf.netlify.app"
                  >
                    here
                  </a>
                </span>
                , on my portfolio site.
              </p>

              <p className="app-info__description_p">
                The idea behind this app was to create project which will be at
                least a little bit useful, but not too complex. I've completed{" "}
                <span className="text-highlight">
                  <a target="_blank" href="https://nextjs.org">
                    NextJS
                  </a>
                </span>{" "}
                course recently and I needed a practical way to repeat the
                lessons I've learnt. So I've come up with the idea of ToDo List
                project. I knew that simple ToDo list would not be that
                interesting but the kanban board would require too much work.
                Finally I've decided to build ToDo app expanded with several
                additional functionalities.
              </p>

              <h2 className="app-info__description_h2">How to use the app?</h2>
              <p className="app-info__description_p">
                All you need to do is to just log in. There are a few ways to
                log in. The app supports facebook, github and google account
                validation. To log out from the app, go to the options panel.
                There you will find{" "}
                <span className="text-highlight">logout button</span>.
              </p>

              <h2 className="app-info__description_h2">Functionalities</h2>
              <p className="app-info__description_p">
                When using this app you can not only create a simple todo list,
                but also a much advanced lists which are called
                <span className="text-highlight"> tasklists</span>. Tasklist
                contains deadline, tags, operations and description. Operations
                are kind of subtasks, necessary to complete the main task. Each
                operation consists of estimated time needed to complete it and
                description. Tasklists are great tools that will certainly help
                you with big projects or long-term plans. Whereas, simple todo
                lists will work perfectly as reminders, quick notes or shopping
                lists.
              </p>

              <p className="app-info__description_p">
                Users can also see the{" "}
                <span className="text-highlight"> pinned lists</span> on the
                homepage. In the list creator, there is a possibility to mark
                the checkbox in order to display the list in the pinned lists
                section. There are two slots for simple lists and one slot for
                tasklist to pin. You can manage the pinned lists in the options
                panel.
              </p>

              <p className="app-info__description_p">
                There is also a bunch of theme options so you can choose your
                favorite color motive. Among others, application offers
                celestial blue theme, orange theme,
                <span className="text-highlight"> nightmode</span> and more. You
                can change color settings in the options panel.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
