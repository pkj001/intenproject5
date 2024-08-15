document.addEventListener("DOMContentLoaded", () => {
    const menuItems = [
        { id: 1, name: "Chicken Curry", price: 17 },
        { id: 2, name: "Vegetable Biryani", price: 10 },
        { id: 3, name: "Paneer Tikka", price: 15 },
    ];
    
    const authLink = document.getElementById("authLink");
    const profileLink = document.getElementById("profileLink");
    
    let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    
    if (authLink) {
        if (isLoggedIn) {
            authLink.textContent = "Logout";
            profileLink.style.display = "inline";
        } else {
            authLink.textContent = "Login";
            profileLink.style.display = "none";
        }
    }
    
    if (document.getElementById("menuList")) {
        const menuList = document.getElementById("menuList");
        const dishSelect = document.getElementById("dish");
        
        menuItems.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price}`;
            menuList.appendChild(listItem);
            
            const option = document.createElement("option");
            option.value = item.id;
            option.textContent = item.name;
            dishSelect.appendChild(option);
        });
    }
    
    if (document.getElementById("orderForm")) {
        const orderForm = document.getElementById("orderForm");
        
        orderForm.addEventListener("submit", event => {
            event.preventDefault();
            const selectedDishId = parseInt(document.getElementById("dish").value);
            const quantity = parseInt(document.getElementById("quantity").value);
            
            const selectedDish = menuItems.find(item => item.id === selectedDishId);
            
            if (selectedDish) {
                alert(`Order placed for ${quantity} x ${selectedDish.name} at $${selectedDish.price * quantity}`);
            }
        });
    }
    
    if (document.getElementById("userProfile")) {
        const userProfile = document.getElementById("userProfile");
        if (isLoggedIn) {
            userProfile.innerHTML = "<p>Welcome, User!</p>";
        } else {
            userProfile.innerHTML = "<p>Please <a href='login.html'>login</a> to see your profile.</p>";
        }
    }
});
