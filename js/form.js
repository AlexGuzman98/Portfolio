const contactForm = document.querySelector('.contact__form');
let name = document.getElementById('form-name'),
company = document.getElementById('form-company'),
message = document.getElementById('form-message'),
email = document.getElementById('form-email')
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = {
        name: name.value,
        email: email.value,
        message: message.value,
        company: company.value
    }
  console.log(formData)

  function createUser(formData) {
    fetch('https://form-port.herokuapp.com/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data)=>{
    console.log(data)
      });
  }
    createUser(formData);
    alert('Mail send');
});

