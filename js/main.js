





async function displayMeals() {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let meal = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    meal = await meal.json();
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');

    let my_start_row = document.querySelector('.my-start .row');

    //=======================================================

    for (let i = 0; i < meal.meals.length; i++) {
        let myImg = document.createElement('img');
        let myLayer = document.createElement('div');
        let display = document.createElement('div');
        let col_md_3 = document.createElement('div');
        let layer_h3 = document.createElement('h3');
        myImg.classList.add('w-100');
        myLayer.classList.add('img-layer', 'position-absolute', 'd-flex', 'align-items-center');
        display.classList.add('display', 'position-relative', 'overflow-hidden');
        col_md_3.classList.add('col-md-3');
        myImg.setAttribute('src', `${meal.meals[i].strMealThumb}`);
        layer_h3.innerHTML = `${meal.meals[i].strMeal}`;
        layer_h3.classList.add('p-2');

        myLayer.append(layer_h3);
        display.append(myImg, myLayer);
        col_md_3.append(display);
        my_start_row.append(col_md_3);
        myLayer.addEventListener('click', function () {
            // console.log(layer_h3.innerHTML);
            informationAboutMeal(layer_h3.innerHTML);
            if ($('.my-start').css('display') == 'block') {
                $('.my-start').css('display', 'none')
            }
            // document.querySelector('.my-start').classList.add('d-none');
            if ($('.meal-information').css('display') == 'none') {
                $('.meal-information').css('display', 'block')
            }
            // document.querySelector('.meal-information').classList.replace('d-none', 'd-block');
        })

    }
}

displayMeals();


async function informationAboutMeal(mealName) {

    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let info_meal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    info_meal = await info_meal.json();
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');

    let info_img = document.querySelector('.meal-information .inner-img img');
    $('.meal-information .inner-img h2').append(info_meal.meals[0].strMeal)

    info_img.setAttribute('src', `${info_meal.meals[0].strMealThumb}`)
    let inner_info_p = document.querySelector('.meal-information .inner-info p');
    let inner_info_area = document.querySelector('.meal-information .inner-info .area');
    let inner_info_category = document.querySelector('.meal-information .inner-info .category');
    inner_info_p.innerHTML = info_meal.meals[0].strInstructions;
    inner_info_area.innerHTML = info_meal.meals[0].strArea;
    inner_info_category.innerHTML = info_meal.meals[0].strCategory;

    let fs_ul = document.querySelector('.fs-ul');

    // let fs_ul_li = document.createElement('li');
    // fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')


    let arr = [info_meal.meals[0].strIngredient1, info_meal.meals[0].strIngredient2,
    info_meal.meals[0].strIngredient3, info_meal.meals[0].strIngredient4,
    info_meal.meals[0].strIngredient5, info_meal.meals[0].strIngredient6,
    info_meal.meals[0].strIngredient7, info_meal.meals[0].strIngredient8, info_meal.meals[0].strIngredient9, info_meal.meals[0].strIngredient10, info_meal.meals[0].strIngredient11, info_meal.meals[0].strIngredient12, info_meal.meals[0].strIngredient13, info_meal.meals[0].strIngredient14, info_meal.meals[0].strIngredient15, info_meal.meals[0].strIngredient16, info_meal.meals[0].strIngredient17, info_meal.meals[0].strIngredient18, info_meal.meals[0].strIngredient19, info_meal.meals[0].strIngredient20]

    let tag = document.querySelector('.tags');
    if (info_meal.meals[0].strTags != null) {
        // strTags.split();
        for (let i = 0; i < info_meal.meals[0].strTags.split(",").length; i++) {
            let li = document.createElement('li');
            li.classList.add('alert', 'alert-danger', 'm-2', 'p-1')
            li.innerHTML = info_meal.meals[0].strTags.split(",")[i];
            console.log(tag);
            tag.append(li);
        }

    }

    let arr_2 = [info_meal.meals[0].strMeasure1, info_meal.meals[0].strMeasure2,
    info_meal.meals[0].strMeasure3, info_meal.meals[0].strMeasure4,
    info_meal.meals[0].strMeasure5, info_meal.meals[0].strMeasure6,
    info_meal.meals[0].strMeasure7, info_meal.meals[0].strMeasure8, info_meal.meals[0].strMeasure9, info_meal.meals[0].strMeasure10, info_meal.meals[0].strMeasure11, info_meal.meals[0].strMeasure12, info_meal.meals[0].strMeasure13, info_meal.meals[0].strMeasure14, info_meal.meals[0].strMeasure15, info_meal.meals[0].strMeasure16, info_meal.meals[0].strMeasure17, info_meal.meals[0].strMeasure18, info_meal.meals[0].strMeasure19, info_meal.meals[0].strMeasure20]

    console.log(arr_2);
    for (let i = 0; i < 20; i++) {
        if (arr[i] != '' && arr[i] != null) {
            let fs_ul_li = document.createElement('li');
            fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')
            fs_ul.append(fs_ul_li);
            fs_ul_li.innerHTML = arr_2[i] + " " + arr[i];
            // console.log(fs_ul_li);
        }
        else {
            break;
        }

    }
    let source = document.querySelector('.source');
    let youtube = document.querySelector('.youtube');
    source.setAttribute('href', `${info_meal.meals[0].strSource}`)
    youtube.setAttribute('href', `${info_meal.meals[0].strYoutube}`)
}



//==================================



$('.open').click(function () {
    const homeAncorsWidhth = $('.nav_ul').outerWidth();
    console.log(homeAncorsWidhth);
    $('.lin').animate({ left: 0 }, 500);

    document.querySelector('.close').classList.replace('d-none', 'd-block')
    document.querySelector('.open').classList.add('d-none')
    $('.li_nav li').animate({ top: '0px' }, 1000)
})

$('.close').click(function () {
    const homeAncorsWidhth = $('.nav_ul').outerWidth();
    $('.lin').animate({ left: -homeAncorsWidhth }, 500)
    document.querySelector('.open').classList.replace('d-none', 'd-block')
    document.querySelector('.close').classList.replace('d-block', 'd-none')

    $('.li_nav li').animate({ top: '300px' }, 1000)

})

//  search
// *&^
document.querySelector('.Search_link').addEventListener('click', function () {
    // document.querySelector('.my-start').classList.add('d-none');
    name.value = "";
    email.value = "";
    phone.value = "";
    age.value = "";
    password.value = "";
    rePassword.value = "";

    //
    const homeAncorsWidhth = $('.nav_ul').outerWidth();
    $('.lin').animate({ left: -homeAncorsWidhth }, 500)
    document.querySelector('.open').classList.replace('d-none', 'd-block')
    document.querySelector('.close').classList.replace('d-block', 'd-none')

    $('.li_nav li').animate({ top: '300px' }, 1000)

    //

    if ($('.my-start').css('display') == 'block') {
        $('.my-start').css('display', 'none')
    }
    if ($('.search').css('display') == 'none') {
        console.log("no");
        $('.search').css('display', 'block')
    }

    if ($('.meal-information').css('display') == 'block') {
        $('.meal-information').css('display', 'none')
    }
    if ($('.cat').css('display') == 'block') {
        $('.cat').css('display', 'none')
    }
    if ($('.theCategoryContent').css('display') == 'block') {
        $('.theCategoryContent').css('display', 'none')
    }
    if ($('.cat-deta').css('display') == 'block') {
        $('.cat-deta').css('display', 'none')
    }


    if ($('.Ingredients').css('display') == 'block') {
        $('.Ingredients').css('display', 'none')
    }
    if ($('.Ingredients_content').css('display') == 'block') {
        $('.Ingredients_content').css('display', 'none')
    }
    if ($('.Ingredients-details').css('display') == 'block') {
        $('.Ingredients-details').css('display', 'none')
    }
    if ($('.areaa').css('display') == 'block') {
        $('.areaa').css('display', 'none')
    }
    if ($('.area_content').css('display') == 'block') {
        $('.area_content').css('display', 'none')
    }
    if ($('.area-deta').css('display') == 'block') {
        $('.area-deta').css('display', 'none')
    }
    if ($('.search-details').css('display') == 'block') {
        $('.search-details').css('display', 'none')
    }
    if ($('.contact').css('display') == 'block') {
        $('.contact').css('display', 'none')
    }


})
// end search

document.querySelector('.Categories_link').addEventListener('click', function () {

    name.value = "";
    email.value = "";
    phone.value = "";
    age.value = "";
    password.value = "";
    rePassword.value = "";
    const homeAncorsWidhth = $('.nav_ul').outerWidth();
    $('.lin').animate({ left: -homeAncorsWidhth }, 500)
    document.querySelector('.open').classList.replace('d-none', 'd-block')
    document.querySelector('.close').classList.replace('d-block', 'd-none')

    $('.li_nav li').animate({ top: '300px' }, 1000)

    if ($('.Ingredients').css('display') == 'block') {
        $('.Ingredients').css('display', 'none')
    }
    if ($('.Ingredients_content').css('display') == 'block') {
        $('.Ingredients_content').css('display', 'none')
    }
    if ($('.Ingredients-details').css('display') == 'block') {
        $('.Ingredients-details').css('display', 'none')
    }
    if ($('.areaa').css('display') == 'block') {
        $('.areaa').css('display', 'none')
    }
    if ($('.area_content').css('display') == 'block') {
        $('.area_content').css('display', 'none')
    }
    if ($('.area-deta').css('display') == 'block') {
        $('.area-deta').css('display', 'none')
    }
    if ($('.my-start').css('display') == 'block') {
        $('.my-start').css('display', 'none')
    }
    if ($('.cat').css('display') == 'none') {

        $('.cat').css('display', 'block')

    }

    if ($('.meal-information').css('display') == 'block') {
        $('.meal-information').css('display', 'none')
    }
    if ($('.search').css('display') == 'block') {
        $('.search').css('display', 'none')
    }
    if ($('.search-details').css('display') == 'block') {
        $('.search-details').css('display', 'none');
    }
    if ($('.theCategoryContent').css('display') == 'block') {
        $('.theCategoryContent').css('display', 'none')
        document.querySelector('.my-category-content .row').innerHTML = "";
    }
    if ($('.cat-deta').css('display') == 'block') {
        $('.cat-deta').css('display', 'none');
        document.querySelector('.my-category-content .row').innerHTML = "";
    }
    if ($('.contact').css('display') == 'block') {
        $('.contact').css('display', 'none')
    }

})

document.querySelector('.Area_link').addEventListener('click', function () {
    name.value = "";
    email.value = "";
    phone.value = "";
    age.value = "";
    password.value = "";
    rePassword.value = "";
    const homeAncorsWidhth = $('.nav_ul').outerWidth();
    $('.lin').animate({ left: -homeAncorsWidhth }, 500)
    document.querySelector('.open').classList.replace('d-none', 'd-block')
    document.querySelector('.close').classList.replace('d-block', 'd-none')

    $('.li_nav li').animate({ top: '300px' }, 1000)




    if ($('.Ingredients').css('display') == 'block') {
        $('.Ingredients').css('display', 'none')
    }
    if ($('.Ingredients_content').css('display') == 'block') {
        $('.Ingredients_content').css('display', 'none')
    }
    if ($('.Ingredients-details').css('display') == 'block') {
        $('.Ingredients-details').css('display', 'none')
    }

    if ($('.areaa').css('display') == 'none') {
        $('.areaa').css('display', 'block')
    }


    if ($('.area_content').css('display') == 'block') {
        $('.area_content').css('display', 'none')
        document.querySelector('.my_area_content .row').innerHTML = "";

    }
    if ($('.area-deta').css('display') == 'block') {
        $('.area-deta').css('display', 'none');
        document.querySelector('.my_area_content .row').innerHTML = "";
    }
    if ($('.my-start').css('display') == 'block') {
        $('.my-start').css('display', 'none')
    }


    if ($('.cat').css('display') == 'block') {
        $('.cat').css('display', 'none')
    }

    if ($('.meal-information').css('display') == 'block') {
        $('.meal-information').css('display', 'none')
    }
    if ($('.search').css('display') == 'block') {
        $('.search').css('display', 'none')
    }
    if ($('.search-details').css('display') == 'block') {
        $('.search-details').css('display', 'none')
    }
    if ($('.theCategoryContent').css('display') == 'block') {
        $('.theCategoryContent').css('display', 'none')
    }
    if ($('.cat-deta').css('display') == 'block') {
        $('.cat-deta').css('display', 'none')
    }
    if ($('.contact').css('display') == 'block') {
        $('.contact').css('display', 'none')
    }




})

document.querySelector('.Ingredients_link').addEventListener('click', function () {
    name.value = "";
    email.value = "";
    phone.value = "";
    age.value = "";
    password.value = "";
    rePassword.value = "";

    const homeAncorsWidhth = $('.nav_ul').outerWidth();
    $('.lin').animate({ left: -homeAncorsWidhth }, 500)
    document.querySelector('.open').classList.replace('d-none', 'd-block')
    document.querySelector('.close').classList.replace('d-block', 'd-none')

    $('.li_nav li').animate({ top: '300px' }, 1000)
    // if ($('.contact').css('display') == 'block') {
    //     $('.contact').css('display', 'none')
    // }
    if ($('.contact').css('display') == 'block') {
        $('.contact').css('display', 'none')
    }

    if ($('.Ingredients').css('display') == 'none') {
        $('.Ingredients').css('display', 'block')
    }
    if ($('.Ingredients_content').css('display') == 'block') {
        $('.Ingredients_content').css('display', 'none')
        document.querySelector('.my_Ingredients_content .row').innerHTML = "";
    }
    if ($('.Ingredients-details').css('display') == 'block') {
        $('.Ingredients-details').css('display', 'none');
        document.querySelector('.my_Ingredients_content .row').innerHTML = "";

    }

    if ($('.areaa').css('display') == 'block') {
        $('.areaa').css('display', 'none')
    }


    if ($('.area_content').css('display') == 'block') {
        $('.area_content').css('display', 'none')
    }
    if ($('.area-deta').css('display') == 'block') {
        $('.area-deta').css('display', 'none')
    }
    if ($('.my-start').css('display') == 'block') {
        $('.my-start').css('display', 'none')
    }


    if ($('.cat').css('display') == 'block') {
        $('.cat').css('display', 'none')
    }

    if ($('.meal-information').css('display') == 'block') {
        $('.meal-information').css('display', 'none')
    }
    if ($('.search').css('display') == 'block') {
        $('.search').css('display', 'none')
    }
    if ($('.search-details').css('display') == 'block') {
        $('.search-details').css('display', 'none')
    }
    if ($('.theCategoryContent').css('display') == 'block') {
        $('.theCategoryContent').css('display', 'none')
    }
    if ($('.cat-deta').css('display') == 'block') {
        $('.cat-deta').css('display', 'none')
    }

})

//=======
// contact






document.querySelector('.Contact_link').addEventListener('click', function () {

    name.value = "";
    email.value = "";
    phone.value = "";
    age.value = "";
    password.value = "";
    rePassword.value = "";

    const homeAncorsWidhth = $('.nav_ul').outerWidth();
    $('.lin').animate({ left: -homeAncorsWidhth }, 500)
    document.querySelector('.open').classList.replace('d-none', 'd-block')
    document.querySelector('.close').classList.replace('d-block', 'd-none')

    $('.li_nav li').animate({ top: '300px' }, 1000)


    if ($('.contact').css('display') == 'none') {
        $('.contact').css('display', 'block')
    }
    if ($('.Ingredients').css('display') == 'block') {
        $('.Ingredients').css('display', 'none')
        document.querySelector('.my_Ingredients_content .row').innerHTML = "";
    }

    if ($('.Ingredients_content').css('display') == 'block') {
        $('.Ingredients_content').css('display', 'none')
        document.querySelector('.my_Ingredients_content .row').innerHTML = "";
    }
    if ($('.Ingredients-details').css('display') == 'block') {
        $('.Ingredients-details').css('display', 'none');
        document.querySelector('.my_Ingredients_content .row').innerHTML = "";

    }

    if ($('.areaa').css('display') == 'block') {
        $('.areaa').css('display', 'none')
    }


    if ($('.area_content').css('display') == 'block') {
        $('.area_content').css('display', 'none')
    }
    if ($('.area-deta').css('display') == 'block') {
        $('.area-deta').css('display', 'none')
    }
    if ($('.my-start').css('display') == 'block') {
        $('.my-start').css('display', 'none')
    }


    if ($('.cat').css('display') == 'block') {
        $('.cat').css('display', 'none')
    }

    if ($('.meal-information').css('display') == 'block') {
        $('.meal-information').css('display', 'none')
    }
    if ($('.search').css('display') == 'block') {
        $('.search').css('display', 'none')
    }
    if ($('.search-details').css('display') == 'block') {
        $('.search-details').css('display', 'none')
    }
    if ($('.theCategoryContent').css('display') == 'block') {
        $('.theCategoryContent').css('display', 'none')
    }
    if ($('.cat-deta').css('display') == 'block') {
        $('.cat-deta').css('display', 'none')
    }

})












// document.querySelector('.Contact_link');





















// category ===========================================================================

async function displayCategory() {
    // ${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');

    let category = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    category = await category.json();
    let my_category_row = document.querySelector('.my-category .row');
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    // 

    for (let i = 0; i < category.categories.length; i++) {
        let myImg = document.createElement('img');
        let category_layer = document.createElement('div');
        let display_category = document.createElement('div');
        let col_md_3 = document.createElement('div');
        let layer_h3 = document.createElement('h3');
        let layer_p = document.createElement('p');
        myImg.classList.add('w-100');
        category_layer.classList.add('category-layer', 'position-absolute', 'd-flex', 'align-items-center', 'flex-column');
        display_category.classList.add('display-category', 'position-relative', 'overflow-hidden');
        col_md_3.classList.add('col-md-3');
        myImg.setAttribute('src', `${category.categories[i].strCategoryThumb}`);
        layer_h3.innerHTML = `${category.categories[i].strCategory}`;
        // ${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}
        // layer_p.innerHTML = `${category.categories[i].strCategoryDescription}`;
        layer_p.innerHTML = `${category.categories[i].strCategoryDescription.split(" ").slice(0, 20).join(" ")}`;
        layer_h3.classList.add('p-2');
        layer_p.classList.add('text-center');
        category_layer.append(layer_h3);
        category_layer.append(layer_p);
        display_category.append(myImg, category_layer);
        col_md_3.append(display_category);
        // console.log(col_md_3);

        my_category_row.append(col_md_3);

        category_layer.addEventListener('click', function () {
            displayCategoryContent(layer_h3.innerHTML);
            if ($('.cat').css('display') == 'block') {
                $('.cat').css('display', 'none')
            }
            if ($('.theCategoryContent').css('display') == 'none') {
                $('.theCategoryContent').css('display', 'block')
            }
            // document.querySelector('.cat').classList.add('d-none');
            // document.querySelector('.theCategoryContent').classList.add('d-block');
        })

    }
}
displayCategory();
async function displayCategoryContent(categoryName) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let CategoryContent = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    console.log("oj");

    CategoryContent = await CategoryContent.json();
    let my_category_content_row = document.querySelector('.my-category-content .row');
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    //


    if (CategoryContent.meals.length < 20) {
        for (let i = 0; i < CategoryContent.meals.length; i++) {
            let myImg = document.createElement('img');
            let category_layer_content = document.createElement('div');
            let display_category_content = document.createElement('div');
            let col_md_3 = document.createElement('div');
            let layer_h3 = document.createElement('h3');
            myImg.classList.add('w-100');
            category_layer_content.classList.add('category-layer-content', 'position-absolute', 'd-flex', 'align-items-center');
            display_category_content.classList.add('display-category-content', 'position-relative', 'overflow-hidden');
            col_md_3.classList.add('col-md-3');
            myImg.setAttribute('src', `${CategoryContent.meals[i].strMealThumb}`);
            layer_h3.innerHTML = `${CategoryContent.meals[i].strMeal}`;
            layer_h3.classList.add('p-2');

            category_layer_content.append(layer_h3);
            display_category_content.append(myImg, category_layer_content);
            col_md_3.append(display_category_content);
            my_category_content_row.append(col_md_3);
            category_layer_content.addEventListener('click', function () {
                let mealId = CategoryContent.meals[i].idMeal;
                // console.log(mealId);
                // document.querySelector('.theCategoryContent').classList.add('d-none');
                // document.querySelector('.theCategoryContent').classList.replace('d-block', 'd-none');
                if ($('.theCategoryContent').css('display') == 'block') {
                    $('.theCategoryContent').css('display', 'none')
                }
                if ($('.cat-deta').css('display') == 'none') {
                    $('.cat-deta').css('display', 'block')
                }
                // document.querySelector('.cat-deta').classList.replace('d-none', 'd-block');
                displayCategoryContentDetails(mealId);
            })

        }
    }
    else {
        for (let i = 0; i < 20; i++) {
            let myImg = document.createElement('img');
            let category_layer_content = document.createElement('div');
            let display_category_content = document.createElement('div');
            let col_md_3 = document.createElement('div');
            let layer_h3 = document.createElement('h3');
            myImg.classList.add('w-100');
            category_layer_content.classList.add('category-layer-content', 'position-absolute', 'd-flex', 'align-items-center');
            display_category_content.classList.add('display-category-content', 'position-relative', 'overflow-hidden');
            col_md_3.classList.add('col-md-3');
            myImg.setAttribute('src', `${CategoryContent.meals[i].strMealThumb}`);
            layer_h3.innerHTML = `${CategoryContent.meals[i].strMeal}`;
            layer_h3.classList.add('p-2');

            category_layer_content.append(layer_h3);
            display_category_content.append(myImg, category_layer_content);
            col_md_3.append(display_category_content);
            my_category_content_row.append(col_md_3);
            category_layer_content.addEventListener('click', function () {
                let mealId = CategoryContent.meals[i].idMeal;
                // console.log(mealId);
                // document.querySelector('.theCategoryContent').classList.add('d-none');
                // document.querySelector('.theCategoryContent').classList.replace('d-block', 'd-none');
                if ($('.theCategoryContent').css('display') == 'block') {
                    $('.theCategoryContent').css('display', 'none')
                }
                if ($('.cat-deta').css('display') == 'none') {
                    $('.cat-deta').css('display', 'block')
                }
                // document.querySelector('.cat-deta').classList.replace('d-none', 'd-block');
                displayCategoryContentDetails(mealId);
            })

        }
    }


}
async function displayCategoryContentDetails(mealID) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let categoryDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    categoryDetails = await categoryDetails.json();
    // console.log(categoryDetails);
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    let info_img = document.querySelector('.category_details .category_details_inner img');
    $('.category_details .category_details_inner img').css('borderRadius', '7px')
    $('.category_details .category_details_inner h2').append(categoryDetails.meals[0].strMeal)
    info_img.setAttribute('src', `${categoryDetails.meals[0].strMealThumb}`)
    let inner_info_p = document.querySelector('.category_details .category_details_inner_info p');
    let inner_info_area = document.querySelector('.category_details .category_details_inner_info .area_category');
    let inner_info_category = document.querySelector('.category_details .category_details_inner_info .category_category');
    inner_info_p.innerHTML = categoryDetails.meals[0].strInstructions;
    inner_info_area.innerHTML = categoryDetails.meals[0].strArea;
    inner_info_category.innerHTML = categoryDetails.meals[0].strCategory;

    let cat_ul = document.querySelector('.cat-ul');

    // let fs_ul_li = document.createElement('li');
    // fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')


    let arr = [categoryDetails.meals[0].strIngredient1, categoryDetails.meals[0].strIngredient2,
    categoryDetails.meals[0].strIngredient3, categoryDetails.meals[0].strIngredient4,
    categoryDetails.meals[0].strIngredient5, categoryDetails.meals[0].strIngredient6,
    categoryDetails.meals[0].strIngredient7, categoryDetails.meals[0].strIngredient8, categoryDetails.meals[0].strIngredient9, categoryDetails.meals[0].strIngredient10, categoryDetails.meals[0].strIngredient11, categoryDetails.meals[0].strIngredient12, categoryDetails.meals[0].strIngredient13, categoryDetails.meals[0].strIngredient14, categoryDetails.meals[0].strIngredient15, categoryDetails.meals[0].strIngredient16, categoryDetails.meals[0].strIngredient17, categoryDetails.meals[0].strIngredient18, categoryDetails.meals[0].strIngredient19, categoryDetails.meals[0].strIngredient20]

    let cat_tags = document.querySelector('.cat_tags');
    if (categoryDetails.meals[0].strTags != null) {
        // strTags.split();
        for (let i = 0; i < categoryDetails.meals[0].strTags.split(",").length; i++) {
            let li = document.createElement('li');
            li.classList.add('alert', 'alert-danger', 'm-2', 'p-1')
            li.innerHTML = categoryDetails.meals[0].strTags.split(",")[i];
            // console.log(cat_tags);
            cat_tags.append(li);
        }

    }

    let arr_2 = [categoryDetails.meals[0].strMeasure1, categoryDetails.meals[0].strMeasure2,
    categoryDetails.meals[0].strMeasure3, categoryDetails.meals[0].strMeasure4,
    categoryDetails.meals[0].strMeasure5, categoryDetails.meals[0].strMeasure6,
    categoryDetails.meals[0].strMeasure7, categoryDetails.meals[0].strMeasure8, categoryDetails.meals[0].strMeasure9, categoryDetails.meals[0].strMeasure10, categoryDetails.meals[0].strMeasure11, categoryDetails.meals[0].strMeasure12, categoryDetails.meals[0].strMeasure13, categoryDetails.meals[0].strMeasure14, categoryDetails.meals[0].strMeasure15, categoryDetails.meals[0].strMeasure16, categoryDetails.meals[0].strMeasure17, categoryDetails.meals[0].strMeasure18, categoryDetails.meals[0].strMeasure19, categoryDetails.meals[0].strMeasure20]

    // console.log(arr_2);
    for (let i = 0; i < 20; i++) {
        if (arr[i] != '' && arr[i] != null) {
            let fs_ul_li = document.createElement('li');
            fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')
            let cat_ul = document.querySelector('.cat-ul');
            cat_ul.append(fs_ul_li);
            fs_ul_li.innerHTML = arr_2[i] + " " + arr[i];
            // console.log(fs_ul_li);
        }
        else {
            break;
        }

    }
    let source_category = document.querySelector('.source_category');
    let youtube_category = document.querySelector('.youtube_category');
    source_category.setAttribute('href', `${categoryDetails.meals[0].strSource}`)
    // console.log(source_category, youtube_category);
    youtube_category.setAttribute('href', `${categoryDetails.meals[0].strYoutube}`)





}

// end categoru ================================================================================





// start area
async function displayArea() {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let area = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    area = await area.json();
    let area_row = document.querySelector('.area_row');
    //     let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    //=======================================================
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    for (let i = 0; i < area.meals.length; i++) {

        let area_inner = document.createElement('div');
        let col_md_3 = document.createElement('div');
        let layer_h3 = document.createElement('h3');
        area_inner.classList.add('area_inner');
        let icon = document.createElement("i");
        icon.classList.add('fa-solid', 'fa-house-laptop', 'fa-4x')
        col_md_3.classList.add('col-md-3', 'text-center');
        layer_h3.innerHTML = `${area.meals[i].strArea}`;
        layer_h3.classList.add('mt-2');
        area_inner.append(icon, layer_h3)
        col_md_3.append(area_inner);
        area_row.append(col_md_3);
        area_inner.addEventListener('click', function () {
            if ($('.areaa').css('display') == 'block') {
                $('.areaa').css('display', 'none')
            }
            // document.querySelector('.areaa').classList.add('d-none');
            informationAboutArea(layer_h3.innerHTML);
            if ($('.area_content').css('display') == 'none') {
                $('.area_content').css('display', 'block')
            }
            // document.querySelector('.area_content').classList.add('d-block');
        })
    }
}
displayArea();

//=======
async function informationAboutArea(areaName) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let areaMeals = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    areaMeals = await areaMeals.json();
    // console.log(areaMeals);
    let my_area_content_row = document.querySelector('.my_area_content .row');
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    //


    if (areaMeals.meals.length < 20) {
        for (let i = 0; i < areaMeals.meals.length; i++) {
            let myImg = document.createElement('img');
            let area_layer_content = document.createElement('div');
            let display_area_content = document.createElement('div');
            let col_md_3 = document.createElement('div');
            let layer_h3 = document.createElement('h3');
            myImg.classList.add('w-100');
            area_layer_content.classList.add('area_layer_content', 'position-absolute', 'd-flex', 'align-items-center');
            display_area_content.classList.add('display_area_content', 'position-relative', 'overflow-hidden');
            col_md_3.classList.add('col-md-3');
            myImg.setAttribute('src', `${areaMeals.meals[i].strMealThumb}`);
            layer_h3.innerHTML = `${areaMeals.meals[i].strMeal}`;
            layer_h3.classList.add('p-2');

            area_layer_content.append(layer_h3);
            display_area_content.append(myImg, area_layer_content);
            col_md_3.append(display_area_content);
            my_area_content_row.append(col_md_3);
            // console.log(col_md_3);
            area_layer_content.addEventListener('click', function () {
                let mealId = areaMeals.meals[i].idMeal;
                // console.log(mealId);
                // document.querySelector('.theCategoryContent').classList.add('d-none');
                if ($('.area_content').css('display') == 'block') {
                    $('.area_content').css('display', 'none')
                }
                // document.querySelector('.area_content').classList.add('d-none');
                if ($('.area-deta').css('display') == 'none') {
                    $('.area-deta').css('display', 'block')
                }
                // document.querySelector('.area-deta').classList.add('d-block');
                console.log(mealId);
                displayAreaContentDetails(mealId);
            })
        }
    }
    else {
        for (let i = 0; i < 20; i++) {
            let myImg = document.createElement('img');
            let area_layer_content = document.createElement('div');
            let display_area_content = document.createElement('div');
            let col_md_3 = document.createElement('div');
            let layer_h3 = document.createElement('h3');
            myImg.classList.add('w-100');
            area_layer_content.classList.add('area_layer_content', 'position-absolute', 'd-flex', 'align-items-center');
            display_area_content.classList.add('display_area_content', 'position-relative', 'overflow-hidden');
            col_md_3.classList.add('col-md-3');
            myImg.setAttribute('src', `${areaMeals.meals[i].strMealThumb}`);
            layer_h3.innerHTML = `${areaMeals.meals[i].strMeal}`;
            layer_h3.classList.add('p-2');

            area_layer_content.append(layer_h3);
            display_area_content.append(myImg, area_layer_content);
            col_md_3.append(display_area_content);
            my_area_content_row.append(col_md_3);
            // console.log(col_md_3);
            area_layer_content.addEventListener('click', function () {
                let mealId = areaMeals.meals[i].idMeal;
                // console.log(mealId);
                // document.querySelector('.theCategoryContent').classList.add('d-none');
                if ($('.area_content').css('display') == 'block') {
                    $('.area_content').css('display', 'none')
                }
                // document.querySelector('.area_content').classList.add('d-none');
                if ($('.area-deta').css('display') == 'none') {
                    $('.area-deta').css('display', 'block')
                }
                // document.querySelector('.area-deta').classList.add('d-block');
                console.log(mealId);
                displayAreaContentDetails(mealId);
            })
        }
    }


}

//======
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}
// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855
async function displayAreaContentDetails(mealID) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let areaDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    // let areaDetails = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52855`);
    areaDetails = await areaDetails.json();
    console.log(areaDetails);
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');

    let info_img = document.querySelector('.area_details_inner img');
    $('.area_details_inner img').css('borderRadius', '7px')
    $('.area_details_inner h2').append(areaDetails.meals[0].strMeal)
    info_img.setAttribute('src', `${areaDetails.meals[0].strMealThumb}`)
    let inner_info_p = document.querySelector('.area_inner_info p');
    let inner_info_area = document.querySelector('.areaaa_category');
    let inner_info_category = document.querySelector('.area_categoryy');
    inner_info_p.innerHTML = areaDetails.meals[0].strInstructions;
    inner_info_area.innerHTML = areaDetails.meals[0].strArea;
    inner_info_category.innerHTML = areaDetails.meals[0].strCategory;

    let area_ull = document.querySelector('.area_ull');

    let fs_ul_li = document.createElement('li');
    fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')


    let arr = [areaDetails.meals[0].strIngredient1, areaDetails.meals[0].strIngredient2,
    areaDetails.meals[0].strIngredient3, areaDetails.meals[0].strIngredient4,
    areaDetails.meals[0].strIngredient5, areaDetails.meals[0].strIngredient6,
    areaDetails.meals[0].strIngredient7, areaDetails.meals[0].strIngredient8, areaDetails.meals[0].strIngredient9, areaDetails.meals[0].strIngredient10, areaDetails.meals[0].strIngredient11, areaDetails.meals[0].strIngredient12, areaDetails.meals[0].strIngredient13, areaDetails.meals[0].strIngredient14, areaDetails.meals[0].strIngredient15, areaDetails.meals[0].strIngredient16, areaDetails.meals[0].strIngredient17, areaDetails.meals[0].strIngredient18, areaDetails.meals[0].strIngredient19, areaDetails.meals[0].strIngredient20]

    let area_tags = document.querySelector('.area_tags');
    if (areaDetails.meals[0].strTags != null) {
        // strTags.split();
        for (let i = 0; i < areaDetails.meals[0].strTags.split(",").length; i++) {
            let li = document.createElement('li');
            li.classList.add('alert', 'alert-danger', 'm-2', 'p-1')
            li.innerHTML = areaDetails.meals[0].strTags.split(",")[i];
            // console.log(area_tags);
            area_tags.append(li);
        }

    }

    let arr_2 = [areaDetails.meals[0].strMeasure1, areaDetails.meals[0].strMeasure2,
    areaDetails.meals[0].strMeasure3, areaDetails.meals[0].strMeasure4,
    areaDetails.meals[0].strMeasure5, areaDetails.meals[0].strMeasure6,
    areaDetails.meals[0].strMeasure7, areaDetails.meals[0].strMeasure8, areaDetails.meals[0].strMeasure9, areaDetails.meals[0].strMeasure10, areaDetails.meals[0].strMeasure11, areaDetails.meals[0].strMeasure12, areaDetails.meals[0].strMeasure13, areaDetails.meals[0].strMeasure14, areaDetails.meals[0].strMeasure15, areaDetails.meals[0].strMeasure16, areaDetails.meals[0].strMeasure17, areaDetails.meals[0].strMeasure18, areaDetails.meals[0].strMeasure19, areaDetails.meals[0].strMeasure20]

    console.log(arr_2);
    for (let i = 0; i < 20; i++) {
        if (arr[i] != '' && arr[i] != null) {
            let fs_ul_li = document.createElement('li');
            fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')
            area_ull.append(fs_ul_li);
            fs_ul_li.innerHTML = arr_2[i] + " " + arr[i];
            console.log(fs_ul_li);
        }
        else {
            break;
        }

    }
    let source_area = document.querySelector('.source_area');
    let youtube_area = document.querySelector('.youtube_area');
    source_area.setAttribute('href', `${areaDetails.meals[0].strSource}`);
    console.log(source_area, youtube_area);
    youtube_area.setAttribute('href', `${areaDetails.meals[0].strYoutube}`);
}
//  end arera ///////////////////////////////////////////////////////////////////



// https://www.themealdb.com/api/json/v1/1/list.php?i=list

async function displayIngredients() {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let Ingredients = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
    Ingredients = await Ingredients.json();
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    let Ingredients_row = document.querySelector('.Ingredients_row');
    let responce = Ingredients.meals.slice(0, 20);
    // console.log(responce);

    for (let i = 0; i < responce.length; i++) {


        if (responce[i].strDescription != null) {
            let Ingredients_inner = document.createElement('div');
            let col_md_3 = document.createElement('div');
            let layer_h3 = document.createElement('h3');
            Ingredients_inner.classList.add('Ingredients_inner');
            let icon = document.createElement("i");
            let Ingredients_p = document.createElement("p");
            icon.classList.add('fa-solid', 'fa-drumstick-bite', 'fa-4x')
            col_md_3.classList.add('col-md-3', 'text-center');
            layer_h3.innerHTML = `${responce[i].strIngredient}`;
            Ingredients_inner.append(icon, layer_h3)
            Ingredients_p.innerHTML = `${responce[i].strDescription.split(" ").slice(0, 20).join(" ")}`;
            Ingredients_inner.append(icon, layer_h3, Ingredients_p)
            layer_h3.classList.add('mt-2');
            col_md_3.append(Ingredients_inner);
            Ingredients_row.append(col_md_3);
            Ingredients_inner.addEventListener('click', function () {
                if ($('.Ingredients').css('display') == 'block') {
                    $('.Ingredients').css('display', 'none')
                }

                // document.querySelector('.Ingredients').classList.add('d-none');
                informationAboutIngredients(layer_h3.innerHTML);
                if ($('.Ingredients_content').css('display') == 'none') {
                    $('.Ingredients_content').css('display', 'block')
                }
                // document.querySelector('.Ingredients_content').classList.replace('d-none', 'd-block');
            })
        }
    }

}
displayIngredients();
// =========

// https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}

async function informationAboutIngredients(ingrentsName) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let ingrents = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrentsName}`);
    ingrents = await ingrents.json();
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    // console.log(areaMeals);
    let my_Ingredients_content_row = document.querySelector('.my_Ingredients_content .row');

    for (let i = 0; i < ingrents.meals.length; i++) {

        let myImg = document.createElement('img');
        let Ingredients_layer_content = document.createElement('div');
        let display_Ingredients_content = document.createElement('div');
        let col_md_3 = document.createElement('div');
        let layer_h3 = document.createElement('h3');
        myImg.classList.add('w-100');
        Ingredients_layer_content.classList.add('Ingredients_layer_content', 'position-absolute', 'd-flex', 'align-items-center');
        display_Ingredients_content.classList.add('display_Ingredients_content', 'position-relative', 'overflow-hidden');
        col_md_3.classList.add('col-md-3');
        myImg.setAttribute('src', `${ingrents.meals[i].strMealThumb}`);
        layer_h3.innerHTML = `${ingrents.meals[i].strMeal}`;
        layer_h3.classList.add('p-2');

        Ingredients_layer_content.append(layer_h3);
        display_Ingredients_content.append(myImg, Ingredients_layer_content);
        col_md_3.append(display_Ingredients_content);
        my_Ingredients_content_row.append(col_md_3);

        Ingredients_layer_content.addEventListener('click', function () {
            let mealId = ingrents.meals[i].idMeal;
            // console.log(mealId);
            // document.querySelector('.theCategoryContent').classList.add('d-none');
            if ($('.fs-ingre').css('display') == 'block') {
                $('.fs-ingre').css('display', 'none')
            }
            // document.querySelector('.fs-ingre').classList.replace('d-block', 'd-none');
            // document.querySelector('.ing-details').classList.replace('d-none', 'd-block');
            console.log(mealId);
            if ($('.ing-details').css('display') == 'none') {
                $('.ing-details').css('display', 'block')
            }
            displayAreaIngredientsDetails(mealId);
        })
    }
}
//========
//https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}

async function displayAreaIngredientsDetails(mealID) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let ingredients = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    ingredients = await ingredients.json();
    console.log(ingredients);
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    let info_img = document.querySelector('.Ingredients_details_inner img');
    $('.Ingredients_details_inner img').css('borderRadius', '7px')
    $('.Ingredients_details_inner h2').append(ingredients.meals[0].strMeal)
    info_img.setAttribute('src', `${ingredients.meals[0].strMealThumb}`)
    let inner_info_p = document.querySelector('.Ingredients_inner_info p');
    let inner_info_area = document.querySelector('.Ingredients_category');
    let inner_info_category = document.querySelector('.Ingredients_categoryy');
    inner_info_p.innerHTML = ingredients.meals[0].strInstructions;
    inner_info_area.innerHTML = ingredients.meals[0].strArea;
    inner_info_category.innerHTML = ingredients.meals[0].strCategory;

    let Ingredients_ull = document.querySelector('.Ingredients_ull');

    let fs_ul_li = document.createElement('li');
    fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')


    let arr = [ingredients.meals[0].strIngredient1, ingredients.meals[0].strIngredient2,
    ingredients.meals[0].strIngredient3, ingredients.meals[0].strIngredient4,
    ingredients.meals[0].strIngredient5, ingredients.meals[0].strIngredient6,
    ingredients.meals[0].strIngredient7, ingredients.meals[0].strIngredient8, ingredients.meals[0].strIngredient9, ingredients.meals[0].strIngredient10, ingredients.meals[0].strIngredient11, ingredients.meals[0].strIngredient12, ingredients.meals[0].strIngredient13, ingredients.meals[0].strIngredient14, ingredients.meals[0].strIngredient15, ingredients.meals[0].strIngredient16, ingredients.meals[0].strIngredient17, ingredients.meals[0].strIngredient18, ingredients.meals[0].strIngredient19, ingredients.meals[0].strIngredient20]

    let Ingredients_tags = document.querySelector('.Ingredients_tags');
    if (ingredients.meals[0].strTags != null) {
        // strTags.split();
        for (let i = 0; i < ingredients.meals[0].strTags.split(",").length; i++) {
            let li = document.createElement('li');
            li.classList.add('alert', 'alert-danger', 'm-2', 'p-1')
            li.innerHTML = ingredients.meals[0].strTags.split(",")[i];
            // console.log(Ingredients_tags);
            Ingredients_tags.append(li);
        }

    }

    let arr_2 = [ingredients.meals[0].strMeasure1, ingredients.meals[0].strMeasure2,
    ingredients.meals[0].strMeasure3, ingredients.meals[0].strMeasure4,
    ingredients.meals[0].strMeasure5, ingredients.meals[0].strMeasure6,
    ingredients.meals[0].strMeasure7, ingredients.meals[0].strMeasure8, ingredients.meals[0].strMeasure9, ingredients.meals[0].strMeasure10, ingredients.meals[0].strMeasure11, ingredients.meals[0].strMeasure12, ingredients.meals[0].strMeasure13, ingredients.meals[0].strMeasure14, ingredients.meals[0].strMeasure15, ingredients.meals[0].strMeasure16, ingredients.meals[0].strMeasure17, ingredients.meals[0].strMeasure18, ingredients.meals[0].strMeasure19, ingredients.meals[0].strMeasure20]

    // console.log(arr_2);
    for (let i = 0; i < 20; i++) {
        if (arr[i] != '' && arr[i] != null) {
            let fs_ul_li = document.createElement('li');
            fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')
            Ingredients_ull.append(fs_ul_li);
            fs_ul_li.innerHTML = arr_2[i] + " " + arr[i];
            console.log(fs_ul_li);
        }
        else {
            break;
        }

    }
    let source_Ingredients = document.querySelector('.source_Ingredients');
    let youtube_Ingredients = document.querySelector('.youtube_Ingredients');
    source_Ingredients.setAttribute('href', `${ingredients.meals[0].strSource}`);
    console.log(source_Ingredients, youtube_Ingredients);
    youtube_Ingredients.setAttribute('href', `${ingredients.meals[0].strYoutube}`);
}

//////////////////////////////////////////////
// search


let searchByName = document.querySelector('.searchbyname');
let searchByFirstLetter = document.querySelector('.searchbyfirstletter');
searchByName.addEventListener('keyup', function () {
    // console.log(this.value);
    informationAboutSearchByName(this.value);
})

async function informationAboutSearchByName(term) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let searchResponce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    searchResponce = await searchResponce.json();
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    let my_Ingredients_content_row = document.querySelector('.seerch_content .row');

    if (searchResponce != null && searchResponce.meals != null) {
        // console.log("ok");
        let cartona = "";
        for (let i = 0; i < searchResponce.meals.length; i++) {

            cartona += `<div class="col-md-3  ">
            <div onclick="getMeal(${searchResponce.meals[i].idMeal})"  class="display_search_content position-relative overflow-hidden  ">
                <img class="w-100" src="${searchResponce.meals[i].strMealThumb}" alt="meal">
                <div class="search_layer_content position-absolute  d-flex align-items-center   ">
  
                    <h3 class="p-2 ">${searchResponce.meals[i].strMeal}</h3>
               
                </div>
            </div>
        </div> `;



        }
        my_Ingredients_content_row.innerHTML = cartona;
    }
    else {
        my_Ingredients_content_row.innerHTML = "";
    }
}

//=====





searchByFirstLetter.addEventListener('keyup', function () {
    // console.log("ok");
    // console.log(this.value);
    if (this.value != '') {
        informationAboutSearchByFirstLetter(this.value);

    }
})

async function informationAboutSearchByFirstLetter(l) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let searchResponce = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${l}`);
    searchResponce = await searchResponce.json();
    console.log(searchResponce);
    let my_Ingredients_content_row = document.querySelector('.seerch_content .row');
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    if (searchResponce != null && searchResponce.meals != null) {
        // console.log("ok");
        let cartona = "";
        for (let i = 0; i < searchResponce.meals.length; i++) {

            cartona += `<div class="col-md-3  ">
            <div onclick="getMeal(${searchResponce.meals[i].idMeal})" class="display_search_content position-relative overflow-hidden  ">
                <img class="w-100" src="${searchResponce.meals[i].strMealThumb}" alt="meal">
                <div class="search_layer_content position-absolute  d-flex align-items-center   ">
  
                    <h3 class="p-2 ">${searchResponce.meals[i].strMeal}</h3>
               
                </div>
            </div>
        </div> `;


           
        }
        my_Ingredients_content_row.innerHTML = cartona;
    }
    else {
        my_Ingredients_content_row.innerHTML = "";
    }
}

function getMeal(id) {
    // document.querySelector('.search').classList.add('d-none');
    if ($('.search-details').css('display') == 'none') {
        $('.search-details').css('display', 'block')
    }
    if ($('.search').css('display') == 'block') {
        $('.search').css('display', 'none')
    }
    // document.querySelector('.search-details').classList.replace('d-none', 'd-block');

    displaySearchDetails(id);
}

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}

async function displaySearchDetails(mealID) {
    document.querySelector(".loading_screen").classList.replace('d-none', 'd-block');
    let search = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
    search = await search.json();
    console.log(search);
    document.querySelector(".loading_screen").classList.replace('d-block', 'd-none');
    let info_img = document.querySelector('.search_details_inner img');
    $('.search_details_inner img').css('borderRadius', '7px')
    $('.search_details_inner h2').append(search.meals[0].strMeal);

    info_img.setAttribute('src', `${search.meals[0].strMealThumb}`)
    let inner_info_p = document.querySelector('.search_inner_info p');
    let inner_info_area = document.querySelector('.search_area');
    let inner_info_category = document.querySelector('.search_categoryy');
    inner_info_p.innerHTML = search.meals[0].strInstructions;
    inner_info_area.innerHTML = search.meals[0].strArea;
    inner_info_category.innerHTML = search.meals[0].strCategory;

    let search_ull = document.querySelector('.search_ull');

    let fs_ul_li = document.createElement('li');
    fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')


    let arr = [search.meals[0].strIngredient1, search.meals[0].strIngredient2,
    search.meals[0].strIngredient3, search.meals[0].strIngredient4,
    search.meals[0].strIngredient5, search.meals[0].strIngredient6,
    search.meals[0].strIngredient7, search.meals[0].strIngredient8, search.meals[0].strIngredient9, search.meals[0].strIngredient10, search.meals[0].strIngredient11, search.meals[0].strIngredient12, search.meals[0].strIngredient13, search.meals[0].strIngredient14, search.meals[0].strIngredient15, search.meals[0].strIngredient16, search.meals[0].strIngredient17, search.meals[0].strIngredient18, search.meals[0].strIngredient19, search.meals[0].strIngredient20]

    let search_tags = document.querySelector('.search_tags');
    if (search.meals[0].strTags != null) {
        // strTags.split();
        for (let i = 0; i < search.meals[0].strTags.split(",").length; i++) {
            let li = document.createElement('li');
            li.classList.add('alert', 'alert-danger', 'm-2', 'p-1')
            li.innerHTML = search.meals[0].strTags.split(",")[i];
            // console.log(search_tags);
            search_tags.append(li);
        }

    }

    let arr_2 = [search.meals[0].strMeasure1, search.meals[0].strMeasure2,
    search.meals[0].strMeasure3, search.meals[0].strMeasure4,
    search.meals[0].strMeasure5, search.meals[0].strMeasure6,
    search.meals[0].strMeasure7, search.meals[0].strMeasure8, search.meals[0].strMeasure9, search.meals[0].strMeasure10, search.meals[0].strMeasure11, search.meals[0].strMeasure12, search.meals[0].strMeasure13, search.meals[0].strMeasure14, search.meals[0].strMeasure15, search.meals[0].strMeasure16, search.meals[0].strMeasure17, search.meals[0].strMeasure18, search.meals[0].strMeasure19, search.meals[0].strMeasure20]

    // console.log(arr_2);
    for (let i = 0; i < 20; i++) {
        if (arr[i] != '' && arr[i] != null) {
            let fs_ul_li = document.createElement('li');
            fs_ul_li.classList.add('alert', 'alert-info', 'm-2', 'p-1')
            search_ull.append(fs_ul_li);
            fs_ul_li.innerHTML = arr_2[i] + " " + arr[i];
            // console.log(fs_ul_li);
        }
        else {
            break;
        }

    }
    let source_search = document.querySelector('.source_search');
    let youtube_search = document.querySelector('.youtube_search');
    source_search.setAttribute('href', `${search.meals[0].strSource}`);
    // console.log(source_search, youtube_search);
    youtube_search.setAttribute('href', `${search.meals[0].strYoutube}`);
}



//////////////////////////


// validation
let flageN = false;
let name = document.querySelector('#nameInput');
function validName() {
    let valida = /^[a-zA-Z]{1,}$/
    console.log(valida.test(name.value));
    if (valida.test(name.value) == false) {
        document.querySelector('.p_name').classList.replace('d-none', 'd-block')
        return false;
    }
    else {
        document.querySelector('.p_name').classList.replace('d-block', 'd-none')
        flageN = true;
        return true;
    }
}




///////////////////////
let email = document.querySelector('#emailInput');
let flageE = false;

function validEmail() {
    let valida = /^[a-z]{1,}@[a-z]{3,}.[a-z]{3,}$/
    console.log(valida.test(email.value));
    if (valida.test(email.value) == false) {
        document.querySelector('.p_email').classList.replace('d-none', 'd-block')
        return false;
    }
    else {
        document.querySelector('.p_email').classList.replace('d-block', 'd-none')
        flageE = true;
        return true;
    }
}



/////////
let flageP = false;

let phone = document.querySelector('#phoneInput');
function validNumber() {
    let valida = /^01[1250][0-9]{8}$/
    console.log(valida.test(phone.value));
    if (valida.test(phone.value) == false) {
        document.querySelector('.p_number').classList.replace('d-none', 'd-block')
        return false;
    }
    else {
        document.querySelector('.p_number').classList.replace('d-block', 'd-none');
        flageP = true;
        return true;
    }

}


/////
let age = document.querySelector('#ageInput');
let flageA = false;

function validAge() {
    let valida = /^[1-9][0-9]?$/
    console.log(valida.test(age.value));
    if (valida.test(age.value) == false) {
        document.querySelector('.p_age').classList.replace('d-none', 'd-block')
        return false;
    }
    else {
        document.querySelector('.p_age').classList.replace('d-block', 'd-none');
        flageA = true;

        return true;
    }

}


let password = document.querySelector('#passwordInput');
let rePassword = document.querySelector('#validPassword');
let flagepas = false;
let flageRepas = false;

function validPassword() {
    let pas = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/
    console.log(pas.test(password.value));
    if (pas.test(password.value) == false) {
        document.querySelector('.p_password').classList.replace('d-none', 'd-block')
        return false;
    }
    else {
        document.querySelector('.p_password').classList.replace('d-block', 'd-none')
        flagepas = true;

        return true;
    }
}
function validrePassword() {
    console.log("in");
    if (rePassword.value == password.value) {
        document.querySelector('.p_repassword').classList.replace('d-block', 'd-none');
        flageRepas = true;
        return false;

    }
    else {
        document.querySelector('.p_repassword').classList.replace('d-none', 'd-block')

        return true;

    }
}


let submitBtn = document.querySelector('#submitBtn');
function validation() {
    if (flageA == true && flageE == true && flageN == true && flageP == true && flageRepas == true && flagepas == true) {
        console.log("tmam");
        submitBtn.removeAttribute("disabled")
    }

}



// let valida=/^[^!@#$%^&*0-9]$/

// console.log(valida.test(''));

