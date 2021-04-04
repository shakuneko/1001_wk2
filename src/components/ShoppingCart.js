import logo from '../logo.svg';
import { Select } from 'antd';
import { useState } from "react";
import React from 'react';
import '../App.css';
 
const { Option } = Select;
const provinceData = ['1', '2','3','4','5'];
const cityData = {

};
function App(){
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const handleProvinceChange = value => {
    setCities(cityData[value]);
  };

  
  return (
    <div> 
       <div className="header2">
                <img className="title2" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWZELhklNGI9cyNzs6MfN-4C-9RheufCBt-n0Wu6O_iQzLiJ9VY9trD284vPWxiSeTil4&usqp=CAU'  />
                  <span className="map1">
                    <img className="map" src="https://raw.githubusercontent.com/shakuneko/icon/master/02.png"/>
                      <span>
                        <div className="word">交貨到</div >
                        <div className="word2">臺灣</div >
                      </span>
                  </span>
                  <div class="container2">
                    <from className="parent">
                      <select>
                          <option>全部</option>
                          <option>書籍</option>
                          <option>汽車</option>
                          <option>音樂</option>
                          <option>電腦</option>
                          <option>寵物用品</option>
                          <option>優惠</option>
                      </select>
                    <input type="text"/>
                    <button type="button"><img src="https://raw.githubusercontent.com/shakuneko/icon/master/iconfinder_search_2561381.png"  className="icon"/></button>
                    </from>
                  </div>
                  <span className="nation1">
                    <img className="nation" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/255px-Flag_of_the_Republic_of_China.svg.png"></img>
                    <img className="arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/down.png"></img>
                  </span>
                  <span className="signup">
                  <span >
                        <div className="word">您好，登入</div >
                        <div className="word2">帳戶與清單</div >
                  </span>
                  <img className="arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/down.png"></img>
                  </span >
                  <span className="list">
                        <div className="word">退貨</div >
                        <div className="word2">與訂單</div >
                  </span>
                 
                  <div className="list">
                  <img className="cart" src=" https://raw.githubusercontent.com/shakuneko/icon/master/shopping_cart111.png"></img>
                  <span className="word2">購物車</span >
                  </div>
            </div>
    
        <nav className="title-down"> 
            <ul className="ul">
                <li className="nav2"><img className="ham" src="https://plastergroup.com/wp-content/themes/twentyseventeen/assets/images/menuicon.png"></img>全部</li>
                <li className="nav">今日優惠</li>
                <li className="nav">客戶服務部</li>
                <li className="nav">禮品卡</li>
                <li className="nav">我要開店</li>
                <li className="nav">註冊</li>
            </ul>
            <div className="nav2">Click here to shop in English</div>
        </nav>  
        <div className="body2">
          <div className="item-container">
          <div className="item item-1">
            <p className="w1">購物車</p>
            <div className="rightword"><p className="w2">定價</p></div>
              <div className="context">
                  <div className="col-1">
                    <img className="ipad" src="https://images-na.ssl-images-amazon.com/images/I/71SrvnLkVZL._AC_SL1500_.jpg"/>
                    </div>
                  <div className="col-2">
                    <div className="contextword">
                      <p className="w3">
                        iMieet iPad Air 4 保護套 2020 - iPad Air 第 4 代保護套 10.9 英吋(約 25.9 公分)輕盈纖薄保護套,
                        透明磨砂硬殼背面[支援觸控ID](抹茶綠)(紫色)
                      </p>
                      <p className="w4">現貨</p>
                      <input id="one-checkbox" type="checkbox" value="此訂單含一份禮品"/> 這是一份禮物
                      <p className="w4">顏色:Purple</p>
                      <Select defaultValue={provinceData[0]} style={{ width: 120 }} onChange={handleProvinceChange}>
                        {provinceData.map(province => (
                          <Option key={province}>{province}</Option>
                        ))}
                      </Select>
                     
                      </div>
                      </div>
                    <div className="col-3">
                        <p className="w5">US$16.99</p>
                    </div>
                </div>
                <div className="rightword"><p className="w3">小計(一項目):US$16.99</p></div>
              </div>
            <div className="item item-2"></div>
              <div className="item-5">Amazon.com 上商品的價格和供貨量可能會變動。購物車是可以暫存商品的地方，同時也會顯示最新的產品價格。 
                                      購物車進一步了解<br/>您是否擁有禮品卡或促銷代碼？ 在您付款時，我們會請您輸入憑證代碼。</div>
              <div className="item2 item-3">
                <div className="item-3-context">
                  <p className="w3">小計(一項目):US$16.99</p>
                    <div>
                    <input id="one-checkbox" type="checkbox" value="此訂單含一份禮品"/> 此訂單含一份禮品
                    </div>
                    <button type="button" className="btn">前往結帳</button>
                </div>
             </div>
            <div className="item2 item-4">
              <p className="w6">您最近瀏覽過的商品</p>
              <div className="recent">
                <img className="recent-img" src="https://images-na.ssl-images-amazon.com/images/I/61nIyC9lcxL._AC_SL1500_.jpg"/>
                <div className="recent-context"> 
                  <p className="recent-name">ipad air第四代(藍)</p>
                  <div className="recent-name2">
                  <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>3.383
                  </div>
                  <p className="recent-price">US$16.99</p>
                  <button type="button" className="recent-btn">加入到購物車</button>
                </div>
              </div>
              <div className="recent">
                <img className="recent-img" src="https://images-na.ssl-images-amazon.com/images/I/61ply6R5VfL._AC_SL1200_.jpg"/>
                <div className="recent-context"> 
                  <p className="recent-name">ipad 鍵盤保護套</p>
                  <div className="recent-name2">
                  <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>109
                  </div>
                  <p className="recent-price">US$26.99</p>
                  <button type="button" className="recent-btn">加入到購物車</button>
                </div>
              </div>
            </div>           
          </div>
          <div className="related">
            <div className="related-title">
              <h2>與贊助相關的商品現在已在購物車中</h2>
            </div>
            <div className="related-item">
              <button type="button" className="related-btn1"> <img className="related-arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/left-arrow.png"/></button>
              <div className="related-content">
                <img  className="related-img" src="https://images-na.ssl-images-amazon.com/images/I/61NJmbc2GGL._AC_SL1500_.jpg"/>
                <p className="recent-name">ProCase iPad</p>
                  <div className="relate-name2">
                      <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>4,786
                  </div>
                    <p className="recent-price">US$13.95</p>
                    <button type="button" className="relate-btn">檢視所有購買選項</button>
              </div>
              <div className="related-content">
                <img  className="related-img" src="https://images-na.ssl-images-amazon.com/images/I/81RO-4LyKvL._AC_SL1500_.jpg"/>
                <p className="recent-name">iPad 鍵盤保護套</p>
                  <div className="relate-name2">
                      <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>109
                  </div>
                    <p className="recent-price">US$26.99</p>
                    <button type="button" className="relate-btn">檢視所有購買選項</button>
              </div>
              <div className="related-content">
                <img  className="related-img" src="https://images-na.ssl-images-amazon.com/images/I/814AxZH0LFL._AC_SL1500_.jpg"/>
                <p className="recent-name">Fintie 保護套</p>
                  <div className="relate-name2">
                      <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>879
                  </div>
                    <p className="recent-price">US$17.99</p>
                    <button type="button" className="relate-btn">檢視所有購買選項</button>
              </div>
              <div className="related-content">
                <img  className="related-img" src="https://images-na.ssl-images-amazon.com/images/I/71fqohSrDaL._AC_SL1487_.jpg"/>
                <p className="recent-name">螢幕保護貼</p>
                  <div className="relate-name2">
                      <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>1,504
                  </div>
                    <p className="recent-price">US$11.99</p>
                    <button type="button" className="relate-btn">檢視所有購買選項</button>
              </div>
              <div className="related-content">
                <img  className="related-img" src="https://images-na.ssl-images-amazon.com/images/I/71sxoPe0F5L._AC_SL1500_.jpg"/>
                <p className="recent-name">ESR 磁吸保護套</p>
                  <div className="relate-name2">
                      <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>6,208
                  </div>
                    <p className="recent-price">US$14.99</p>
                    <button type="button" className="relate-btn">檢視所有購買選項</button>
              </div>
              <div className="related-content">
                <img  className="related-img" src="https://images-na.ssl-images-amazon.com/images/I/71mWl7dgosL._AC_SL1500_.jpg"/>
                <p className="recent-name">CaseBot 保護套</p>
                  <div className="relate-name2">
                      <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>781
                  </div>
                    <p className="recent-price">US$13.99</p>
                    <button type="button" className="relate-btn">檢視所有購買選項</button>
              </div>
              <div className="related-content">
                <img  className="related-img" src="https://images-na.ssl-images-amazon.com/images/I/61qlmG4P8nL._AC_SL1500_.jpg"/>
                <p className="recent-name">Paperfeel 螢幕保護貼</p>
                  <div className="relate-name2">
                      <img src="https://raw.githubusercontent.com/shakuneko/icon/master/%E7%BB%84%201.png"/>7,742
                  </div>
                    <p className="recent-price">US$11.99</p>
                    <button type="button" className="relate-btn">檢視所有購買選項</button>
              </div>
              <button type="button" className="related-btn1"> <img className="related-arrow" src="https://raw.githubusercontent.com/shakuneko/icon/master/right-arrow.png"/></button>
            </div>


            </div>


          </div>
       
      </div>
    
    
  );
}
 
export default App;