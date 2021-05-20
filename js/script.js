let $addBtn = $(`#addSkill`);
let $input = $(`.inputField`);
let $delBtn = $(`<button>`);
let $skills = $(`#skills`)

// Adds text from input field.
$($addBtn).on(`click`, function () {
    if ($($input).val().length > 1) {
        $($skills).append(
            `<div class="newSkill">
            <i class="fas fa-times"></i>
            <div class="skill">${$($input).val()}</div >
            </div > `)
        $($input).val(``)
    }
})
// Removes div when x is clicked. 
$($skills).on(`click`, function (e) {
    if (e.target.matches(`i`)) {
        $(e.target).parent().remove()
    }
})