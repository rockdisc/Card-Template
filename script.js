let cardDisplay = document.getElementById('letter');
function card() {
    let tag = document.getElementById('tag').value
    let afn = document.getElementById('AFN').value
    let aln = document.getElementById('ALN').value
    let aa = document.getElementById('AA').value
    let title = document.getElementById('title').value
    let year = document.getElementById('year').value
    let link = document.getElementById('link').value
    let text = document.getElementById('text').value

    cardDisplay.innerHTML = `
    <h1>${tag}</h1>  
    <h2>${afn} ${aln}, ${year}</h2>
    <h3>${aa}, ${title} (${link})</h3>
    <h4>${text}</h4>
    `
}
