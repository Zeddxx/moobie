<div align="center">
  <img src="/public/assets/logos/moobie-light.svg" width="280" alt="moobie logo" align="center" />
   <p>Welcome to moobie codebase, i guess you liked the project?</p>
  <pre>Please give this repo a star ⭐️</pre>
  <img src="https://img.shields.io/badge/NextJs-Typescript-blue" alt="typescrpt badge" />
  <img src="https://img.shields.io/badge/web-scrapper-red" alt="scrapper badge" />
  <img src="https://img.shields.io/badge/Korean-Drama-pink" alt="drama badge" />
  <img src="https://img.shields.io/badge/video-streaming-yellow" alt="steaming badge" />
  <img src="https://img.shields.io/badge/TailwindCss-blue" alt="typescrpt badge" />
</div>

<div align="center">
  <h2>
    Why I created Moobie? 🤓
  </h2>
  <p>
    My main motive was to learn server side rendering in NextJs and how it is different from client side rendering. Creating a clean UI/UX web application is my hobbie and what i wanted was to provide the content to user without any annoying ads and popups.
  </p>
  <pre>
    Open for new ideas. 🫡
  </pre>
</div>

## Workflow of moobie.
There is a backend which is scraping a website for the desired details the most of the complexity is working behind the UI. As backend is merged with consumet to get streaming links and show it to user.

- Backend
  - Scrapping a website to get desired details such as image source, title, etc.
  - Collecting it into an array of objects.
  - Created a route which returns those details.
  - Creation of backend was a new experience for me but it felt kind of easy not totally.
  - The main thing which gave problem to me was on deployment 😅.
  
- Frontend
  - Yellow theming as i am not a great ui designer but still made it look aesthetic and clean with all screen responsivness.
  - A Good looking landing page for the new user to get a brief why i created moobie.
  - I personally loves to add the toggle theming from `dark` to `light` still default will be `system`.
  - I Mostly used SSR which clearly hides the api calls in network section. somehow i loved this.


## Installation.
> [!IMPORTANT]
> I am not sure if you should clone it or not as it uses the scrapper created by me. but still if you are into learning how UI/UX is working then go for it.

- Clone the moobie repo through terminal.

  ```bash
  git clone https://github.com/Zeddxx/moobie.git
  ```

- Get into the folder.
  
   ```bash
   cd moobie
   ```

- Install the required dependencies.
  ```bash
  npm install or yard add
  ```

- Run the project.
  ```bash
  npm run dev
  ```

## TODO
<pre>Feature that i have yet to implement.</pre>

- [x] Beautiful landing or marketing page.
- [ ] Navbar
  - [x] Theme selector.
  - [x] Search functionality.
  - [ ] Resposive hamburger.
     - As currently there is not much pages due to which i have not yet made it work.
- [ ] Skeleton loader.
  - [x] Skeleton loader for home page.
  - [x] Loader for info page.
  - [ ] Loader for Watch page.
  - [ ] Loader for search page.
- [ ] Authentication.
- [x] SEO implementation.
- [ ] Moobie player.
  - [x] Add desired theme UI.
  - [ ] Next and Previous button to navigate episodes.
  - [ ] Add the datails into currently watching.


## Have an issue?

Error may can arise if it does so please do open an issue <a href="https://github.com/Zeddxx/moobie/issues" title="moobie issue">here.</a> I will probably get in touch within 5 - 6hrs.

## Future plans

After completing this project i will dive into my last project that is in my mind so if you guys do have any idea and want to create something together then do count me in. If i get busy in future i will make this repo an open source so its upto you guys to maintain it 🥺.
