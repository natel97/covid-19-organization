import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <h3 className="text-center">COVID-19 Volunteering</h3>
      <article className="card">
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
      <article className="card">
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
      <article className="card">
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
            functionality is not guarenteed.
          </div>
        </footer>
      </article>
    </div>
  );
};
