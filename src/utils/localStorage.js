export const setLocalStorage = (theme) => {
    localStorage.setItem("theme", theme);
    document.querySelector('html').setAttribute("data-theme", theme); 
}

// const getLocalStorage = () => {
//     const getItem = localStorage.getItem("theme");
//     console.log(getItem);
// }