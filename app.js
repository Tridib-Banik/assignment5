
                          //item foods area
const getSearchName = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const itemDiv = document.getElementById('show-items');
            data.meals.forEach(food => {
                const creatDiv = document.createElement('div');
                creatDiv.className = "foodsDiv-style"
                const foodsInfo = `
                 <img onclick = "getItemDetails('${food.strCategory}')" src = "${food.strMealThumb}">
                 <h1>${food.strCategory}</h1>
                 `
                 creatDiv.innerHTML = foodsInfo;
                itemDiv.appendChild(creatDiv);
                document.getElementById('search-name').value = "";
            });
        })
        .catch(err => alert('Your item name is invalid. Please give a valid name.'))
}

                    //search button area.
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', () => {
    document.getElementById('show-items').innerHTML = "";
    const inputName = document.getElementById('search-name').value;
    getSearchName(inputName);
});


                   // item find details area.
const getItemDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetailsUI(data));
};

                  //show details function
const showDetailsUI = items => {
    const itemDetail = document.getElementById('item-details');
    const itemDetailInfo = `
      <img src = "${items.meals[0].strMealThumb}">
      <h2>${items.meals[0].strCategory}</h2>
      <h3>Ingredients list:</h3>
      <p>${items.meals[0].strIngredient1}</p>
      <p>${items.meals[0].strIngredient2}</p>
      <p>${items.meals[0].strIngredient3}</p>
      <p>${items.meals[0].strIngredient4}</p>
      <p>${items.meals[0].strIngredient5}</p>
      <p>${items.meals[0].strIngredient11}</p>
      <p>${items.meals[0].strIngredient12}</p>
      <p>${items.meals[0].strIngredient13}</p>
      <p>${items.meals[0].strIngredient14}</p>
      <p>${items.meals[0].strIngredient15}</p>
      <p>${items.meals[0].strIngredient16}</p>
     `
    itemDetail.innerHTML = itemDetailInfo;
};