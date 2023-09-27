import Image from "next/image";
import { ImgDecoration } from "@/components/ImgDecoration/ImgDecoration";
import { Logo } from "@/components/Logo/Logo";

export default function AboutAppPage() {
  return (
    <main>
      <main className="app-info main">
        <div className="app-info__wrapper">
          <div className="app-info__pictures">
            <ImgDecoration type="top" />
            <ImgDecoration type="bottom" />

            <div className="app-info__picture-div-1">
              <Image
                className="next-image"
                src="/images/MacNotes.jpg"
                fill={true}
                alt="Macbook Notes"
                sizes="(max-width: 768px) 100vw"
              />
            </div>

            <div className="app-info__picture-div-2">
              <Image
                className="next-image"
                src="/images/Notes.jpg"
                fill={true}
                alt="Notes"
                sizes="(max-width: 1050px) 100vw"
              />
            </div>
          </div>

          <div className="app-info__content">
            <h1 className="section__header">
              About the <Logo isDark={true} />{" "}
            </h1>

            <div className="section__description">
              <div className="section__description_div">
                <h2 className="section__description_h2">Foreword</h2>
                <p className="section__description_p">
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
                <p className="section__description_p">
                  The idea behind this app was to create project which will be
                  at least a little bit useful, but not too complex. I've
                  completed{" "}
                  <span className="text-highlight">
                    <a target="_blank" href="https://nextjs.org">
                      NextJS
                    </a>
                  </span>{" "}
                  course recently and I needed a practical way to repeat the
                  lessons I've learnt. So I've come up with the idea of ToDo
                  List project. I knew that simple ToDo list would not be that
                  interesting but the kanban board would require too much work.
                  Finally I've decided to build ToDo app expanded with several
                  additional functionalities.
                </p>
              </div>

              <div className="section__description_div">
                <h2 className="section__description_h2">How to use the app?</h2>
                <p className="section__description_p">
                  All you need to do is to just log in. There are a few ways to
                  log in. The app supports facebook, github and google account
                  validation. To log out from the app, go to the options panel.
                  There you will find{" "}
                  <span className="text-highlight">logout button</span>.
                </p>
              </div>

              <div className="section__description_div">
                <h2 className="section__description_h2">Functionalities</h2>
                <p className="section__description_p">
                  When using this app you can not only create a simple todo
                  list, but also a much advanced lists which are called
                  <span className="text-highlight"> tasklists</span>. Tasklist
                  contains deadline, tags, operations and description.
                  Operations are kind of subtasks, necessary to complete the
                  main task. Each operation consists of estimated time needed to
                  complete it and description. Tasklists are great tools that
                  will certainly help you with big projects or long-term plans.
                  Whereas, simple todo lists will work perfectly as reminders,
                  quick notes or shopping lists.
                </p>

                <p className="section__description_p">
                  Users can also see the{" "}
                  <span className="text-highlight"> pinned lists</span> on the
                  homepage. In the list creator, there is a possibility to mark
                  the checkbox in order to display the list in the pinned lists
                  section. There are two slots for simple lists and one slot for
                  tasklist to pin. You can manage the pinned lists in the
                  options panel.
                </p>

                <p className="section__description_p">
                  There is also a bunch of theme options so you can choose your
                  favorite color motive. Among others, application offers
                  celestial blue theme, orange theme,
                  <span className="text-highlight"> nightmode</span> and more.
                  You can change color settings in the options panel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="lists-diffs section section--colored">
        <h1 className="section__header">
          Tasklists and simple lists
        </h1>
        <div className="lists-diffs__picture">
          <ImgDecoration type="top" />
          <ImgDecoration type="bottom" />

          <Image
            className="next-image"
            src="/images/PinnedNotes.jpg"
            fill={true}
            alt="Coffe and Notes"
            sizes="(max-width: 768px) 100vw"
          />
        </div>

        <div className="lists-diffs__content section__description">
          <div className="section__description_div">
            <h2 className="section__description_h2">Simple lists</h2>
            <p className="section__description_p">
              Great option for simple tasks which don't take much time to
              finish. If you have to do bunch of easy things which don't require
              much effort nor complicated operations, this type of a list would
              be perfect. They also work great as shopping lists or house
              chores' lists.
            </p>

            <p className="section__description_p">
              To create the list, simply go to the{" "}
              <span className="text-highlight"> Your Lists</span> page and then
              select simple list on list creator. Now you can write a title of
              the list, add any tags if you want or choose if the list would be
              displayed on Homepage as a pinned list. Afterwards you can click
              button "Create List", which will automatically open up new tab in
              the browser with the generated list. There you can edit it - add
              or remove tasks from that list or mark them as finished. Users can
              also change the tags and title.
            </p>
          </div>

          <div className="section__description_div">
            <h2 className="section__description_h2">Taskists</h2>
            <p className="section__description_p">
              When it comes to the projects or long-term plans that consists of
              many subtasks, the tasklists are here to help you to organize them
              all. In this app the subtasks are called "operations".
            </p>

            <p className="section__description_p">
              Creation of tasklist is similar to simple list. Firstly you go to
              the <span className="text-highlight"> Your Lists</span> page.
              Secondly you select "tasklist" in list creator. Then you set up
              your title and tags. In addition to that you can select a deadline
              (date by which all subtasks should be completed) and add the
              description. Afterwards you will be redirected to the list you've
              just created.
              There you can add and manage operations. Tasklists can contain any
              amount of them. Each operation can have its own deadline and
              description. You can also change the subtasks order.
            </p>

          </div>

          <div className="section__description_div">
            <h2 className="section__description_h2">Tags</h2>
            <p className="section__description_p">
              Tags are sort of keywords that you can assign to each list. They
              enable you to find them by filtering lists on{" "}
              <span className="text-highlight"> Your Lists </span> page.
            </p>
          </div>

          <div className="section__description_div">
            <h2 className="section__description_h2">
              Pinning lists and tasklists
            </h2>
            <p className="section__description_p">
              You can have up to two pinned simple lists and one tasklist.
              To manage pinned lists you need to go to the{" "}
              <span className="text-highlight">Options</span> page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
