// The following 54 lines of code was adapted from https://www.youtube.com/watch?v=j5Sl6vx_l1s&t=3s Accsessed: 2023-11-12

// HEADER
class MinHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header>
            <nav>
            <div class="desktop">
                <div class="nav1">
                    <div class="text1">Fast and flexible delivery worldwide</div>
                    <div class="text2">Free shipping over €39</div>
                    <div class="text3">Delivery in 2-6 business days</div>
                </div>
                <div class="nav2">
                  <div class="pages">
                    <ul>
                        <a href="posters.html">POSTERS</<>
                        <a href="artists.html">ARTISTS</a>
                    </ul>
                  </div>
                  <div class="logo">
                    <ul>
                        <a href="index.html"><img src="img/logo-code.svg"></a>
                    </ul>
                  </div>
                  <div class="icons">
                    <ul>
                        <a id="search" href="index.html"><img src="img/searchicon.png"></a>
                        <a href="index.html"><img src="img/account.png"></a>
                        <a href="index.html"><img src="img/heart.png"></a>
                        <a id="cart" href="shoppingcart.html">
                        <img src="img/shoppingbag.png">
                          <div id="hovercart">
                          <nav class="popup">
                              <div class="imgone">
                              <img id="image" src="img/shoppingcartmonet.jpg" alt="The Parc Monceau 1878" />
                                <div class="cart-info">
                                  <br />
                                  <h3>The Parc Monceau 1878</h3>
                                  <p>70 x 100 cm</p>
                                  <br />
                                  <img class="addmore" src="img/addmore.jpg" alt="Add more option" />
                                  <br />
                                  <p>€32</p>
                                </div>
                              </div>
                
                          <div class="imgtwo">
                            <img id="image" src="img/shoppingcarttokyo.jpg" alt="Tokyo Drift by Vanellimelli" />
                            <div class="cart-info">
                                <br />
                                <h3>Tokyo Drift</h3>
                                <p>30 x 40 cm</p>
                                <br />
                                <img class="addmore" src="img/addmore.jpg" alt="Add more option" />
                                <br />
                                <p>€12</p>
                            </div>
                          </div>
                
                          <div class="imgthree">
                            <img id="image" src="img/shoppingcartpenseldrag2.jpg"
                              alt="Abstrakta Penseldrag 15 by Mareike Böhmer" />
                            <div class="cart-info">
                                <br />
                                <h3>Abstrakta Penseldrag 15</h3>
                                <p>70 x 100 cm</p>
                                <br />
                                <img class="addmore" src="img/addmore.jpg" alt="Add more option" />
                                <br />
                                <p>€28</p>
                            </div>
                          </div>
                          <div class="popupconfirm-button">
                            <a id="popupconfirm" href="checkout.html">CHECKOUT €72</a>
                          </div>
                        </nav>
                        </div>
                      
                    </a>
                    </ul>


                  </div>
                </div>
              </div>  
            <div class="mobile">
              <div class="nav1">
                <div class="text1">Fast and flexible delivery worldwide</div>
                <div class="text2">Free shipping over €39</div>
                <div class="text3">Delivery in 2-6 business days</div>
              </div>
              <div class="nav2">
                <div class="left">
                  <a onclick="menuFunction()"><i class="ri-menu-line"></i></a>
                    <a href="index.html"><img src="img/searchicon.png"></a>
                </div>
                <div class="logo">
                    <ul>
                        <a href="index.html"><img src="img/logo-code.svg"></a>
                    </ul>
                  </div>
                <div class="right">
                  <ul>
                      <a href="index.html"><img src="img/heart.png"></a>
                      <a id="cart" href="shoppingcart.html">
                        <img src="img/shoppingbag.png">
                      </a>
                  </ul>
                </div>
                </div>
                <div id="hamburger-menu">
                  <div class="filter1">
                    <ul>
                      <a href="posters.html">ALL POSTERS</a>
                      <a onclick="overlay()">CATEGORIES</a>
                      <a href="artists.html">ARTISTS</a>
                    </ul> 
                  </div>
                  <div class="filter2">
                    <p>New Arrivals</p>
                    <p>Most Popular</p>
                    <p>Log In</p>
                  </div>
                  <form>
                    <label for="email">SUBSCRIBE TO NEWSLETTER</label>
                    <input type="email" id="email" placeholder="Enter your email adress"/>
                    <input type="submit" id="submit" value="SUBSCRIBE"/>
                  </form>
                </div>
                <div id="overlay">
                  <img id="arrowLeft" src="img/arrowLeft.png" onclick="off()"/img>
                  <h2>CATEGORIES</h2>
                  <a href="posters.html">Black and White</a>
                  <a href="posters.html">Nature</a>
                  <a href="posters.html">Abstract</a>
                  <a href="posters.html">Photographs</a>
                  <a href="posters.html">Media</a>
                </div>
              </nav>
        </header>    
            `;
  }
}
customElements.define("my-header", MinHeader);

// FOOTER
class MinFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
      <div class="footer-links">
        <div class="customer-care">
          <h3>CUSTOMER CARE</h3>
          <p>Help</p>
          <p>Shipping</p>
          <p>Return & Exchanges</p>
          <p>Order Tracking</p>
          <a href="contact.html"><p>Contact Us</p></a>
        </div>
        <div class="discover">
          <h3>DISCOVER</h3>
          <a href="about.html"><p>About Us</p></a>
          <p>Membership</p>
          <p>Newsletter</p>
        </div>
        <div class="categories-footer">
          <h3>CATEGORIES</h3>
          <p>Black & White</p>  
          <p>Nature</p>  
          <p>Abstract</p>  
          <p>Photographs</p>  
          <p>Media</p>  
          <p>Claude Monet</p>  
          <p>Vanellimelli</p>  
          <p>Mareike Böhmer</p>  
        </div>
      </div>
      <div class="footer-icons">
        <div class="icon-column">
          <img src="img/Insta.png" alt="Instagram">
          <img src="https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png" alt="Mastercard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/616px-Maestro_2016.svg.png" alt="Maestro">
        </div>
        <div class="icon-column">
          <img src="img/Facebook.png" alt="Facebook">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" alt="Visa card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/1280px-Klarna_Payment_Badge.svg.png" alt="Klarna">
        </div>
        <div class="icon-column">
          <img src="img/tiktok.png" alt="Tiktok">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1026px-American_Express_logo_%282018%29.svg.png" alt="American Express">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal">
        </div>
      </div>
      <div class="footer-icons2">
        <div class="icon-row">
          <img src="img/Insta.png" alt="Instagram">
          <img src="img/Facebook.png" alt="Facebook">
          <img src="img/tiktok.png" alt="Tiktok">
        </div>
        <div class="icon-row">
          <img src="https://1000logos.net/wp-content/uploads/2017/03/Mastercard-logo.png" alt="Mastercard">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/616px-Maestro_2016.svg.png" alt="Maestro">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1024px-Visa_Inc._logo.svg.png" alt="Visa card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1026px-American_Express_logo_%282018%29.svg.png" alt="American Express">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/1280px-Klarna_Payment_Badge.svg.png" alt="Klarna">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal">
        </div>
      </div>
    </footer>    
            `;
  }
}
customElements.define("my-footer", MinFooter);
