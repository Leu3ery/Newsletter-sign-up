function handleSubmit(event) {
    event.preventDefault();

    const element = event.target.querySelector('input');
    console.log(element.value);
    // only for testing
    if (element.value.includes('@') && element.value.includes('.')) {
        document.getElementById('fail').style.display = 'none';
        document.getElementById('input').classList.remove('input-failed');
        element.value = '';
        
    } else {
        document.getElementById('fail').style.display = 'block';
        document.getElementById('input').classList.add('input-failed');
    }

}