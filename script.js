
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  // Create hamburger button
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Toggle menu');
  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  
  // Insert hamburger into navbar
  const navbar = document.querySelector('.navbar');
  const navCenter = document.querySelector('.nav-center');
  
  if (navbar && navCenter) {
    navbar.insertBefore(hamburger, navCenter);
    
    // Toggle menu
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      navCenter.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navCenter.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navCenter.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

  const elements = document.querySelectorAll('.scroll-animate');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));

  // Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
  // Create the button dynamically
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'back-to-top';
  backToTopBtn.className = 'back-to-top-btn';
  backToTopBtn.setAttribute('aria-label', 'Back to Top');
  backToTopBtn.innerHTML = '↑';
  document.body.appendChild(backToTopBtn);

  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

// smooth scroll
backToTopBtn.addEventListener('click', () => {
  const scrollStep = -window.scrollY / (500 / 15);
  
  const scrollInterval = setInterval(() => {
    if (window.scrollY !== 0) {
      window.scrollBy(0, scrollStep);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
});

});

// Featured Blog Posts on Homepage
document.addEventListener('DOMContentLoaded', () => {
  const featuredContainer = document.getElementById('featured-posts');
  
  if (featuredContainer) {
    const featuredPosts = [
      {
        title: "Gender Inclusion, Gender Exclusion, and Safety Delusions in Mexican Ska Festivals",
        excerpt: "Presented at the Society for Ethnomusicology Annual Meeting. Examining gendered spaces in Mexican ska festivals through fieldwork in Mexico City and Tijuana.",
        image: "images/sem2024.webp",
        url: "blog-one.html",
        date: "2024"
      },
      {
        title: "Looking into Florence B. Price's 'Five Folksongs in Counterpoint'",
        excerpt: "Analyzing Price's compositional identity and her intersectionality as a southern-born, conservatory-trained African American woman through her string quartet.",
        image: "images/blog2.webp",
        url: "blog-two.html",
        date: "2024"
      },
      {
        title: "A Spoonful of Levity Helps the Racism Go Down",
        excerpt: "Investigating coon songs, a comic genre popularized by blackface minstrelsy, and how these songs furthered racist stereotypes and legislation.",
        image: "images/coon-songs.webp",
        url: "blog-three.html",
        date: "2021"
      }
    ];
    
    featuredPosts.forEach(post => {
      const article = document.createElement('article');
      article.className = 'featured-post';
      article.innerHTML = `
        <a href="${post.url}">
          <img src="${post.image}" alt="${post.title}" loading="lazy">
          <div class="post-content">
            <span class="post-date">${post.date}</span>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
          </div>
        </a>
      `;
      featuredContainer.appendChild(article);
    });
  }
});