import React, { useState, useEffect } from "react";
import * as serviceWorker from "../serviceWorker";

export default () => {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState(null);

  const onSWUpdate = registration => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  };

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate });
  }, []);

  const reloadPage = () => {
    if (!serviceWorker) return;
    waitingWorker.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload(true);
  };

  if (!showReload) return null;

  return (
    <div className="modal active">
      <input id="update-modal" defaultChecked={true} type="checkbox" />
      <label htmlFor="update-modal" className="overlay" />
      <article>
        <header>
          <h3>Update Available</h3>
          <label htmlFor="update-modal" className="close">
            &times;
          </label>
        </header>
        <section className="content">
          An update is available. Would you like to update now? It will be
          quick!
        </section>
        <footer>
          <button onClick={reloadPage}>Update Now</button>
          <button
            htmlFor="update-modal"
            onClick={() => setShowReload(false)}
            className="dangerous"
          >
            Ignore
          </button>
        </footer>
      </article>
    </div>
  );
};
