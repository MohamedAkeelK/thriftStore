import React from 'react'
import bags1 from './Images/bags1.jpg';
import bags2 from './Images/bags2.jpg';
import bags3 from './Images/bags3.jpg';

export default function Denim() {
    return (
        <main className="main">
            <div className="content">
                <ul className="bags-content">
                    <li>
                        <div className="bags">
                            <img className="bags-image"
                                src={bags1}
                                alt="bags"/>
                            <div className="bags-name">
                                <a href="bags.html">Pochette Bag
                                </a>
                            </div>
                            <div className="bags-brand">Louis Vuitton</div>
                            <div className="bags-price">$250</div>
                        </div>
                    </li>
                    <li>
                        <div className="bags">
                            <img className="bags-image"
                                src={bags2}
                                alt="bags"/>
                            <div className="bags-name">
                                <a href="bags.html">Channel Mini Flap
                                </a>
                            </div>
                            <div className="bags-brand">Channel</div>
                            <div className="bags-price">$3,150</div>
                        </div>
                    </li>
                    <li>
                        <div className="bags">
                            <img className="bags-image"
                                src={bags3}
                                alt="bags"/>
                            <div className="bags-name">
                                <a href="bags.html">Garafano Caged Crystal
                                </a>
                            </div>
                            <div className="bags-brand">Rosantico</div>
                            <div className="bags-price">$899</div>
                        </div>
                    </li>
                </ul>

            </div>
        </main>
    )
}
