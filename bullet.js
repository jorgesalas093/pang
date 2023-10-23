class Bullet {
    constructor(container, x, y) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.vy = 10;

        this.element = document.createElement("div");
        this.element.style.position = "relative";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.backgroundColor = "blue";
        this.element.style.borderRadius = "100px";

        this.container.appendChild(this.element);
    }

    move() {
        this.y += this.vy;
        this.element.style.left = `${this.x}px`;
    }
}
