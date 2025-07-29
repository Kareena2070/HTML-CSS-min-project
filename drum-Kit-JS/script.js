

const style = document.createElement("style");
style.textContent = `
    * {
        margin: 0;
    }

    body {
        text-align: center;
        background-image: url(background.jpg);
    }
    
    .keys{
    display: flex;
    justify-content: center;
    margin-top: 30rem;
    gap: 6rem
    
    }

    kbd{
    display: block;
    font-size: 3rem;
    font-weight: 700;
    color: white;
    }



    .sound{
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: yellow;
    letter-spacing: .1rem;
    }

    .key{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem
        border: 0.4rem solid black;
        border-radius: 0.5rem;
        background: rgba(0,0,0,0.5);
        text-shadow: 0 0 .5rem black;
        padding: 0.4rem .2rem;
        transition: all 0.1s ease;
        width: 8rem;
      
}
    .playing {
        transform: scale(1.6);
        border-color: #ffc600;
        box-shadow: 0 0 1rem #ffc600;
        }


`;


