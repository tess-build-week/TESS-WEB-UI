class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      this.tabElement = tabElement;
      
      // Get the `data-tab` value from this.tabElement and store it here
      this.tabData = this.tabElement.dataset.tab; 
      
      this.card = document.querySelector(`.card[data-tab="${this.tabData}"]`);
  
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
      this.cardEl = new TabCard(this.card);
  
      // Add a click event that invokes this.selectTab
      this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
      // Select all elements with the .tab class on them
      const tabs = document.querySelector('.active-tab');
  
      if (tabs) tabs.classList.remove('active-tab');
      // Add a class of ".active-tab" to this.tabElement
      this.tabElement.classList.add('active-tab');
    
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
      this.cardEl.selectCard();
    }
}
  
class TabCard {
    constructor(cardElement){
        // Assign this.cardElement to the cardElement DOM reference
        this.cardElement = cardElement;
    }
    selectCard(){
        const cards = document.querySelector('.selected');
        
        // Iterate through the NodeList removing the .selected class from each element
        if (cards) cards.classList.remove('selected');

        this.cardElement.classList.add('selected');
    }
}
  
 
let tabs = document.querySelectorAll('.tab');
tabs.forEach((tab) => new TabLink(tab));