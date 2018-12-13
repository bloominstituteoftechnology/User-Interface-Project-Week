import React from 'react';
import './Shop.css';

class Shop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <div className="shopping-cart">
            <div className="title">
                <h1>Packages</h1>
                <h1 class="mobilegone">Estimated Quote</h1>
            </div>
        
        <div className="item">
            <div className="image_shop">
            <img src={require("../../img/packages/blueprint.jpg")} alt="" />
            </div>
        
            <div className="description">
            <span>Blueprints</span>
            <span>Thorough and extensive.</span>
            <span>List square footage</span>
            </div>
        
            <div className="quantity">
            <input type="number" name="name" placeholder="0" onChange={calc1} min={1} maxlength={6}></input>
            </div>
            <div className="price">$4/sqft</div>
            <div className="total-price"></div>
        </div>
        
        <div className="item">
            <div className="image_shop">
            <img src={require("../../img/packages/remodel.jpg")} alt=""/>
            </div>
        
            <div className="description">
            <span>Remodel</span>
            <span>Planning and layout.</span>
            <span>List square footage</span>
            </div>
        
            <div className="quantity">
            <input type="number" name="name" placeholder="0" onChange={calc2} min={1} maxlength={6}></input>
            </div>
            <div className="price">$4/sqft</div>
            <div className="total-price"></div>
        </div>
        
        <div className="item">
            <div className="image_shop">
            <img src={require("../../img/packages/admin.jpg")} alt="" />
            </div>
        
            <div className="description">
            <span>Construction Administration</span>
            <span>Billed at an hourly rate.</span>
            <span>Expected hours</span>
            </div>
        
            <div className="quantity">
            <input type="number" name="name" placeholder="0" onChange={calc3} min={1} maxlength={6}></input>
            </div>
            <div className="price">$249/hr</div>
            <div className="total-price"></div>
        </div>
        </div>
        <div className="sum">
            <h1>Total Estimate:</h1>
            <div className="final"></div>
        </div>
        </div>
        )
    }
}

export default Shop;


function calc1() {
    let inputs = document.querySelectorAll("input")
    let desiredInput1 = inputs[0].value
    let prices = document.querySelectorAll(".total-price");
    let desiredPrice = prices[0]
    if (desiredInput1.length > 6) {
        desiredPrice.textContent = "Please contact us directly for a quote."
    } else{
        desiredPrice.textContent = "$" + desiredInput1*4
    }
    total();
  }

function calc2() {
    let inputs = document.querySelectorAll("input")
    let desiredInput2 = inputs[1].value
    let prices = document.querySelectorAll(".total-price");
    let desiredPrice = prices[1]
    if (desiredInput2.length > 6) {
        desiredPrice.textContent = "Please contact us directly for a quote."
    } else{
        desiredPrice.textContent = "$" + desiredInput2*4
    }
    total();
}

function calc3() {
    let inputs = document.querySelectorAll("input")
    let desiredInput3 = inputs[2].value
    let prices = document.querySelectorAll(".total-price");
    let desiredPrice = prices[2]
    if (desiredInput3.length > 6) {
        desiredPrice.textContent = "Please contact us directly for a quote."
    } else{
        desiredPrice.textContent = "$" + desiredInput3*249
    }
    total();
  }

function total() {
    let prices = document.querySelectorAll(".total-price");
    let sum = 0;
    let final = document.querySelector(".final");
    for (let i=0;i<prices.length;i++) {
        if (typeof prices[i].outerText != "") {
            console.log(prices[i].textContent)
            let pricenum = prices[i].textContent.slice(1);
            sum = sum + parseInt(pricenum)
        } 
    }
    if (Number.isInteger(sum)) {
        final.textContent = "$" + sum;
    }
}