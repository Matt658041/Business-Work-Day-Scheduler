var timeInputEl = $(`#`)
var sortInputEl = $(`#`)


//Autocomplete time insertion
$ (function () {
    var timeList = [
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
    ];
    $(`#`).autocomplete( {
        source: timeList
    });
});

//Sortable interactions
$(function() {
    $(`#`).sortable ({
        placeholder:`ui-state-highligt`
    });
    $(`#`).disableSelection();
})