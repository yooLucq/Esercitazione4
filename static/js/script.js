let elements = document.querySelectorAll(".el");


elements.forEach(element => {
    element.addEventListener('click', function(event) {
        
        const clickedElement = event.currentTarget;

        if (clickedElement.classList.contains("green")){
            clickedElement.classList.remove("green");
            clickedElement.classList.add("yellow");
        }
    });
});