import React, { useState, useEffect } from "react";
import { items } from "../data/items";

const APIkey = process.env.REACT_APP_EBAY_KEY;

export const MyContext = React.createContext();

const MyAPIProvider = ({ children }) => {
  const [state, setState] = useState({});

  const [loading, setLoading] = useState(true);

  const [itemsEbay, setItems] = useState([
    { id: 0, shops: [] },
    { id: 0, shops: [] },
    { id: 0, shops: [] },
  ]);

  useEffect(() => {
    setState(items);
    getDataFromEbay();
  }, []);

  const getDataFromEbay = () => {
    const itemsPerShop = 1; //keep this number = 1 during production. NOTE we do 3*(3n+1) API calls
    let category = [
      { id: 10968, data: [] }, //JEWELRY
      { id: 175759, data: [] }, //CLOTHES
      { id: 32852, data: [] }, //ELECTRONICS
    ];
    let finalState = [
      { id: 0, shops: [] },
      { id: 0, shops: [] },
      { id: 0, shops: [] },
    ];
    const apiCall = (category) => {
      setLoading(true);
      const categoryUrl = `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=${APIkey}&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=${
        category.id
      }&paginationInput.entriesPerPage=${itemsPerShop * 3}`;
      const itemUrl = `https://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=JSON&appid=${APIkey}&siteid=0&version=967&ItemID=`;
      fetch(categoryUrl) //first API call (getting ID of items from categories)
        .then((response) => response.json())
        .then(
          (categoryData) =>
            categoryData.findItemsByCategoryResponse[0].searchResult[0].item
        )
        .then((result) => {
          //second API call (getting data info from item ID)
          const dataPromisesArray = result.map((items) =>
            fetch(`${itemUrl}${items.itemId[0]}`).then((response) =>
              response.json()
            )
          );
          return Promise.all(dataPromisesArray);
        })
        .then((itemData) => {
          //storing only what i need inside category.data
          itemData.map((singleItem) =>
            category.data.push({
              name: singleItem.Item.Title,
              imageS: singleItem.Item.GalleryURL,
              imageL: singleItem.Item.PictureURL[0],
              price: singleItem.Item.ConvertedCurrentPrice.Value,
            })
          );
          let firstShop = category.data.slice(0, category.data.length / 3); //splitting that data in 3 (to simulate 3 different shops)
          let secondShop = category.data.slice(
            category.data.length / 3,
            (2 * category.data.length) / 3
          );
          let thirdShop = category.data.slice(
            (2 * category.data.length) / 3,
            category.data.length
          );

          switch (category.id) {
            case 10968:
              finalState = [
                { id: category.id, shops: [firstShop, secondShop, thirdShop] },
                finalState[1],
                finalState[2],
              ];
              setItems(finalState);
              if(finalState[1].id !== 0 && finalState[2].id !== 0){setLoading(false)}
              break;
            case 175759:
              finalState = [
                finalState[0],
                { id: category.id, shops: [firstShop, secondShop, thirdShop] },
                finalState[2],
              ];
              setItems(finalState);
              if(finalState[0].id !== 0 && finalState[2].id !== 0){setLoading(false)}
              break;
            case 32852:
              finalState = [
                finalState[0],
                finalState[1],
                { id: category.id, shops: [firstShop, secondShop, thirdShop] },
              ];
              setItems(finalState);
              if(finalState[0].id !== 0 && finalState[1].id !== 0){setLoading(false)}
              break;
            default:
              break;
          }
          console.log(finalState)
        });
    };
    category.map((e) => apiCall(e));
  };

  return (
    <MyContext.Provider
      value={{ state, setState, loading, setLoading, itemsEbay, setItems }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyAPIProvider;
