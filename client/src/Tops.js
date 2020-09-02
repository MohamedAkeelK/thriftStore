import React from 'react'
import tops1 from './Images/tops1.jpg';
import tops2 from './Images/tops2.jpg';
import tops3 from './Images/tops3.jpg';

export default function Tops() {
    return (
        <main className="main">
        <div className="content">
            <ul className="tops-content">
                <li>
                    <div className="tops">
                        <img className="tops-image"
                            src={tops1}
                            alt="tops"/>
                        <div className="tops-name">
                            <a href="tops.html">Solid V-Neck
                            </a>
                        </div>
                        <div className="tops-brand">Vencano</div>
                        <div className="tops-price">$12.50</div>
                    </div>
                </li>
                <li>
                    <div className="tops">
                        <img className="tops-image"
                            src={tops2}
                            alt="tops"/>
                        <div className="tops-name">
                            <a href="tops.html">Hungarian Blouse
                            </a>
                        </div>
                        <div className="tops-brand">Vintage Hungarian</div>
                        <div className="tops-price">$555</div>
                    </div>
                </li>
                <li>
                    <div className="tops">
                        <img className="tops-image"
                            src={tops3}
                            alt="tops"/>
                        <div className="tops-name">
                            <a href="tops.html">70's Embroider Mexican Blouse
                            </a>
                        </div>
                        <div className="tops-brand">Vintage Mexican</div>
                        <div className="tops-price">$52.50</div>
                    </div>
                </li>
            </ul>

        </div>
    </main>
    )
}
