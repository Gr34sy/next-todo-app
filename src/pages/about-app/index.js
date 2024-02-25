import Image from "next/image";
import { ImgDecoration } from "@/components/ImgDecoration/ImgDecoration";
import { Logo } from "@/components/Logo/Logo";

export default function AboutAppPage() {
  return (
    <div className="app-info">
      <main className="main app-info__wrapper">
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
            About the <Logo isDark={true} />
          </h1>

          <div className="section__description">
            <div className="section__description_div">
              <h2 className="section__description_h2">Foreword</h2>
              <p className="section__description_p">
                Hello, I'm Peter. I study IT in Wrocław. I built this app to
                learn backend as well as Next.js. You can find more information
                about me
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
                The idea behind this app was to create project which will be at
                least a little bit useful, but not too complex. I've completed
                <span className="text-highlight">
                  <a target="_blank" href="https://nextjs.org">
                    NextJS
                  </a>
                </span>
                course recently and I needed a practical way to repeat
                techniques I've learnt. I thought that simple ToDo list would not be that
                interesting but the kanban board would require too much work.
                Finally I've decided to build ToDo app expanded with several
                functionalities.
              </p>
            </div>

            <div className="section__description_div">
              <h2 className="section__description_h2">How to use the app?</h2>
              <p className="section__description_p">
                Firstly you need to log in. There are two authorization options which allow that. App supports github and google account
                validation. To log out from the app, go to the options panel.
                There you will find
                <span className="text-highlight">logout button</span>.
              </p>
              <p className="section__description_p">
                Then you can use the app to its full potential. To create list or tasklist go to 
                <span className="text-highlight">List Creator</span>. 
                All of your lists are accessable from 
                <span className="text-highlight">Home</span> tab. 
                Editing a list is avialable in the specific list view. You can also customize color theme. In order to do that go to 
                <span className="text-highlight">Options</span> panel.
              </p>
            </div>

            <div className="section__description_div">
              <h2 className="section__description_h2">Lists</h2>
              <p className="section__description_p">
                When using this app you can not only create a simple todo list,
                but also a much advanced lists which are called
                <span className="text-highlight"> tasklists</span>. Tasklist
                contains deadline, description and tasks. Tasks in tasklist
                on the other hand contain subtasks, necessary to complete the main task. Each
                subtask is called operation and also has a deadline. Tasklists are great tools that will help
                you with the bigger projects or long-term plans. Whereas, simple todo
                lists will work perfectly as reminders, quick notes or shopping
                lists.
              </p>

              

              <p className="section__description_p">
                There is also a bunch of theme options so you can choose your
                favorite color motive. Among others, application offers
                celestial blue theme, orange theme,
                <span className="text-highlight"> nightmode</span> and more. You
                can change color settings in the options panel.
              </p>
            </div>

            <div className="section__description_div">
              <h2 className="section__description_h2">Color Themes</h2>
              <p className="section__description_p">
                There are also a bunch of theme options so you can choose your
                favorite color motive. Among others, application offers
                celestial blue theme, orange theme,
                <span className="text-highlight"> nightmode</span> and more. You
                can change color settings in the options panel.
              </p>
            </div>
          </div>
        </div>
      </main>

      <section className="lists-diffs">
        <h1 className="section__header">List Comparison</h1>
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
              To create the list, simply go to the
              <span className="text-highlight"> List Creator </span> page and then
              select list in tab menu. Now you can write a title of
              the list and add tasks to it. Afterwards you can click
              button "Save", which will automatically redirect you back to homepage. 
              There you can find newly added list and go to its view. In the view you can edit title and each task. 
              There are also options to add and remove tasks from the list.
            </p>
          </div>

          <div className="section__description_div">
            <h2 className="section__description_h2">Taskists</h2>
            <p className="section__description_p">
              When it comes to the projects or long-term plans that consists of
              many subtasks, the tasklists are here to help you to organize them
              all. In this app the subtasks are called "operations". Each operation has its own
              deadline.
            </p>

            <p className="section__description_p">
              Creation of tasklist is similar to simple list. Firstly you go to
              the <span className="text-highlight"> List Creator</span> page.
              Then select "tasklist" in list creator tabs. Next you set up
              tasklists' title, (date by which all subtasks should be completed) deadline, description and tasks. Afterwards you will also be redirected to the homepage.
              If you click newly created tasklist you will go to the selected tasklist view.
              There you can edit tasklist and manage operations  of a  specific task or add a new one. Tasklists
              can contain any amount of tasks or operations.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
