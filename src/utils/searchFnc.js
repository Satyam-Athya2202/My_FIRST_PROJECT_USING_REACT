
export const searchFnc=({searchValue, setAllItems, originalList})=>{


    const searchedProducts =   originalList.filter((res)=> {
    
      return(
        res.title.toLowerCase().trim().includes(searchValue.trim().toLowerCase())||
        res.category.toLowerCase().trim().includes(searchValue.trim().toLowerCase())
      )
    }
)
setAllItems(searchedProducts);

}