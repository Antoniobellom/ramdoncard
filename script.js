
window.onload = () => {
    let cardNumbers = {
        number:" ",
        icon:" ",
    };
    console.log(cardNumbers);

    let cardSort = (cardNumbers) => {
        for (let i = 0; i < cardNumbers.length; i++) {
            for (let j = 0; j < cardNumbers.length; j++) {
                if (cardNumbers[j] > cardNumbers[j + 1]) {
                    let temp = cardNumbers[j];
                    cardNumbers[j] = cardNumbers[j + 1];
                    cardNumbers[j + 1] = temp;
                }
            }
        }
        return cardNumbers;
    }
    function getCardType(cardNum) {
        return cardNum === 11
          ? "J"
          : cardNum === 12
          ? "Q"
          : cardNum === 13
          ? "K"
          : cardNum === 1
          ? "A"
          : cardNum;
      }
     

        
    let generateNumber = () => {
        let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let indexNum = Math.floor(Math.random() * numeros.length);
        return numeros[indexNum];
    }
    let generateIcon = () => {
        let iconos = ["\u2665", "\u2666", "\u2660", "\u2663"];
        let indexIcon = Math.floor(Math.random() * iconos.length);
        return iconos[indexIcon];
    }

    let generateCard = (cardNum) =>{

        const icon = generateIcon();

        if(icon == "\u2665" || icon == "\u2666")
        {
            $('#cardContainer').append(
                '<div class="container-fluid text-center card">' +
                '<div class="icono text-danger">' +
                icon +
                '</div>' +
                '<div id="medio">' +
                getCardType(cardNum) +
                '</div>' +
                '<div class="icono2 text-danger">' +
                icon +
                '</div>' +
                '</div>');
        }
        else{
            $('#cardContainer').append(
                '<div class="container-fluid text-center card">' +
                '<div class="icono text-dark ">' +
                icon +
                '</div>' +
                '<div id="medio">' +
                getCardType(cardNum) +
                '</div>' +
                '<div class="icono2 text-dark">' +
                icon +
                '</div>' +
                '</div>');
        }
        
    }
    
    document.querySelector(".boton").addEventListener("click",()=>{
        $('#cardContainer').empty();
        cardNumbers = [];

        const amnt = $("#cardAmmount").val();
        let i = 0;
        

        while (i < amnt) {
            cardNumbers[i]=generateNumber()
                
            
            i++;
        }
        i = 0;
        while (i < amnt) {
            generateCard(cardNumbers[i]);
            i++;
        }
    })

    document.querySelector("#sortingBtn").addEventListener("click",()=>{
        $('#cardContainer').empty();

        cardNumbers = cardSort(cardNumbers);
        
        let i = 0;
        while (i < cardNumbers.length) {
            generateCard(cardNumbers[i]);
            i++;
        }
    })
    document.querySelector("#clearBtn").addEventListener("click",()=>{
        $('#cardContainer').empty();
        cardNumbers = [];
    })
    
}
