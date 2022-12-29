const images = [["/assets/images/app/start.png", "Start Screen"], 
    ["/assets/images/app/homepage.png", "Homepage Screen"], 
    ["/assets/images/app/item-search.png", "Searching for an Item Screen"],
    ["/assets/images/app/create-items.png", "Creating an Item Screen"], 
    ["/assets/images/app/item-selection.png", "Selecting an Item and Entering a Quantity"], 
    ["/assets/images/app/store-locator-selection.png", "Selecting a Method to Locate Stores"], 
    ["/assets/images/app/store-locator.png", "Selecting a Store From List of Pre-Selected Stores"], 
    ["/assets/images/app/store-locator-location.png", "Using User's Geographic Location to Find a Store"], 
    ["/assets/images/app/store-selection-1.png", "Shopping List with Total Expected Amount to Pay at Store"],
    ["/assets/images/app/store-selection-2.png", "Shopping List with Total Expected Amount to Pay at Store"],
    ["/assets/images/app/store-selection-item-not-found.png", "Shopping List with Missing Items"], 
    ["/assets/images/app/save-list-item-not-found.png", "Saving a Shopping List with Missing Items"],
    ["/assets/images/app/using-list.png", "Using a Shopping List After Saving It"], 
    ["/assets/images/app/using-list-item-not-found.png", "Using a Shopping List with Missing Items After Saving It"], 
    ["/assets/images/app/list-summary.png", "Shopping List Summary Screen"], 
    ["/assets/images/app/list-edit.png", "Editing Shopping List Screen"]]

const imagesWeb = [["/assets/images/web/homepage-guest.png", "Homepage for a Guest"], 
    ["/assets/images/web/homepage-registered-user.png", "Homepage for a Registered User"], 
    ["/assets/images/web/sign-up.png", "Account Sign Up Page"], 
    ["/assets/images/web/log-in.png", "User Log In Page"], 
    ["/assets/images/web/search-results-video-games.png", "Search Results Example"], 
    ["/assets/images/web/view-listing.png", "Viewing a Listing"], 
    ["/assets/images/web/trade.png", "Making an Offer for An Item"], 
    ["/assets/images/web/trade-accept.png", "Accepting An Offer"], 
    ["/assets/images/web/payment.png", "Making a Payment"],
    ["assets/images/web/create-listing.png", "Creating a Listing"]]

class Carousel {
    constructor(parent, prev, next, arr) {
        let self = this 
        this.position = 0
        this.length = arr.length
        this.arr = arr
        this.parent = parent

        // set first image
        const img = document.createElement('img')
        img.src = arr[0][0]
        img.alt = arr[0][1]
        img.classList = "h-auto w-auto"
        this.image = img

        parent.append(img)

        // create counter 

        const counter = document.createElement('h2')
        counter.textContent = "Image " + (this.position + 1) +  " out of " + this.length
        parent.append(counter)
        this.counter = counter 

        // create button event listeners
        prev.addEventListener('click', (event) => {
             this.prev()
        })

        next.addEventListener('click', (event) => {
            this.next()
        })
    }

    next() {
        this.position += 1

        if (this.position >= this.length) {
            this.position = 0
        }

        // change image
        this.image.src = this.arr[this.position][0]
        this.image.alt = this.arr[this.position][1]
        
        // update counter
        this.counter.textContent = "Image " + (this.position + 1) +  " out of " + this.length
    }

    prev() {
        this.position -= 1

        if (this.position < 0) {
            this.position = this.length - 1
        }
        
        // change image
        this.image.src = this.arr[this.position][0]
        this.image.alt = this.arr[this.position][1]

        // update counter 
        this.counter.textContent = "Image " + (this.position + 1) +  " out of " + this.length
    }
}

const carouselApp = new Carousel(document.getElementById("container"), document.getElementById("prev"), document.getElementById("next"), images)

const carouselWeb = new Carousel(document.getElementById("container-web"), document.getElementById("prev-web"), document.getElementById("next-web"), imagesWeb)
