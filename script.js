const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const boxShadow = button.style.boxShadow;

        const dummyTextArea = document.createElement('textarea');
        dummyTextArea.value = boxShadow;

        document.body.appendChild(dummyTextArea);
        dummyTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(dummyTextArea);

        alert('Box shadow CSS copied to clipboard!');
    });
});
