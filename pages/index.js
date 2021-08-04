import React , {useState} from 'react'
import Button from '../components/Button'
import Menu from '../components/Menu'
import data from '../data'

 const Allcategories = ['All',...new Set(data.map(item => item.category))] 

const Index = () => {

  const [categories,setCategories] = useState(Allcategories)
  const [items,setItems] = useState(data)
  const [selectButton,setSelectButton] = useState(false)
   console.log(categories)

  //  filter data

  const filterItems = (cat) => {
     
      if(cat === 'All'){
        setItems(data)
        return;
      }

    const filterData = data.filter(item => item.category == cat)
    setItems(filterData)
    console.log(filterData)
     
  }


  return (
    <div className="App">

      <h1 style={{textAlign:'center',padding:8}}>Filter Data</h1>

      <div>
        <Button filterItems={filterItems} categories={categories} selectButton={selectButton} />
      </div>
      <Menu items={items} />

    </div>
  )
}

export default Index
