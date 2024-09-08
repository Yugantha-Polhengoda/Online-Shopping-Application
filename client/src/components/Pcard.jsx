import React, { useState, useEffect } from 'react';
import { IoIosSettings } from "react-icons/io";


const Pcard = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [specificationVisible, setSpecificationVisible] = useState(false);

  useEffect(() => {
    const slides = document.getElementsByClassName("sliderBlock_items__itemPhoto");
    const items = document.getElementsByClassName("sliderBlock_positionControls")[0];
    const currentSlideItem = document.getElementsByClassName("sliderBlock_positionControls__paginatorItem");

    const slideInterval = setInterval(nextSlide, 5000);

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function previousSlide() {
      goToSlide(currentSlide - 1);
    }

    function goToSlide(n) {
      const newSlide = (n + slides.length) % slides.length;
      setCurrentSlide(newSlide);
      slides[currentSlide].className = 'sliderBlock_items__itemPhoto';
      items.children[currentSlide].className = 'sliderBlock_positionControls__paginatorItem';
      slides[newSlide].className = 'sliderBlock_items__itemPhoto sliderBlock_items__showing';
      items.children[newSlide].className = 'sliderBlock_positionControls__paginatorItem sliderBlock_positionControls__active';
    }

    const next = document.getElementsByClassName("sliderBlock_controls__arrowForward")[0];
    const previous = document.getElementsByClassName("sliderBlock_controls__arrowBackward")[0];

    next.onclick = function () {
      nextSlide();
    };

    previous.onclick = function () {
      previousSlide();
    };

    function goToSlideAfterPushTheMiniBlock() {
      for (let i = 0; i < currentSlideItem.length; i++) {
        currentSlideItem[i].onclick = function () {
          const index = Array.prototype.indexOf.call(currentSlideItem, this);
          goToSlide(index);
        }
      }
    }

    goToSlideAfterPushTheMiniBlock();

    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const toggleSpecification = () => {
    setSpecificationVisible(!specificationVisible);
  };

  const handleQuantityChange = (operation) => {
    const input = document.getElementsByClassName('block_quantity__number')[0];
    let value = parseInt(input.value);
    if (operation === 'increase') {
      input.value = value + 1;
    } else if (operation === 'decrease') {
      if (value > 1) {
        input.value = value - 1;
      }
    }
  };

  return (
    <main className="main">
      <div className="mainWrapper">
        <div className="mainBackground clearfix">
          <div className="row">
            <div className="column small-centered">
              <div className="productCard_block">
                <div className="row flex">
                  <div className="small-12 large-6 columns">
                    <div className="productCard_leftSide clearfix">
                      <div className="productCard_brendBlock">
                        <a className="productCard_brendBlock__imageBlock" href="#">
                          <img 
                            src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/brtendsLogos/logo_sennheiser.png?raw=true" 
                            alt="sennheiser"
                          />
                        </a>
                      </div>

                      <div className="sliderBlock">
                        <ul className="sliderBlock_items">
                          <li className={`sliderBlock_items__itemPhoto ${currentSlide === 0 ? 'sliderBlock_items__showing' : ''}`}>
                            <img 
                              src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones1.png?raw=true" 
                              alt="headphones"
                            />
                          </li>
                          <li className={`sliderBlock_items__itemPhoto ${currentSlide === 1 ? 'sliderBlock_items__showing' : ''}`}>
                            <img 
                              src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones2.png?raw=true" 
                              alt="headphones"
                            />
                          </li>
                          <li className={`sliderBlock_items__itemPhoto ${currentSlide === 2 ? 'sliderBlock_items__showing' : ''}`}>
                            <img 
                              src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones3.png?raw=true" 
                              alt="headphones"
                            />
                          </li>
                          <li className={`sliderBlock_items__itemPhoto ${currentSlide === 3 ? 'sliderBlock_items__showing' : ''}`}>
                            <img 
                              src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones4.png?raw=true" 
                              alt="headphones"
                            />
                          </li>
                          <li className={`sliderBlock_items__itemPhoto ${currentSlide === 4 ? 'sliderBlock_items__showing' : ''}`}>
                            <img 
                              src="https://github.com/BlackStar1991/CardProduct/blob/master/app/img/goods/item1/phones5.png?raw=true" 
                              alt="headphones"
                            />
                          </li>
                        </ul>

                        <div className="sliderBlock_controls">
                          <div className="sliderBlock_controls__navigatin">
                            <div className="sliderBlock_controls__wrapper">
                              <div 
                                className="sliderBlock_controls__arrow sliderBlock_controls__arrowBackward" 
                                onClick={() => handleQuantityChange('decrease')}
                              >
                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                              </div>
                              <div 
                                className="sliderBlock_controls__arrow sliderBlock_controls__arrowForward" 
                                onClick={() => handleQuantityChange('increase')}
                              >
                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                              </div>
                            </div>
                          </div>

                          <ul className="sliderBlock_positionControls">
                            <li className={`sliderBlock_positionControls__paginatorItem ${currentSlide === 0 ? 'sliderBlock_positionControls__active' : ''}`}></li>
                            <li className={`sliderBlock_positionControls__paginatorItem ${currentSlide === 1 ? 'sliderBlock_positionControls__active' : ''}`}></li>
                            <li className={`sliderBlock_positionControls__paginatorItem ${currentSlide === 2 ? 'sliderBlock_positionControls__active' : ''}`}></li>
                            <li className={`sliderBlock_positionControls__paginatorItem ${currentSlide === 3 ? 'sliderBlock_positionControls__active' : ''}`}></li>
                            <li className={`sliderBlock_positionControls__paginatorItem ${currentSlide === 4 ? 'sliderBlock_positionControls__active' : ''}`}></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="small-12 large-6 columns">
                    <div className="productCard_rightSide">
                      <div className="block_specification" onClick={toggleSpecification}>
                        <div className={`block_specification__specificationShow ${specificationVisible ? 'hide' : ''}`}>
                          <IoIosSettings className="fa fa-cog block_specification__button block_specification__button__rotate" aria-hidden="true"/>
                          <span className="block_specification__text">spec</span>
                        </div>
                        <div className={`block_specification__informationShow ${specificationVisible ? '' : 'hide'}`}>
                          <i className="fa fa-info-circle block_specification__button block_specification__button__jump" aria-hidden="true"></i>
                          <span className="block_specification__text">inform</span>
                        </div>
                      </div>

                      <p className="block_model">
                        <span className="block_model__text">Model: </span>
                        <span className="block_model__number">505795</span>
                      </p>

                      <div className="block_product">
                        <h2 className="block_name block_name__mainName">MOMENTUM<sup>&reg; </sup></h2>
                        <h2 className="block_name block_name__addName">Wireless Black</h2>

                        <p className="block_product__advantagesProduct">
                          Wireless headphones with integrated microphone
                        </p>

                        <div className="block_informationAboutDevice">
                          <div className={`block_descriptionCharacteristic ${specificationVisible ? 'block_descriptionCharacteristic__active' : 'block_descriptionCharacteristic__disActive'}`}>
                            <table className="block_specificationInformation_table">
                              <tbody>
                                <tr>
                                  <th>Characteristic</th>
                                  <th>Value</th>
                                </tr>
                                <tr>
                                  <td>Ear Coupling</td>
                                  <td>Around Ear</td>
                                </tr>
                                <tr>
                                  <td>Transducer Principle</td>
                                  <td>Dynamic, Closed-back</td>
                                </tr>
                                <tr>
                                  <td>Frequency Response</td>
                                  <td>16Hz – 22kHz</td>
                                </tr>
                                <tr>
                                  <td>Sound Pressure Level (SPL)</td>
                                  <td>113 dB (Passive: 1 kHz/1 Vrms)</td>
                                </tr>
                                <tr>
                                  <td>Total Harmonic Distortion (THD)</td>
                                  <td>&lt;0.5% (1 kHz, 100 dB SPL)</td>
                                </tr>
                                <tr>
                                  <td>Volume Control</td>
                                  <td>Earcup control when Bluetooth connected</td>
                                </tr>
                                <tr>
                                  <td>Microphone Type</td>
                                  <td>Dual omni-directional microphone <br/>(2 mic beam forming array)</td>
                                </tr>
                                <tr>
                                  <td>Cable / Connector</td>
                                  <td>1.4m (Detachable) / 3.5mm Angled</td>
                                </tr>
                                <tr>
                                  <td>Weight</td>
                                  <td>260g (9.17 oz)</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="block_descriptionInformation">
                            <span>Peak performance with active noise cancelation. Sennheiser's new MOMENTUM Wireless - Closed circumaural headphone featuring <a className="block_product__link" href="#">Bluetooth<sup>&reg;</sup></a> wireless technology and NoiseGard Hybrid active noise cancelation</span>
                          </div>

                          <div className="block_rating clearfix">
                            <fieldset className="block_rating__stars">
                              <input type="radio" id="star5" name="rating" value="5" /><label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
                              <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                              <input type="radio" id="star4" name="rating" value="4" /><label className="full" htmlFor="star4" title="Good - 4 stars"></label>
                              <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" htmlFor="star3half" title="Above average - 3.5 stars"></label>
                              <input type="radio" id="star3" name="rating" value="3" /><label className="full" htmlFor="star3" title="Average - 3 stars"></label>
                              <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                              <input type="radio" id="star2" name="rating" value="2" /><label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                              <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                              <input type="radio" id="star1" name="rating" value="1" /><label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                              <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                            </fieldset>

                            <span className="block_rating__avarage">4.25</span>
                            <span className="block_rating__reviews">(153 reviews)</span>
                          </div>

                          <div className="row">
                            <div className="large-6 small-12 column left-align">
                              <div className="block_price">
                                <p className="block_price__currency">$499.95</p>
                                <p className="block_price__shipping">Shipping and taxes extra</p>
                              </div>
                              <div className="block_quantity clearfix">
                                <span className="text_specification">Quantity</span>
                                <div className="block_quantity__chooseBlock">
                                  <input 
                                    className="block_quantity__number" 
                                    name="quantityNumber" 
                                    type="text" 
                                    min="1" 
                                    defaultValue="1"
                                  />
                                  <button 
                                    className="block_quantity__button block_quantity__up" 
                                    onClick={() => handleQuantityChange('increase')}
                                  ></button>
                                  <button 
                                    className="block_quantity__button block_quantity__down" 
                                    onClick={() => handleQuantityChange('decrease')}
                                  ></button>
                                </div>
                              </div>
                            </div>
                            <div className="large-6 small-12 column end">
                              <div className="block_goodColor">
                                <span className="text_specification">Choose your colors:</span>
                                <div className="block_goodColor__allColors">
                                  <input 
                                    type="radio" 
                                    name="colorOfItem" 
                                    className="radio_button" 
                                    id="radioColor" 
                                    defaultChecked
                                  />
                                  <label 
                                    htmlFor="radioColor" 
                                    className="block_goodColor__radio block_goodColor__black"
                                  ></label>
                                  <input 
                                    type="radio" 
                                    name="colorOfItem" 
                                    className="radio_button" 
                                    id="radioColor2" 
                                  />
                                  <label 
                                    htmlFor="radioColor2" 
                                    className="block_goodColor__radio block_goodColor__silver"
                                  ></label>
                                </div>
                              </div>
                              <button className="button button_addToCard">
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutMe">
        <a href="https://codepen.io/BlackStar1991/pens/public/" target="_blank" rel="noopener noreferrer">
          <i className='fa fa-codepen'></i> my other Pens
        </a>
      </div>
    </main>
  );
};

export default Pcard;
