import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="full-height snap-container overflow-auto">
      <div className="full-height justify-between flex-column snap-item">
        <h3 className="text-center">COVID-19 Volunteering</h3>
        <div>
          <div className="flex-row">
            <Link className="button success flex-1" to="/auth">
              Log In
            </Link>
            <Link className="button warning flex-1" to="/auth/create">
              Create Account
            </Link>
          </div>
          <div className="text-center">(Scroll down for more details)</div>
        </div>
      </div>
      <article className="card snap-item">
        <header>
          <h5 className="full-width text-center">What is this site?</h5>
        </header>
        <footer>
          <div>
            This site is to help organize people to help each other out in their
            communities. There are numerous ways you can volunteer, including
            making phone calls to check on peoples health, constructing masks,
            and providing meals. We'd like to help streamline it to make it easy
            to know how you can best help!
          </div>
        </footer>
      </article>
      <article className="card snap-item">
        <header>
          <h5 className="full-width text-center">What if I need help?</h5>
        </header>
        <footer>
          <div>
            We try to organize people as effectively in their respective
            communities. If there are volunteers in your area that use this
            site, we will be able to provide various forms of assistance
            depending on how people in the area are willing to help. We try to
            encourage volunteers to focus on helping in areas where there is
            more demand to balance things out. All assistance is free and the
            application is open source. We do ask that you try to give back in
            your communities to keep the cycle going :)
          </div>
        </footer>
      </article>
      <article className="card snap-item">
        <header>
          <h5 className="full-width text-center">Where do I go to start?</h5>
        </header>
        <footer>
          <div>
            You can{" "}
            <Link to="/auth" className="button pseudo">
              Click Here
            </Link>{" "}
            to log in or create an account. This site is pretty new so
            functionality is not guaranteed.
          </div>
        </footer>
      </article>
      <article className="card snap-item">
        <header>
          <h5 className="full-width text-center">
            How far along is this site?
          </h5>
        </header>
        <footer>
          <div>
            This application is being built out in five major stages, followed
            by misc updates. This app is currently in{" "}
            <span className="label info">stage 0</span>.
          </div>
        </footer>
      </article>
      <article className="card snap-item">
        <header>
          <h5 className="full-width text-center">Early Development Stages</h5>
        </header>
        <footer>
          <div>
            The beginning of this site won't be usable to a practical level, but
            development progress will be visible.
            <hr />
            <div>
              <span className="label info">Stage 0</span>: Site is online, some
              basic fake functionality but nothing really usable.
            </div>
            <div>
              <span className="label danger">Stage 1</span>: The site tracks
              basic data like what actions a user takes, but doesn't really do
              anything with it. Security is implemented at a basic level. A
              feedback button is added to track engagement along with basic
              analytics.
            </div>
          </div>
        </footer>
      </article>
      <article className="card snap-item">
        <header>
          <h5 className="full-width text-center">Beta Testing Stages</h5>
        </header>
        <footer>
          <div>
            These stages, the site is stable enough to be used for basic
            testing. Functionality is not guaranteed, but feedback becomes
            exponentially more helpful as we get closer to helping communities.
            <hr />
            <div>
              <span className="label warning">Stage 2</span>: The site becomes
              aware of context and can handle basic logistics like calling, but
              advanced features like transporting supplies are actively being
              developed. Beta testing would be greatly appreciated in this
              stage.
            </div>
            <div>
              <span className="label success">Stage 3</span>: The site can be
              used to most of it's actions. Logistics are impemented such that
              we can coordinate transporting goods throughout communities and
              are pushed out for beta users.
            </div>
            <div>
              <span className="label success">Stage 4</span>: Calls, tracking
              items and logistics, a fair amount of security, logging and
              analytics, and most other features are complete. Some
              rearchitecting may occur at this point to extend this application
              for a broader use rather than just COVID 19.
            </div>
          </div>
        </footer>
      </article>
      <article className="card snap-item">
        <header>
          <h5 className="full-width text-center">
            Feel free to help with this site!
          </h5>
        </header>
        <footer>
          <div>
            This site has it's code available on{" "}
            <a
              href="https://github.com/natel97/covid-19-organization"
              className="info label icon-picture"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            . Feel free to contribute code, ideas, or whatever skills you can
            provide. More hands means more progress!
          </div>
        </footer>
      </article>
    </div>
  );
};
