var nameInput = document.getElementById("bookmarkName")
var linkInput = document.getElementById("bookmarkURL")
var alertName = document.getElementById("alertName")
var alertLink = document.getElementById("alertLink")
var bookmarks = [];
if (localStorage.getItem("products")) {
    bookmarks = JSON.parse(localStorage.getItem("products"))
    displayProduct()
}
function addProduct() {
    var product = {
        name: nameInput.value,
        link: linkInput.value
    }
    bookmarks.push(product)
    localStorage.setItem("products", JSON.stringify(bookmarks))
    displayProduct()
    clearForm()
}
function displayProduct() {
console.log()
    var temp = ""
    for (var i = 0; i < bookmarks.length; i++) 
    {
        temp += `
        <tr>
        <td>`+i+`</td>
        <td>`+bookmarks[i].name+`</td>

        <td><a target="_blank" href='`+bookmarks[i].link+`' class="btn btn-submit px-5" id="submitBtn">
        visit
        </a></td>
        <td><button class="btn btn-submit px-5" onclick="deleteProduct()" id="submitBtn">
        Delete
        </button></td>
        </tr>
        `
    }
    document.getElementById("myRow").innerHTML = temp
}
function deleteProduct(inde) {
    bookmarks.splice(inde, 1)
    localStorage.setItem("products", JSON.stringify(bookmarks))
    displayProduct()
}
function clearForm() {
    nameInput.value = ''
    linkInput.value = ''
    
}
    
nameInput.addEventListener("change", function () {
    var regexName = /^[a-zA-Z0-9.-]+$/
    if (regexName.test(nameInput.value)) {
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        alertName.classList.add("d-none")
    }else{
        nameInput.classList.add("is-invalid") 
        nameInput.classList.remove("is-valid")
        alertName.classList.remove("d-none")
    }
    
})

linkInput.addEventListener("change" , function () {
    var regexLink = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
    if (regexLink.test(linkInput.value)) {
        linkInput.classList.add("is-valid")
        linkInput.classList.remove("is-invalid")
        alertLink.classList.add("d-none")
    }else{
        linkInput.classList.add("is-invalid") 
        linkInput.classList.remove("is-valid")
        alertLink.classList.remove("d-none")
    }
    
})