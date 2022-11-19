import React, { useState } from "react";
import "./cards.css"
import cards_images from "../../../images/sampeurs/cards_images.png"

export default function Cards() {

    return (
        <>
            <div className="bg-dark vh-100 d-flex justify-content-center align-items-center">
                <div className="container d-flex justify-content-center">
                    <div className="card p-2">
                        <div className="product-info px-3 py-3">
                            <div>
                                <h5 className="mb-0">Men's t-shirts</h5> <span>BETTER QUALITY</span>
                            </div>
                            <div className="product-price d-flex flex-row">
                                <h1>$ 299</h1>
                            </div>
                            <div className="heart">
                                <i className="far fa-heart"></i>
                            </div>
                    </div>

                    <div className="text-center product-image">
                        <img src={cards_images} alt="" />
                    </div>

                    <div className="product-about">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                    </div>

                    <div className="button d-flex flex-row gap-3 px-3">
                        <button className="btn btn-danger w-100">View</button>
                        <button className="btn btn-outline-danger w-100">Buy Now</button>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}