class Dropdown {
    constructor(element) {

        // Assign this.element to the dropdown element
        this.element = element;
        console.log(this.element);
        // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
        this.button = this.element.querySelector('.dropdown-button');
        console.log(this.button);
        // assign the reference to the ".dropdown-content" class found in the dropdown element
        this.content = this.element.querySelector('.dropdown-content');
        console.log(this.content);
        // Get the element with the ".hamburger" class 
        this.dropdownButton = this.element.querySelector('.dropdown-button');
        // Add a click handler to the button reference and call the toggleContent method.
        this.button.addEventListener('click', () => this.toggleContent());
        // Add a click handler to the button reference and call the barTransition method.
        this.button.addEventListener('click', () => this.barTransition());
    }

    toggleContent() {
        // Toggle the ".dropdown-hidden" class off and on
        this.content.classList.toggle('dropdown-hidden');
    }
    barTransition() {
        this.dropdownButton.classList.toggle('active');
    }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new Dropdown(dropdown));