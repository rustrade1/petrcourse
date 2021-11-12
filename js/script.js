// 1) Удалить все рекламные блоки со страницы (правая часть сайта)


// let addFilm = function (e) {
//     e.preventDefault();
//     if (inp.value.length > 21) {
//         let slice = inp.value.slice(0, 21);
//         movieDB.movies.push(slice + '...');
//     } else {
//         movieDB.movies.push(inp.value);
//     }
//     if (checkbo.checked) {
//         console.log("Добавляем любимый фильм");
//     }
//     movieDB.movies.sort();
//     arr.innerHTML = '';
//     movieDB.movies.forEach((film, i) => {
//         arr.innerHTML +=
//             `<li class="promo__interactive-item">${i + 1} ${film}
//                 <div class="delete"></div>
//             </li>`;
//     });
// };
// btn.addEventListener('click', addFilm);



// for (let i = 0; i < del.length; i++) {
//     del[i].addEventListener('click', (e) => {
//         e.preventDefault();
//         delete movieDB.movies[i];
//         console.log('удалено');
//         arr.innerHTML = '';
//         movieDB.movies.forEach((film, k) => {
//             arr.innerHTML +=
//                 `<li class="promo__interactive-item">${k + 1} ${film}
//                 <div class="delete"></div>
//             </li>`;
//         });
//     });
// }


// 5) Добавить нумерацию выведенных фильмов */

// 1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
// новый фильм добавляется в список. Страница не должна перезагружаться.
// Новый фильм должен добавляться в movieDB.movies.
// Для получения доступа к значению input - обращаемся к нему как input.value;
// P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

// 2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
// 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let imgArr = document.querySelectorAll(".promo__adv img");


const deleteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

document.querySelector('.promo__genre').textContent = 'Драма';
document.querySelector(".promo__bg").style.backgroundImage = 'url(img/bg.jpg)';

let arr = document.querySelector(".promo__interactive-list");
let btn = document.querySelector('button');
let inp = document.querySelector('.adding__input');
let checkbo = document.querySelector('[type="checkbox"]');
let del = document.querySelectorAll('.delete');
let addForm = document.querySelector('form.add');

const sortArr = function (arr) {
    arr.sort();
};

addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let newFilm = inp.value;
    const favorite = checkbo.checked;  
    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`
        }
        if (favorite) {
            console.log('заебумба');
        }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMoveList(movieDB.movies, arr);
    }
    event.target.reset();
});

function createMoveList(films, parent) {
    parent.innerHTML = '';
    sortArr(films);
    films.forEach((film, i) => {
        parent.innerHTML +=
            `<li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`;
    });
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMoveList(films, parent);
        });
    });
}
createMoveList(movieDB.movies, arr);
deleteAdv(imgArr);
// sortArr(movieDB.movies);