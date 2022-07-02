/* eslint-disable import/no-anonymous-default-export */
import React, { createContext, useState } from "react"

export const StoreContext = createContext(null);

export const StoreProvider = ({children}) => {

  const [burgersItem, setBurgersItem] = useState(false);
  const [comboOfferItem, setComboOfferItem] = useState(false);
  const [kidsMenuItem, setKidsMenuItem] = useState(false);
  const [pizzaMenuItem, setPizzaMenuItem] = useState(false);
  const [sandwichItem, setSandwichItem] = useState(false);

  const store = {
    burgers: [burgersItem, setBurgersItem],
    comboOffer: [comboOfferItem, setComboOfferItem],
    kidsMenu: [kidsMenuItem, setKidsMenuItem],
    pizzaMenu: [pizzaMenuItem, setPizzaMenuItem],
    sandwich: [sandwichItem, setSandwichItem],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}
