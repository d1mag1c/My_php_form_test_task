let inputs = document.querySelectorAll('input');

inputs.forEach(function (e) {
    e.addEventListener('keyup', function () {

        this.value = this.value.replace(/\s+/gi, '')
    })
})