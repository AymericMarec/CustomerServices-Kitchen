function SendOrder(tableNumber,type,dishes){
    //route de kevin
    fetch(window.env.API_URL+'/api/', {
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