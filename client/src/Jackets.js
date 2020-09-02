import React from 'react'
import Jacket1 from './Images/Jacket1.jpg';
import Jacket2 from './Images/Jacket2.jpg';
import Jacket4 from './Images/Jacket4.jpg';


export default function Jackets() {
    return (
        <main className="main">
            <div className="content">
                <ul className="jackets-content">
                    <li>

                        <div className="jackets">
                            <img className="jackets-image"
                                src={Jacket1}
                                alt="jackets"/>
                            <div className="jackets-name">
                                <a href="jacket.html">Denim Jacket
                                </a>
                            </div>
                            <div className="jackets-brand">Vintage Gap</div>
                            <div className="jackets-price">$25</div>
                        </div>
                    </li>
                    <li>
                        <div className="jackets">
                            <img className="jackets-image"
                                src={Jacket2}
                                alt="jackets"/>
                            <div className="jackets-name">
                                <a href="jacket.html">Leather Jacket
                                </a>
                            </div>
                            <div className="jackets-brand">
                                Louie
                            </div>
                            <div className="jackets-price">$50</div>
                        </div>
                    </li>
                    <li>
                        <div className="jackets">
                            <img className="jackets-image"
                                src={Jacket4}
                                alt="jackets"/>
                            <div className="jackets-name">
                                <a href="jacket.html">Womans Bomber
                                </a>
                            </div>
                            <div className="jackets-brand">
                                Cuchi
                            </div>
                            <div className="jackets-price">$20</div>
                        </div>
                    </li>
                </ul>

            </div>
        </main>
    )
}
