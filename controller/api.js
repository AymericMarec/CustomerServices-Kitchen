function SendOrder(tableNumber,type,dishes){
    fetch(window.env.API_URL+'/api/validate', {
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