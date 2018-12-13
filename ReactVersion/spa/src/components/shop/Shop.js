import React from 'react';
import './Shop.css';

class Shop extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="shopping-cart">
            <div className="title">
                Packages
            </div>
        
        <div className="item">
            <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
            </div>
        
            <div className="image">
            <img src="item-1.png" alt="" />
            </div>
        
            <div className="description">
            <span>Blueprints</span>
            <span>Thorough and extensive.</span>
            <span>List square footage</span>
            </div>
        
            <div className="quantity">
            <button className="plus-btn" type="button" name="button">
                <img src="plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1"></input>
            <button className="minus-btn" type="button" name="button">
                <img src="minus.svg" alt="" />
            </button>
            </div>
        
            <div className="total-price">$549</div>
        </div>
        
        <div className="item">
            <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
            </div>
        
            <div className="image">
            <img src="item-2.png" alt=""/>
            </div>
        
            <div className="description">
            <span>Remodel</span>
            <span>Planning and layout.</span>
            <span>List square footage</span>
            </div>
        
            <div className="quantity">
            <button className="plus-btn" type="button" name="button">
                <img src="plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1"></input>
            <button className="minus-btn" type="button" name="button">
                <img src="minus.svg" alt="" />
            </button>
            </div>
        
            <div className="total-price">$870</div>
        </div>
        
        <div className="item">
            <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
            </div>
        
            <div className="image">
            <img src="item-3.png" alt="" />
            </div>
        
            <div className="description">
            <span>Construction Administration</span>
            <span>Billed at an hourly rate.</span>
            <span>Expected hours</span>
            </div>
        
            <div className="quantity">
            <button className="plus-btn" type="button" name="button">
                <img src="plus.svg" alt="" />
            </button>
            <input type="text" name="name" value="1"></input>
            <button className="minus-btn" type="button" name="button">
                <img src="minus.svg" alt="" />
            </button>
            </div>
        
            <div className="total-price">$349</div>
        </div>
        </div>
        )
    }
}

export default Shop;