console.log( 'js' );

$( 'document' ).ready( readyNow );

class Car {

    constructor( nickname, year, make, model, imageURL ) {
        this.nickname = nickname;
        this.year = year;
        this.make = make;
        this.model = model;
        this.imageURL = imageURL;
    }

    getDOMtext() {
        let textForDOM = `
        <div class="card">
            <img class="card-img-top" src="${this.imageURL}" alt="Card image caption">
            <div class="card-body">
                <h5 class="card-title">${this.nickname}</h5>
                <h6 class="card-subtitle text-muted">${this.year} ${this.make} ${this.model}</h6>
                <p class="card-text">Go for a spin.</p>
                <button class="btn btn-primary" class="deleteMe">Go!</button>
            </div>
        </div>
        `
        return textForDOM;
    }

}

imgDefaultURL = "https://i.kinja-img.com/gawker-media/image/upload/s--LXZY7BhL--/c_scale,f_auto,fl_progressive,q_80,w_800/ky4097sexjpovzej8jpa.jpg"
carsInGarage = [];




function readyNow() {
    console.log( 'jQ' );

    $( '#addCarButton' ).on( 'click', addCarButtonClicked );
    $( document ).on( 'click', '.deleteMe', deleteMeButtonClicked );

}

function addCarButtonClicked() {

    let nickname = $( '#nicknameInput' ).val();
    let year = $( '#yearInput' ).val();
    let make = $( '#makeInput' ).val();
    let model = $( '#modelInput' ).val();
    let imgURL = $( '#urlInput' ).val();

    if ( imgURL == "" ) { imgURL = imgDefaultURL; }

    newCar = new Car( nickname, year, make, model, imgURL );
    carsInGarage.push( newCar );

    updateDisplay();

}

function updateDisplay() {

    $( '#carTableDiv' ).empty();

    for ( let currentCar of carsInGarage ) {
        $( '#carTableDiv' ).append( currentCar.getDOMtext() );
    }

}

function deleteMeButtonClicked() {

    console.log( 'deleteMe Clicked' );


    var positionToDelete = $( '#carTableDiv > .card' ).index( this.closest( '.card' ) );

    console.log( positionToDelete );

    carsInGarage.splice( positionToDelete, 1 );

    updateDisplay();
}

function handleFillRandomButtonClicked() {



}