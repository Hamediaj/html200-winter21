
let bankOpen = true;
let balance = 10000;

totalWithdrawn = 0;
totalDeposited = 0;

while(bankOpen){
    let options = prompt('Welcome to JS Banking. Please choose from the following options: enter Q to quit, W to withdraw, D to deposit, or B to view balance.');
    switch(options){

        case 'Q':
            alert('Thank you for banking with us. Your session will end now.');
            bankOpen = false;
            break;

        case 'W':
            totalWithdrawn = prompt('Please enter how much you would like to withdraw.');
            balance = Number(balance) - Number(totalWithdrawn);
            alert(`You withdrew $${totalWithdrawn}. Your new balance is now $${balance}.`)
            break;

        case 'D':
            depositTotal = prompt('Please enter how much you would like to deposit.');
            balance = Number(balance) + Number(totalDeposited);
            alert(`You deposited $${totalDeposited}. Your new balance is $${balance}`);
            break;

        case 'B':
            alert(`Your current balance is $${balance}.`);
            break;


        default:
            alert('Option not valid. Enter Q to quit, W to withdraw, D to deposit, or B to view balance');
    }

}
