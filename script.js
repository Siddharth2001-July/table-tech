
var data = $.getJSON("data.json", function (result) { return result });
// console.log(data);

$($(document).ready(function () {

    // ADD a row
    $('#entry').submit((e) => {
        e.preventDefault()
        let name = $('#name').val()
        let email = $('#email').val()
        let phone = $('#phone').val()
        let country = $('#country').val()
        let currency = $('#currency').val()
        data.push({
            'name': name,
            'email': email,
            'phone': phone,
            'country': country,
            'currency': '$' + currency
        })
        save(data)
    })

    // SORT
    $('#btn-name').click(()=>{
        $('#btn-name').toggleClass('btn-info')
    })
    $('#btn-email').click(()=>{
        $('#btn-email').toggleClass('btn-info')
    })
    $('#btn-phone').click(()=>{
        $('#btn-phone').toggleClass('btn-info')
    })
    $('#btn-country').click(()=>{
        $('#btn-country').toggleClass('btn-info')
    })
    $('#btn-currency').click(()=>{
        $('#btn-currency').toggleClass('btn-info')
    })

    // FETCHING DATA
    data = data.responseJSON
    for (let i = 0; i < data.length; i++) {
        $('#t-body').append(`<tr><td>` + data[i].name + `</td><td>` + data[i].email + `</td><td>` + data[i].phone + `</td><td>` + data[i].country + `</td><td>` + data[i].currency + `</td></tr>`);
    }
}))

function save(storageObj) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(storageObj));
    var dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "data.json");
    dlAnchorElem.click();
}