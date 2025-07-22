fetch('portfolio.json')
    .then(res => res.json())
    .then(data => {
        const profileContainer = document.getElementById('profileContainer');
        if (!profileContainer) return;

        let html = `
    <div class="profile-header">
      <h1>${data.name}</h1>
      <h2>${data.title}</h2>
      <hr />
      <div class="contact-line">
        <a href="mailto:${data.contact.email}">${data.contact.email}</a> |
        ${data.contact.location} |
        <a href="${data.contact.github}">GitHub</a> |
        <a href="${data.contact.linkedin}">LinkedIn</a>
      </div>
    </div>

    <section class="section">
      <h4 class="section-title" id="summary">CAREER SUMMARY</h4>
      <div class="section-content">
        ${data.summary.map(para => `<p>${para}</p>`).join('')}
      </div>
    </section>

    <section class="section">
        <h4 class="section-title" id="education">EDUCATION</h4>
        ${data.education.map(edu => `
            <p><b>${edu.degree}</b></p>
            <h5 class="subsection-title">Courses</h5>
            <ul class="section-list">
            ${edu.courses.map(c => `<li>${c}</li>`).join('')}
            </ul>
        `).join('')}
    </section>

    <section class="section">
      <h4 class="section-title" id="skills">TECHNICAL SKILLS</h4>
      <ul class="section-list">
        ${data.skills.map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    </section>

    <section class="section">
      <h4 class="section-title" id="experience">PROFESSIONAL EXPERIENCE</h4>
      <div class="section-content">
        ${data.experience.map(exp => `
          <div class="card">
            <h5>${exp.role}</h5>
            <p><b>Tech Stack:</b> ${exp.techStack}</p>
            <ul>${exp.details.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="section">
      <h4 class="section-title" id="coverletter">COVER LETTER</h4>
      <div class="highlight-box">
        ${data.coverLetter.map(para => `<p>${para}</p>`).join('')}
      </div>
    </section>

    <section class="section">
      <h4 class="section-title" id="projects">PROJECTS</h4>
      <div class="card-container">
        ${data.projects.map(p => `
          <div class="card">
            <h5>${p.name}</h5>
            <p><b>Tech:</b> ${p.tech}</p>
            <ul>${p.details.map(d => `<li>${d}</li>`).join('')}</ul>
          </div>
        `).join('')}
      </div>
    </section>

    <section class="section">
        <h4 class="section-title" id="achievement">${data.achievements.situational.title}</h4>
        <div class="section-content">
            <p><b>Situation:</b> ${data.achievements.situational.situation}</p>
            <p><b>Action:</b> ${data.achievements.situational.action}</p>
            <p><b>Result:</b> ${data.achievements.situational.result}</p>
        </div>
        <h4 class="section-title">Awards and Recognition</h4>
        <div class="section-content">
            <ul>
                ${data.achievements.awards.lines.map(line => `<li>${line}</li>`).join('')}
            </ul>
        </div>
    </section>

    <section class="section">
      <h4 class="section-title" id="testimonial">TESTIMONIALS</h4>
      <div class="card-container">
        ${data.testimonials.map(t => `<div class="card"><p>${t}</p></div>`).join('')}
      </div>
    </section>

    <section class="section">
      <h4 class="section-title" id="reference">REFERENCES</h4>
      <ul class="section-list">
        ${data.references.map(ref => `
          <li>
            <b>${ref.name}</b>, ${ref.role}<br>
            Email: ${ref.email}<br>
            Phone: ${ref.phone}
          </li>
        `).join('')}
      </ul>
    </section>
    `;

        profileContainer.innerHTML = html;
    });
