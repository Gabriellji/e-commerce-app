import React, { useContext } from "react";
import { MyContext } from "./../../../context/APIContext";
import { ShopContext } from "./../../../context/ShopContext";
import { Switch, Route, Link } from "react-router-dom";
import { textData } from "../../../data/textData";

import ShopBanner from "./shop-banner/ShopBanner";
import SingleShop from "./remote-shop/SingleShop";
import ShopIconWrap from "./shop-icon-wrap/ShopIconWrap";
import Spinner from "../../atoms/spinner";
import SingleShopCard from "./remote-shop/SingleShopCard";
import MainNavbar from "../../molecules/mainNavbar/MainNavbar";
import Footer from "./../../molecules/footer/Footer";

import jewerly from "./../../../data/images/jewelry.png";
import jacket from "./../../../data/images/jacket.png";
import laptop from "./../../../data/images/laptop.png";
import styled from "styled-components";

const ShopContainer = styled.div`
  width: 100%;
  min-height: 70vh;
`;

const Shop = (props) => {
  const context = useContext(MyContext);

  const shopContext = useContext(ShopContext);

  return (
    <>
      <MainNavbar />
      <ShopContainer>
        {context.loading ? (
          <Spinner />
        ) : (
          <>
            {!shopContext.state.mobileMenu && (
              <Switch>
                <Route exact path="/shop">
                  <div className="shop_container">
                    <ShopBanner
                      title={textData.shop.banner[0].title}
                      text={textData.shop.banner[0].text}
                      image={jewerly}
                    />
                    <ShopIconWrap category="category1" id="0" />
                    <ShopBanner
                      title={textData.shop.banner[1].title}
                      text={textData.shop.banner[1].text}
                      image={jacket}
                    />
                    <ShopIconWrap category="category2" id="1" />
                    <ShopBanner
                      title={textData.shop.banner[2].title}
                      text={textData.shop.banner[2].text}
                      image={laptop}
                    />
                    <ShopIconWrap category="category3" id="2" />
                  </div>
                </Route>

                {context.state &&
                  context.state.items.map((category, categoryIndex) =>
                    category.shops.map((shops, shopsIndex) => {
                      let link = `/shop/category${
                        categoryIndex + 1
                      }/${shopsIndex}`;
                      return (
                        <Route exact path={link}>
                          <SingleShop {...props}
                            category={categoryIndex + 1}
                            shop={shopsIndex}
                          />
                        </Route>
                      );
                    })
                  )}

                <Route
                  render={() => {
                    const regExp = /\d+\/\d+\/\d+/;
                    let res = props.location.pathname
                      .match(regExp)[0]
                      .split("/")
                      .map((el) => Number(el));
                    const category = res[0] - 1;
                    const shop = res[1];
                    const index = res[2];
                    return (
                      <>
                        <SingleShopCard
                          name={
                            context.state.items[category].shops[shop][index]
                              .name
                          }
                          key={props.index}
                          price={
                            context.state.items[category].shops[shop][index]
                              .price
                          }
                        />
                        <Link to={`/shop/category${category + 1}/${shop}`}>
                          BACK
                        </Link>
                      </>
                    );
                  }}
                />
              </Switch>
            )}
          </>
        )}
      </ShopContainer>
      <Footer />
    </>
  );
};

export default Shop;
