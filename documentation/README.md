# Frontend Documentation

1. Create a file directory named chessfrontend (you can name it however you like - at least don't be rude!) and open it

    
    mkdir chessfrontend
    cd frontend
    

2. Clone the repository to your computer

    
    git clone https://github.com/TYSHARA/ChessOnline
    

3. On typing 'ls', the following frontend structure should appear:
   - css (directory)
   - images (directory)
   - js (directory)
   - README.md
   - game_detail.html
   - game_lobby.html
   - index.html
   - login.html
   - profile.html
   - register.html

   This means everything "ihamba ngo line" is working in order.

4. Run the server

    
    python3 -m http.server 9000
    

<button id="copy-button">Copy to Clipboard</button>

<script>
    const copyButton = document.getElementById("copy-button");

    copyButton.addEventListener("click", function () {
        const codeSnippet = `git clone https://github.com/TYSHARA/ChessOnline`;
        const textArea = document.createElement("textarea");
        textArea.value = codeSnippet;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        alert("Command copied to clipboard!");
    });
</script>
