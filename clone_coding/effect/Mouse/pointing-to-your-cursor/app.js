class Animation {
    cols = 6;
    rows = 4;

    lineWidth = 40;
    markerName = "marker";
    spacingHorizontal = 100;
    spacingVertical = 100;
    strokeColor =
        getComputedStyle(document.documentElement).
        getPropertyValue('--arrow');
    strokeWidth = 10;

    svgMargin = 40;
    svgHeight = 0;
    svgWidth = 0;

    lines = [];
    screen = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    mouse = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    };
    mouseStored = Object.assign({}, this.mouse);
    constructor(selector) {
        this.svg =document.querySelector(selector);

        this.svgWidth = this.cols * this.lineWidth + 2 *
            this.svgMargin + (this.cols - 1) * this.spacingHorizontal;
        this.svgHeight = this.rows + 2 * this.svgMargin +
            (this.rows - 1) * this.spacingVertical;

        this.svg.setAttribute("viewBox", `0 0 ${this.svgWidth} ${this.svgHeight}`);
        this.svg.setAttribute("stroke-linecap", "round");

        this.addEventListeners();
        // Create a marker for the lines
        this.createMarker();
        // Drew all the lines
        this.draw();
        //And animate them if the user is fine with it
        window.matchMedia('(prefers-reduced-motion: no-preference').matches ? this.animate() : null;
    }

    addEventListeners() {
        let self = this;
        // Don't redraw everything, only recalculate the centers of all arrows
        window.addEventListener("resize", function () {
            self.screen.width = window.innerWidth;
            self.screen.height = window.innerHeight;
            self.setLineCenters();
        });
    }

    draw() {
        for(var i = 0; i < this.rows; i++) {
            for(var j = 0; j < this.cols; j++) {
                // We're drawing the initial lines horizontally
                let c = new Line(
                    this.svgMargin + j*this.lineWidth +
                    j*this.spacingHorizontal,
                    this.svgMargin + (j+1)*this.lineWidth +
                    j*this.spacingHorizontal,
                    this.svgMargin + i*this.spacingVertical,
                    this.svgMargin + i*this.spacingVertical,
                    this.strokeColor,
                    this.strokeWidth,
                    this.markerName
                );

                // Set a transform origin and add the HTML element to the SVG
                const cElement = c.getElement();
                gsap.set(cElement, {transformOrigin: "50% 50%"});
                this.svg.appendChild(cElement);

                this.lines.push(c);
            }
        }
        this.setLineCenters();
    }

    createMarker() {
        let defs = document.createElementNS("http://www.w3.org/2000/svg",'defs');
        let marker = document.createElementNS("http://www.w3.org/2000/svg",'marker');

        marker.setAttribute("id", this.markerName);
        marker.setAttribute("viewBox", `0 0
            ${this.strokeWidth} ${this.strokeWidth}`);
        marker.setAttribute("refX", this.strokeWidth / 2);
        marker.setAttribute("refY", this.strokeWidth / 2);
        marker.setAttribute("markerUnits", "strokeWidth");
        marker.setAttribute("markerWidth", this.strokeWidth / 4);
        marker.setAttribute("markerHeight", this.strokeWidth / 4);
        marker.setAttribute("fill", this.strokeColor);
        marker.setAttribute("orient", "auto");
    }
}

const animation = new Animation("#animation");