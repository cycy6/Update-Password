// Defining function of button
const display = document.querySelector("input"),
        button = document.querySelector("button");
        // defining parameters of texts for a secured password
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-="
        button.onclick = ()=>{
            let i,
            randomPassword = "";
            for (i = 0; i < 16; i++) {
                randomPassword = randomPassword + chars.charAt(
                    Math.floor(Math.random() * chars.length)
                ); 
                console.log('[randomizerFunction]')
            }
            display.value = randomPassword;
        }