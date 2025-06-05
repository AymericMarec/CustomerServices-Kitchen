function SendOrder(tableNumber,type,dishes){
    console.log(dishes)
    fetch(window.env.API_URL+'/api/orders/validate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "tableNumber":tableNumber,
            "type":type,
            "order":dishes
        })
    })
}