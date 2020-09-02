import React from 'react'
import denim1 from './Images/denim1.jpg';
import denim2 from './Images/denim2.jpg';
import denim3 from './Images/denim3.jpg';

export default function Denim() {
    return (
        <main className="main">
        <div className="content">
            <ul className="denim-content">
                <li>
                    <div className="denim">
                        <img className="denim-image"
                            src={denim1}
                            alt="denim"/>
                        <div className="denim-name">
                            <a href="denim.html">Vintage 501 Jeans
                            </a>
                        </div>
                        <div className="denim-brand">Levi's</div>
                        <div className="denim-price">$100</div>
                    </div>
                </li>
                <li>
                    <div className="denim">
                        <img className="denim-image"
                            src={denim2}
                            alt="denim"/>
                        <div className="denim-name">
                            <a href="denim.html">Levi's Wedge Icon Jeans
                            </a>
                        </div>
                        <div className="denim-brand">Levi's</div>
                        <div className="denim-price">$98</div>
                    </div>
                </li>
                <li>
                    <div className="denim">
                        <img className="denim-image"
                            src={denim3}
                            alt="denim"/>
                        <div className="denim-name">
                            <a href="denim.html">Vintage Tucker Denim Jacket
                            </a>
                        </div>
                        <div className="denim-brand">Levi's</div>
                        <div className="denim-price">$56</div>
                    </div>
                </li>
            </ul>

        </div>
    </main>
    )
}