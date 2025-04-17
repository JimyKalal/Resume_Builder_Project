document.getElementById('resume-form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const summary = document.getElementById('summary').value.trim();
    const skillsInput = document.getElementById('skills').value.trim();
  
    const skills = skillsInput.split(',').map(skill => skill.trim()).filter(skill => skill !== '');
  
    const resumeHTML = `
      <div class="generated-resume">
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Skills</h3>
        <ul>
          ${skills.map(skill => <li>${skill}</li>).join('')}
        </ul>
      </div>
    `;
  
    document.getElementById('resume-output').innerHTML = resumeHTML;
  });