export async function sendForm(formData, URL) {

    let response = await fetch(URL, {
        method: 'POST',
        body: formData,
    });
    let result = await response.json();

    return result;

}