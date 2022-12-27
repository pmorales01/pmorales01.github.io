const images = [["/assets/images/app/start.png", "Start Screen"], 
    ["/assets/images/app/homepage.png", "Homepage Screen"], 
    ["/assets/images/app/item-search.png", "Search for an Item Screen"],
    ["/assets/images/app/create-items.png", "Create an Item Screen"], 
    ["/assets/images/app/item-selection.png", "Select an Item and Enter a Quantity Screen"]]

const imagesWeb = [["/assets/images/web/homepage-guest.png", "Homepage for a Guest"], 
    ["/assets/images/web/homepage-registered-user.png", "Homepage for a Registered User"]]

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
