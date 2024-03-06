import { useNavigate } from "react-router-dom";

import { useLayoutEffect } from "react";
import { useAuth } from "../hooks/useAuth";

export default function TestLobby(){
    const auth = useAuth();
    const nav = useNavigate();

    useLayoutEffect(() => {
        if(!auth){
            nav('/');
        } else{
            console.log('entered to the lobby');
        }
    },[]);
    
    return(
        <>
      <main>
        <div className="main-header">
          <div className="main-header__heading">Hello User</div>
          <div className="main-header__updates">Recent Items</div>
        </div>

        <div className="main-overview">
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
        </div>

        <div className="main-cards">
          <div className="card">Card</div>
          <div className="card">Card</div>
          <div className="card">Card</div>
        </div>
      </main>
    </>
    )
}