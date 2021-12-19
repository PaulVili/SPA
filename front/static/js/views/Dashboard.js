import AbstractView from "./AbstractView.js"

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle("Dashboard")
    }

    async getHtml() {
        return `
        <h1>Welcome back</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum doloribus aspernatur doloremque dolores rerum molestiae facilis est alias delectus! Magnam repellat et officia hic sit minima vero veritatis aliquid.</p>
        <p>
            <a href="/posts" data-link>View recent posts</a>
        </p>
        `
    }
}