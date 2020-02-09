function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}
function isLatex(filename) {
    var ext = getExtension(filename);
    if (ext == 'tex') {
        return true;
    }
    else {
        return false;
    }
}
function failValidation(msg) {
    alert(msg); // just an alert for now but you can spice this up later
    return false;
}
 function openFile (event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function () {
        var text = reader.result;
        var main = document.getElementById('main');
        var latexDiv = document.getElementById('latexDiv');
        latexDiv.innerHTML = "<latex-js id=\"latex\" baseURL=\"https://cdn.jsdelivr.net/npm/latex.js@0.11.1/dist/\" ></latex-js>";
        var latex = document.getElementById('latex');
        latex.innerText = text;
        console.log(reader.result.substring(0,300));
    };
    reader.readAsText(input.files[0]);
};
function onSubmit() {
    var file = $('#file');
    if (!isLatex(file.val())) {
        return failValidation('please select a valid latex file');
    }
    else {

    }
}