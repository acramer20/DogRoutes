import React from "react";
import { Link } from "react-router-dom";

function DogList({doggos}) {
    return (
        <div>
            <div>
                <div>
                    <h1>
                        Hello! We have dogz! Click on them for more info!
                    </h1>
                </div>
            </div>
            <div>
                {doggos.map(d => (
                    <div>
                        <img src={d.src} alt={d.name} />
                        <h3>
                            <Link to={`/doggos/${d.name.toLowerCase()}`}>{d.name}</Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList;