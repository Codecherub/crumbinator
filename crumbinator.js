// crumbinator-2 by chida

const crumbinator = {
  'build': (data) => {
    //hide all items
    let  items = document.getELementsByClassName(data.itemName);
    items.forEach((item)=> {
      console.log(item)})
  }
}