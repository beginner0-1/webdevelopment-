let highestZ = 1;

class Paper {
    constructor(paper) {
        this.paper = paper;

        this.holdingPaper = false;

        this.prevMouseX = 0;
        this.prevMouseY = 0;

        this.mouseX = 0;
        this.mouseY = 0;

        this.velocityX = 0;
        this.velocityY = 0;

        this.currentPaperX = 0;
        this.currentPaperY = 0;

        this.init();
    }

    init() {
        this.paper.addEventListener("mousedown", (e) => {
            this.holdingPaper = true;

            this.paper.style.zIndex = highestZ++;
            this.prevMouseX = e.clientX;
            this.prevMouseY = e.clientY;
        });

        document.addEventListener("mousemove", (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;

            this.velocityX = this.mouseX - this.prevMouseX;
            this.velocityY = this.mouseY - this.prevMouseY;

            if (this.holdingPaper) {
                this.currentPaperX += this.velocityX;
                this.currentPaperY += this.velocityY;

                this.paper.style.transform =
                    `translate(${this.currentPaperX}px, ${this.currentPaperY}px)`;
            }

            this.prevMouseX = this.mouseX;
            this.prevMouseY = this.mouseY;
        });

        window.addEventListener("mouseup", () => {
            this.holdingPaper = false;
        });
    }
}

const papers = document.querySelectorAll(".paper");
papers.forEach(paper => new Paper(paper));
