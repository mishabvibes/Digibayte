import { navigation, services, insights, statistics, aboutText, company, socials } from './content.js';
import { createPages } from './pages.js';
import { fullServices } from './inner-content.js';

const image = (file, alt = '', cls = '', eager = false) => `<img src="./assets/images/${file}" alt="${alt}" class="${cls}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
const arrow = '<span class="button-arrow" aria-hidden="true">↗</span>';
const button = (text, href = './contact.html') => `<a class="pill-button" href="${href}"><span>${text}</span>${arrow}</a>`;
const eyebrow = text => `<p class="eyebrow">${text}</p>`;
const logo = '<span class="wordmark">DigiBayt<span class="brand-dot" aria-hidden="true"></span></span>';
const route = location.pathname.split('/').pop().replace(/\.(html|php)$/, '') || 'index';
const current = route === 'services' ? 'service' : route;

function header() {
  return `<header class="site-header"><a class="brand" href="./" aria-label="DigiBayt home">${logo}</a>
    <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="navigation"><span></span><span></span><span></span></button>
    <nav id="navigation" aria-label="Main navigation">${navigation.map(([label, href]) => `<a href="${href}" ${((href === './' && current === 'index') || href.includes(current + '.')) ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
    <div class="header-cta">${button("Let's Work Together")}</div></header>`;
}

function hero() {
  return `<section class="hero" aria-labelledby="hero-heading"><div class="hero-copy panel">
    <div>${eyebrow('Welcome To DigiBayt')}<h1 id="hero-heading">Design & Technology for <span>Your Next Chapter</span></h1></div>
    <div class="hero-bottom"><div class="hero-description"><p>Websites, apps, cloud infrastructure and automation. DigiBayt brings design and engineering together to help your business grow.</p>${button('Book A Consultation')}</div>
    <a class="project-circle" href="./projects.html" aria-label="Start your project">${image('project-circle-gold.svg', '', '', true)}</a></div></div>
    <div class="hero-photo">${image('../digibayt/modern-tech-office.png', 'DigiBayt collaboration space', '', true)}
    <div class="client-card"><div class="avatars">${['photo-1534528741775-53994a69daeb.jpg','photo-1507003211169-0a1dd7228f2d.jpg','photo-1494790108377-be9c29b29330.jpg'].map(f=>image('../digibayt/'+f)).join('')}<span><b data-count="50">50</b>+</span></div><h3>Trusted by 50+ Clients Across India, UAE & Beyond</h3></div></div></section>`;
}

function about() {
  return `<section class="about section container" id="about"><div class="about-layout">
    <div class="experience"><div class="experience-number"><span data-count="8">8</span>+</div><p>Years of Excellence</p><span class="tag tag-one">Innovation</span><span class="tag tag-two">Digital Growth</span></div>
    <div class="about-copy reveal">${eyebrow('About Us')}<h2>Where technology ${image('../digibayt/modern-mobile-apps-for-buisness.webp')} meets strategic innovation ${image('../digibayt/Abraz_long-scroll-Macbook-Mockup.webp')}</h2><p>${aboutText}</p><div class="about-signature">${button('Explore Our Journey', './about.html')}<div><h3>Team DigiBayt</h3><p>Innovators & Developers</p></div></div></div></div>
    <div class="statistics">${statistics.map(([number, suffix, label], i) => `<div class="stat">${image(`icon-about-counter-${i+1}-metal.svg`)}<div><h2><span data-count="${number}">${number}</span>${suffix}</h2><p>${label}</p></div></div>`).join('')}</div></section>`;
}

function serviceSection() {
  return `<section class="services section surface" id="services"><div class="container"><div class="section-heading reveal">${eyebrow('Our Services')}<h2>Tailored Tech Solutions For Your Business</h2></div><div class="service-grid">${services.map(service => `<article class="service-card panel reveal"><div class="service-copy"><div class="service-title"><h3><a href="./service-single.html?service=${service.slug}">${service.title}</a></h3><a class="round-link" href="./service-single.html?service=${service.slug}" aria-label="Explore ${service.title}">${image('arrow-white.svg')}</a></div><p>${service.description}</p></div><a href="./service-single.html?service=${service.slug}" tabindex="-1" aria-hidden="true">${image(service.image, '', 'service-art')}</a></article>`).join('')}</div><p class="section-footer"><span>Ready?</span> Let’s scale your business together. <a href="./contact.html">Get Free Quote</a></p></div></section>`;
}

function whyChoose() {
  return `<section class="why section container"><div class="why-frame"><div class="why-copy reveal">${eyebrow('Why Choose DigiBayt')}<h2>Reasons To Trust Our Technical Expertise</h2><div class="why-body">${image('../digibayt/modern-tech-office.png', 'Creative collaboration', 'why-portrait')}<div><p>From UI/UX design to cloud deployment, DigiBayt combines modern engineering with practical workflow automation.</p><ul><li>Custom solutions tailored to business goals</li><li>Established in 2016. Rebranded in 2024.</li><li>Long-term support and transparent communication</li></ul></div></div></div><div class="why-art panel reveal">${image('../digibayt/alifsolutions-it-company-website.webp', 'Digital platform showcase from DigiBayt')}</div></div></section>`;
}

function insightSection() {
  return `<section class="insights section surface"><div class="container"><div class="section-heading reveal">${eyebrow('How We Build')}<h2>Design, Engineer, Connect</h2></div><div class="insight-grid">${insights.map(([title, text, art], i) => `<article class="insight-card panel reveal ${i === 1 ? 'highlighted' : ''}"><h3>${title}</h3><p>${text}</p>${image(art, title)}</article>`).join('')}</div></div></section>`;
}

function footer() {
  return `<footer class="footer surface" id="contact"><div class="container"><div class="footer-heading"><h2><a href="./contact.html">Let's Work Together</a></h2><div class="socials" aria-label="Social networks">${socials.map(([label,url,icon])=>`<a class="fa-brand" href="${url}" aria-label="${label}" target="_blank" rel="noopener noreferrer">${icon}</a>`).join('')}</div></div>
    <div class="footer-grid"><div class="footer-about"><a class="brand" href="./">${logo}</a><p>Design, development, cloud and automation for businesses in India, the UAE and beyond.</p></div><div><h3>Quick Links</h3><ul>${navigation.map(([label,href]) => `<li><a href="${href}">${label}</a></li>`).join('')}</ul></div><div><h3>Our Services</h3><ul>${[0,1,2,4,3].map(i => `<li><a href="./service-single.html?service=${fullServices[i].slug}">${fullServices[i].title}</a></li>`).join('')}</ul></div><div class="contact-details"><h3>Get in Touch</h3><div class="contact-item"><span>${image('icon-headphone-black.svg')}</span><p><a href="tel:+919074433100">+91 9074433100</a><br><a href="mailto:hello@digibayt.com">hello@digibayt.com</a></p></div><div class="contact-item"><span>${image('icon-location-black.svg')}</span><p><strong>India HQ</strong><br>${company.india}<br><br><strong>UAE Office</strong><br>${company.uae}<br><a href="tel:${company.uaeTel}">${company.uaePhone}</a></p></div></div></div></div><div class="copyright">Copyright © 2026 DigiBayt. All Rights Reserved.</div></footer>`;
}

function floatingContact() {
  return `<aside class="floating-contact" aria-label="Contact DigiBayt"><a class="float-button whatsapp" href="https://wa.me/919074433100" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><span class="contact-glyph fa-brand" aria-hidden="true">&#xf232;</span><span class="float-label">WhatsApp</span></a><a class="float-button telephone" href="tel:+919074433100" aria-label="Call Us"><span class="contact-glyph fa-solid" aria-hidden="true">&#xf095;</span><span class="float-label">Call Now</span></a></aside>`;
}

const pageHeading = title => `<section class="page-heading surface"><h1>${title}</h1><p><a href="./">Home</a><span aria-hidden="true"> / </span>${title}</p></section>`;
function detailPage() {
  const params = new URLSearchParams(location.search);
  const slug = params.get('service');
  const category = params.has('category') ? fullServices[Number(params.get('category'))] : null;
  const service = category || fullServices.find(s=>s.slug===slug) || fullServices[0];
  return `${pageHeading(service.title)}<section class="section container detail-page"><div>${image(service.image,service.title)}</div><div>${eyebrow('DigiBayt Expertise')}<h2>${service.title}</h2><p>${service.description}</p><ul class="sparkle-list">${service.features.map(f=>`<li>${f}</li>`).join('')}</ul>${button('Discuss Your Project','./contact.html?service='+encodeURIComponent(service.title))}<p class="detail-support">From discovery to launch, our team helps you choose an approach suited to your business. <a href="./service.html">Explore all services ↗</a></p></div></section>`;
}
const innerPages = createPages({image,button,eyebrow,insightSection});
const pages = { index:()=>hero()+about()+serviceSection()+whyChoose()+insightSection(), about:innerPages.aboutPage, service:innerPages.servicesPage, projects:innerPages.projectsPage, contact:innerPages.contactPage, pricing:innerPages.pricingPage, 'service-single':detailPage };
document.body.classList.toggle('pricing-page',current==='pricing');
document.querySelector('#app').innerHTML = header()+`<main id="main">${(pages[current] || (()=>pageHeading('Page Not Found')+`<section class="section container">${button('Back To Home','./')}</section>`))()}</main>`+footer()+floatingContact();
if (current !== 'index') document.title = `${({about:'About Us',service:'Services',projects:'Projects',contact:'Contact Us',pricing:'Request a Quote','service-single':'Our Services'})[current] || 'Page Not Found'} | DigiBayt`;

if (current === 'contact') {
  const selected = new URLSearchParams(location.search).get('service');
  if (fullServices.some(s=>s.title===selected)) document.querySelector('select[name="service"]').value=selected;
}
const menu = document.querySelector('.menu-toggle');
function setMenu(open) { menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open?'Close menu':'Open menu'); document.querySelector('.site-header').classList.toggle('menu-open',open); }
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && menu.getAttribute('aria-expanded')==='true'){setMenu(false);menu.focus();} });
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))setMenu(false);});

const motion = matchMedia('(prefers-reduced-motion: reduce)');
const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  entry.target.classList.add('is-visible');observer.unobserve(entry.target);
}),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>{if(!motion.matches)el.classList.add('will-reveal');observer.observe(el);});
const counters = new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(!entry.isIntersecting)return;
  counters.unobserve(entry.target);
  const target=Number(entry.target.dataset.count);
  if(motion.matches)return;
  let start;
  function tick(time){start??=time;const t=Math.min((time-start)/1400,1);entry.target.textContent=Math.round(target*(1-Math.pow(1-t,3)));if(t<1)requestAnimationFrame(tick);}
  requestAnimationFrame(tick);
}),{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=>counters.observe(el));
motion.addEventListener('change',()=>{if(motion.matches)document.querySelectorAll('.will-reveal').forEach(el=>el.classList.add('is-visible'));});

document.querySelector('.contact-form')?.addEventListener('submit',event=>{
  event.preventDefault();const data=new FormData(event.currentTarget);
  const subject='DigiBayt project consultation enquiry';
  const body=`Name: ${data.get('fname')} ${data.get('lname')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nPreferred contact: ${data.get('preferred')}\nService: ${data.get('service')}\n\n${data.get('message')}`;
  location.href=`mailto:hello@digibayt.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('.form-status').textContent='Email draft prepared. If your email app did not open, email hello@digibayt.com directly. Your enquiry has not been sent by this website.';
});
