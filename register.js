function getDataFromForm(data) {
    const formDataValues = new FormData(data);
    
    return Object.fromEntries(formDataValues);
};  

document.getElementById("register_form").addEventListener("submit", function(form){
    form.preventDefault();

    const formDataObject = getDataFromForm(form.target);

    if(formDataObject.password !== formDataObject.repeat_password){
        alert("Hasła nie są identyczne");
        return;
    }

    fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(formDataObject),
        headers: {
            "content-type": "application/json"
        }
    })
    
});