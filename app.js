class Product{
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(){

    }

    deleteProduct(){

    }
    
    showMessage(){

    }
}

//DOM Events

document.getElementById('product-form').addEventListener('submit', function() {
    alert ('Enviando formulario')
})