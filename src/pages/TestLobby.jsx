import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import "../components/TestLobby.css"

export default function TestLobby() {
  const auth = useAuth();
  const nav = useNavigate();

  useLayoutEffect(() => {
    if (!auth) {
      console.log("User is not authenticated. Redirecting to login page.");
      nav("/");
    } else {
      console.log("User is authenticated. Entering the lobby.");
    }
  }, [auth, nav]);

  return (
    <>
      <main>
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>

        <div className="main-overview">
          {auth ? (
            <>
              <div className="overviewcard">
                <div className="overviewcard__icon">Overview</div>
                <div className="overviewcard__info">Card</div>
              </div>
              <div className="overviewcard">
                <div className="overviewcard__icon">Overview</div>
                <div className="overviewcard__info">Card</div>
              </div>
              <div className="overviewcard">
                <div className="overviewcard__icon">Overview</div>
                <div className="overviewcard__info">Card</div>
              </div>
              <div className="overviewcard">
                <div className="overviewcard__icon">Overview</div>
                <div className="overviewcard__info">Card</div>
              </div>
            </>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className="main-cards">
          {auth && (
            <>
              <div className="card">Card</div>
              <div className="card">Card</div>
              <div className="card">Card</div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
