import React from 'react'

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" style={{objectFit :"contain !important"}}>
                <div class="carousel-inner" style={{maxHeight : "500px"}}>
                    <div class="carousel-caption" style={{ zIndex: "10" }}>
                        <div class="input-group">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary text-white bg-blue" >search</button>
                        </div>

                    </div>
                    <div class="carousel-item active" data-bs-interval="10000">
                        <img src="https://cdn.shopify.com/s/files/1/1760/4649/products/kanjivaram-saree-shruti-marathe-in-tawny-brown-kanjivaram-saree-silk-saree-online-31085993558209.jpg?v=1648615219" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="https://assets.ajio.com/medias/sys_master/root/20221220/1Izj/63a0db4df997ddfdbde15715/-473Wx593H-465463355-peach-MODEL2.jpg" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.shopify.com/s/files/1/1760/4649/products/designer-banarasi-saree-fresh-yellow-designer-banarasi-saree-with-embroidered-silk-blouse-wedding-wardrobe-collection-silk-saree-online-28454596673729.jpg?v=1648524881" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
