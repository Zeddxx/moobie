<img src="/public/assets/images/banner.png" alt="moobie banner" width="430" />

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
    My main motive was to learn server-side rendering in Next.js and how it differs from client-side rendering. Creating a clean UI/UX web application is my hobby, and what I wanted was to provide content to users without any annoying ads and pop-ups.
  </p>
  <pre>
    Open for new ideas. 🫡
  </pre>
</div>

## Workflow of moobie.
There is a backend that is scraping a website for the desired details; most of the complexity is working behind the UI. The backend is merged with a consumetApi to retrieve streaming links and show them to the user.
- Backend
  - Scraping a website to retrieve desired details such as image source, title, etc.
  - Collecting them into an array of objects.
  - Creating a route that returns those details.
  - Creating the backend was a new experience for me, but it felt kind of easy, though not entirely.
  - The main issue I encountered was during deployment 😅.
  
- Frontend
  - Yellow theming, as I am not a great UI designer, but I still managed to make it look aesthetic and clean with full screen responsiveness.
  - A good-looking landing page for new users to understand briefly why I created Moobie.
  - I personally love to add the toggle theming from `dark` to `light`, with the default being `system`.
  - I mostly used SSR, which conveniently hides the API calls in the network section. Somehow, I loved this.


## Installation.
> [!IMPORTANT]
> I'm not sure if you should clone it or not since it uses the scraper I created. But if you're interested in learning how UI/UX works, then go for it.

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
     - As there are currently not many pages, I have not yet made it work.
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

After completing this project, I will dive into my last project that is on my mind. So, if you guys have any ideas and want to create something together, count me in. If I get busy in the future, I will make this repo open source, so it's up to you guys to maintain it 🥺.
