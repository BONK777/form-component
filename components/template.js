export default {
    render(data) {
        return `
            ${this.css()}
            ${this.html(data)}
        `
    },
    html() {
        return `
        <form action="submit">
                <input type="email" name="email" id="1">
                <label>Email</label>
            <div class="mb25"></div>
                <input type="password" name="password" id="2">
                <label>Password</label>
            <div class="mb25"></div>
            <button>Submit</button>    
        </form>
        `
    },
    css() {
        return `
            <style>
                .mb25 {
                    margin-bottom: 25px;
                }
                
                .mt25 {
                    margin-top: 25px;
                }
                
                form {
                    width: 400px;
                    height: 300px;
                    background-color: ghostwhite;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid gold;
                    border-radius: 8px;
                }
                
                input {
                    width: 300px;
                    height: 40px;
                    background-color: ghostwhite;
                    border: 1px solid #888;
                    border-radius: 8px;
                }
                
                button {
                    width: 300px;
                    height: 40px;
                    border: 1px solid gold;
                    background-color: #fff;
                    border-radius: 8px;
                    cursor: pointer;
                    text-align: center;
                    transition: 0.3s;
                }

                label {
                    font-size: 12px;
                    position: relative;
                    right: 26%;
                    bottom: 9.5%;
                    color: #888;
                    transition: 0.3s;
                }
                input:focus ~ label {
                    position: realative;
                    font-size: 10px;
                    bottom: 13%;
                    right: 32%;
                }
                button:hover {
                    background-color: gold;
                }
            </style>
        `
    }
}