class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      this.tabElement = tabElement;
      
      // Get the `data-tab` value from this.tabElement and store it here
      this.tabData = this.tabElement.dataset.tab; 
      
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
      
      // Check to see if this.tabData is equal to 'all'
      if(this.tabData === 'all'){
        // If `all` is true, select all cards regardless of their data attribute values
        this.cards = document.querySelectorAll('.card');
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
        this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
      }
  
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      this.cards = Array.from(this.cards).map((card) => new TabCard(card));
  
      // Add a click event that invokes this.selectTab
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
      // Select all elements with the .tab class on them
      const tabs = document.querySelectorAll('.tab');
      
      // Iterate through the NodeList removing the .active-tab class from each element
      tabs.forEach((tab) => {
        tab.classList.remove('active-tab')
      })
  
      
      // Add a class of ".active-tab" to this.tabElement
      this.tabElement.classList.add('active-tab');
    
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
      // Assign this.cardElement to the cardElement DOM reference
      this.cardElement = cardElement;
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
      const cards = document.querySelectorAll('.card');
      
      // Iterate through the NodeList removing the .active-tab class from each element
      cards.forEach((card) => {
        card.classList.remove('selected')
      })
      this.cardElement.classList.add('selected');
    }
  
  }
  
 
  let tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => new TabLink(tab));