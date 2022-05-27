const list = [
    {
        name: 'orange',
        price: 12,
    },
    {
        name: 'juice',
        price: 25,
    },
    {
        name: 'soap',
        price: 15,
    },
];

const balanceAvailable = 100;

function calcBalance(balanceAvailable, list) {
    return list.reduce(function(prev, current, index) {
        console.log('round', index + 1);
        console.log({ prev });
        console.log({ current });

        return prev - current.price;
    }, balanceAvailable);
}

console.log(calcBalance(balanceAvailable, list));