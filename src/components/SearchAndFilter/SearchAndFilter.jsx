import { Filter } from "../Filter/Filter"
import { Search } from "../Search/Search"
import "../SearchAndFilter/SearchAndFilter.css"

export const SearchAndFilter = () => {

  return(
    <div className="SearchAndFilter">
    <Search/>
    <Filter/>
    </div>
  )
}