import React from 'react'

export default function Card() {
  const handleadd=()=>{
    
  }
  return (
    <div>
        <div>
          <div class="card mt-3" style={{"width": "15rem","maxHeight": "360px"}}>
            <img src="https://cdn.shopify.com/s/files/1/0601/3675/1279/products/384-SHP_540x.jpg?v=1651045110" class="card-img-top widhth:20 px height:20px" alt="saree" style={{height:"120px",objectFit:"fill"}}></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='container w-100'>
                  <div className='d-inline fs-5 h-100'>
                    Total Price
                  </div>
              </div>
            </div>
            <hr>
            </hr>
            <button className={'btn btn-success justify-center ms-2'} onClick={handleadd}> add to cart</button>
          </div>
        </div>
    </div>
  )
}
