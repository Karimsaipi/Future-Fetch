import '../stylesForm/mainForm.scss';

const form = document.querySelector('form');
const resultDiv = document.getElementById('result') as HTMLElement;
const buttonReturn = document.getElementById('closeBtn');

buttonReturn?.addEventListener('click', () => {
  window.location.href = 'http://localhost:3000';
});

form?.addEventListener('submit', async function(event) {
  event.preventDefault(); 

  
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = {
    name: form.elements['name'].value.trim(),
    email: form.elements['email'].value.trim(),
    message: form.elements['message'].value.trim()
  };

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }

    const data = await response.json();

    resultDiv.style.display = 'block';
    resultDiv.textContent = 'Ответ сервера:\n' + JSON.stringify(data, null, 2);
     setTimeout(function() {
       resultDiv.style.display = 'none';
    }, 3000);

    form.reset();

  } catch (error) {
    resultDiv.textContent = 'Ошибка при отправке:\n' + error.message;
    resultDiv.style.display = 'block';
    setTimeout(function() {
       resultDiv.style.display = 'none';
    }, 3000);
  }
});