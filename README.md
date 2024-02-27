# ToDo App created with NextJS and MongoDB
## The app faciliates the organisation of everyday life or long-term plans to its users. It provides ability to manage time better with tasklists and simple lists.


### The app was created in order to learn NextJS functionalities in a practical way. User can log in with google or github account. Then he is able to view, create, edit and delete simple todo lists or more complex tasklists. User can also change color theme according to his preferences.

#### Technologies used in the app:
[<img  align="left" alt="Next" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" style="padding-right:10px;"/>]() NextJS
[<img align="left" alt="MongoDB" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" style="padding-right:10px;" />]() MongoDB
[<img align="left" alt="React" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="padding-right:10px;" />]()React
[<img align="left" alt="Sass" width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" style="padding-right:10px;" />]()SASS

#### Next Features used in the app:
-> OAuth
-> ServerSide Generation
-> Api Routes
-> Next Image
-> File Based Routing


#### App Setup Instructions:
1. Download repo
2. use npm i in downloaded folder
3. use npm run dev in order to run the app
4.

#### App User Guide:
1. Creating List:
-> Go to ListCreator
-> Enter needed information and click save, app will reload and redirect you to the homepage

2. List view and editing:
-> On homepage click on the list which you want to open
-> You will be redirected to specific list page
-> From there you can edit the title and tasks (also deadline and description if you are editing tasklist).
-> To discard changes, click "Discard" button then the page will be reloaded and the changes will be cancelled.
-> To save, click "Save" button, then the page also will be reloaded, but the changes will be saved to the database.

3. List deleting:
-> Go to homepage
-> Click the red, trash icon of the list you want to delete
-> Then the popup will be displayed
-> If you are sure to delete the item, click "Yes" button on the popup window

4. Adding Task to Tasklist
-> On specific tasklist page, click on the "Add Task" accordion component
-> Fill in the inputs, add operations and click Cancel/Add, then the page will be reloaded.

5. Theme Changes:
-> Go to options page
-> Choose the theme options tab
-> Select preferred color motive
-> Discard changes or save it to the database

6. Logging Out
-> Go to options page
-> Choose the log out tab
-> Confirm log out

PS: I'know that the code is not as clean as it should be. 