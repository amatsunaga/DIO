const BASE_URL = "https://thatcopy.pw/catapi/rest/"

const buttonRef = document.querySelector("#change-cat")
const imgRef = document.querySelector("#cat")

const getCat = async () => {
    await fetch(BASE_URL)
        .then(response => response.json())
        .then(data => imgRef.setAttribute("src", `${data.webpurl}`))
        .catch(e => console.log(e.message))
}

buttonRef.addEventListener("click", getCat)

getCat()
