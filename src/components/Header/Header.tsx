import "../Header/Header.css"
import { ShopLogo } from "./ShopLogo"
import { CartLogo } from "./CartLogo"

export const Header = () => {

  return (
    <div className="Header">
      <ShopLogo/>
      <div><span>Dream shop, buy with taste and enjoy life</span></div>
      <CartLogo/>
    </div>
  )
}

