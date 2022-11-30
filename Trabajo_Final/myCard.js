class myCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode :"open"});
        this.contador="holi we"
        this.texto=this.getAttribute('texto');
        this.imagen=this.getAttribute('img')
    }

    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML =`
        
        ${this.getStyles()}

        <img src="${this.imagen}" alt="">
        <div> <slot></slot></div>
        <div class="card"> 
            <img src="plaboy.jpg" alt="">
        </div>
        
        `
        return template
    }

    getStyles(){
        const styles= `
        <style>
            h1{
                color: red
            }
            button{
                padding:20px
            }
            .card{
                border: 1px solid black;
                max-width: 500px;
                margin: auto;
                border-radius: 30px;
                box-shadow: 0px 10px 10px black;;
                padding: 20px;
                margin: 20px auto;
                background-color: #f0edf0;
            }
            img{
                max-width:300px;
                display: block;
                margin: auto
            }
            </style>
        `
        return styles
    }

    sumar(){
        this.contador++;
    }

    connectedCallback(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

}
customElements.define('my-element', myCard);