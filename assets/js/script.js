'use strict';
(() => {
  const profile = window.PROFILE;
  if (!profile) return;
  const dictionary = {
    zh: {skip:'跳转到内容',showContacts:'联系方式',email:'邮箱',affiliation:'机构',location:'所在地',about:'关于',aboutMe:'关于我',resume:'履历',publications:'论文',research:'研究',contact:'联系',greeting:'你好，我是 Meng Wu。',explorePapers:'查看论文',getInTouch:'与我联系',interests:'研究方向',selectedWork:'精选研究',allPapers:'所有论文',footer:'保持好奇，持续探索。',education:'教育背景',experience:'研究与工作经历',honors:'荣誉与奖项',skills:'技能与工具',paperIntro:'探索生成模型的泛化能力与实际应用。* 表示共同贡献。',paperNote:'论文信息依据个人简历与公开论文页面整理。预印本未标注未经确认的录用状态。',researchIntro:'从理解生成模型，到让它们解决真实世界的问题。',contactHeading:'从一个好问题开始交流。',contactIntro:'欢迎交流生成式 AI、扩散模型，以及相关研究与合作。',writeMessage:'写一封邮件',mailNote:'填写后将打开你的邮件应用，由你确认发送。',yourName:'你的姓名',yourEmail:'你的邮箱',message:'想交流的内容',openMail:'打开邮件草稿',all:'全部',diffusion:'扩散模型',multimodal:'多模态生成',vision:'计算机视觉',agents:'多智能体',copied:'邮箱已复制。',copyFailed:'请选中并复制上方邮箱。',details:'查看研究详情',concept:'研究概念示意',close:'关闭',copyEmail:'复制邮箱',navigation:'主页栏目',paperFilters:'论文筛选',researchFilters:'研究筛选'},
    en: {skip:'Skip to content',showContacts:'Show contacts',email:'Email',affiliation:'Affiliation',location:'Location',about:'About',aboutMe:'About me',resume:'Resume',publications:'Publications',research:'Research',contact:'Contact',greeting:'Hi, I’m Meng Wu.',explorePapers:'Explore papers',getInTouch:'Get in touch',interests:'Research interests',selectedWork:'Selected work',allPapers:'All publications',footer:'Stay curious. Keep exploring.',education:'Education',experience:'Research & experience',honors:'Honors & awards',skills:'Tools of the trade',paperIntro:'Understanding generative models and bringing them into the real world. * denotes equal contribution.',paperNote:'Publication details are drawn from my CV and public paper records. Preprints do not imply a confirmed conference acceptance.',researchIntro:'From understanding generative models to solving real-world problems.',contactHeading:'Good conversations start with a question.',contactIntro:'Let’s talk about generative AI, diffusion models, and opportunities for research collaboration.',writeMessage:'Write a message',mailNote:'This opens a draft in your email app for you to review and send.',yourName:'Your name',yourEmail:'Your email',message:'What’s on your mind?',openMail:'Open email draft',all:'All',diffusion:'Diffusion models',multimodal:'Multimodal',vision:'Computer vision',agents:'Multi-agent',copied:'Email copied.',copyFailed:'Please select and copy the email address above.',details:'View research details',concept:'Conceptual illustration',close:'Close',copyEmail:'Copy email',navigation:'Main navigation',paperFilters:'Filter publications',researchFilters:'Filter research'}
  };
  let language = 'zh';
  try { const saved = localStorage.getItem('meng-wu-language'); if (dictionary[saved]) language = saved; } catch {}
  let paperFilter = 'all';
  let projectFilter = 'all';
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const tr = value => typeof value === 'object' && value !== null ? value[language] || value.en || value.zh || '' : value || '';
  const word = key => dictionary[language][key] || key;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icon = id => `<svg class="icon" aria-hidden="true"><use href="#icon-${id}"/></svg>`;
  const safeURL = value => { try { const url = new URL(value, location.href); return ['http:','https:'].includes(url.protocol) ? url.href : ''; } catch { return ''; } };
  const linksHTML = links => (links || []).map(link => { const url=safeURL(link.url); return url ? `<a class="paper-link" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(link.label)} ${icon('link')}</a>` : ''; }).join('');
  const authorsHTML = authors => escape(Array.isArray(authors) ? authors.join(', ') : authors).replace(/Meng Wu(\*)?/g, '<strong>Meng Wu$1</strong>');
  const paperHTML = (paper, compact=false) => `<section class="paper-card ${compact?'compact':''}"><div class="paper-meta"><span class="venue-badge">${escape(paper.venue)}</span>${paper.tag?`<span class="paper-tag ${paper.tag==='Spotlight'?'spotlight':''}">${escape(paper.tag)}</span>`:''}<span class="paper-year">${escape(paper.year)}</span></div><h3 class="h4 paper-title">${escape(paper.title)}</h3><p class="paper-authors">${authorsHTML(paper.authors)}</p><div class="paper-links">${linksHTML(paper.links)}</div></section>`;
  function renderTimeline(selector, items) {
    $(selector).innerHTML = (items || []).map(item => `<li class="timeline-item"><h4 class="h4 timeline-item-title">${escape(tr(item.title))}</h4><span>${escape(item.period)}</span><p class="timeline-text">${escape(tr(item.description))}</p>${item.bullets ? `<ul class="experience-bullets">${(tr(item.bullets)||[]).map(b=>`<li>${escape(b)}</li>`).join('')}</ul>`:''}</li>`).join('');
  }
  function renderFilters(selector, items, chosen, kind) {
    const categories=['all',...new Set(items.map(item=>item.category))];
    $(selector).innerHTML=categories.map(category=>`<button class="filter-chip ${chosen===category?'active':''}" aria-pressed="${chosen===category}" data-category="${escape(category)}">${escape(word(category))}</button>`).join('');
    $(selector).querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
      if(kind==='papers'){paperFilter=button.dataset.category;renderPapers();}else{projectFilter=button.dataset.category;renderProjects();}
      $(selector).querySelector(`[data-category="${button.dataset.category}"]`).focus({preventScroll:true});
    }));
  }
  function renderPapers() {
    renderFilters('[data-publication-filters]',profile.publications,paperFilter,'papers');
    $('[data-publication-list]').innerHTML=profile.publications.filter(p=>paperFilter==='all'||p.category===paperFilter).map(p=>paperHTML(p)).join('');
  }
  function renderProjects() {
    renderFilters('[data-project-filters]',profile.projects,projectFilter,'projects');
    $('[data-project-list]').innerHTML=profile.projects.filter(p=>projectFilter==='all'||p.category===projectFilter).map(project=>`<li class="project-item active"><button class="project-button" data-project="${escape(project.id)}" aria-label="${escape(tr(project.title))} — ${escape(word('details'))}"><figure class="project-img"><img src="${escape(project.image)}" alt="${escape(tr(project.title))} — ${escape(word('concept'))}" width="640" height="400" loading="lazy"><span class="project-hover">${icon('arrow')}</span></figure><h3 class="project-title">${escape(tr(project.title))}</h3><p class="project-category">${escape(tr(project.subtitle))}</p></button></li>`).join('');
    $('[data-project-list]').querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project)));
  }
  function openProject(id) {
    const project=profile.projects.find(p=>p.id===id);
    if(!project) return;
    $('[data-dialog-content]').innerHTML=`<img class="dialog-cover" src="${escape(project.image)}" alt="${escape(word('concept'))}" width="640" height="400"><p class="eyebrow">${escape(tr(project.subtitle))}</p><h2 class="h3" id="dialog-title">${escape(tr(project.title))}</h2><p class="dialog-description">${escape(tr(project.description))}</p><div class="paper-links">${linksHTML(project.links)}</div><p class="section-note">${escape(word('concept'))}</p>`;
    $('[data-project-dialog]').setAttribute('aria-labelledby','dialog-title');
    $('[data-project-dialog]').showModal();
  }
  function render() {
    document.documentElement.lang=language==='zh'?'zh-CN':'en';
    $$('[data-i18n]').forEach(node=>node.textContent=word(node.dataset.i18n));
    $('[data-name]').textContent=profile.name;
    $('.info-content .title').textContent=tr(profile.role);
    $$('[data-email]').forEach(link=>{link.textContent=profile.email;link.href=`mailto:${profile.email}`;});
    $('[data-bio]').innerHTML=tr(profile.bio).map(p=>`<p>${escape(p)}</p>`).join('');
    $('[data-interests]').innerHTML=profile.interests.map(interest=>`<li class="service-item"><div class="service-icon-box"><img src="./assets/images/${escape(interest.icon)}" alt="" width="40" height="40"></div><div class="service-content-box"><h4 class="h4 service-item-title">${escape(tr(interest.title))}</h4><p class="service-item-text">${escape(tr(interest.description))}</p></div></li>`).join('');
    const featured=profile.publications.filter(p=>p.tag==='Spotlight'||p.tag==='Poster').sort((a,b)=>(a.tag==='Spotlight'?-1:1)-(b.tag==='Spotlight'?-1:1)).slice(0,2);
    $('[data-featured]').innerHTML=featured.map(p=>paperHTML(p,true)).join('');
    renderTimeline('[data-education]',profile.education);
    renderTimeline('[data-experience]',profile.experience);
    $('[data-honors]').innerHTML=profile.honors.map(honor=>`<li>${escape(tr(honor))}</li>`).join('');
    $('[data-skills]').innerHTML=profile.skills.map(skill=>`<span>${escape(skill)}</span>`).join('');
    renderPapers();renderProjects();
    $('[data-language]').innerHTML=language==='zh'?'EN <span>/ 中文</span>':'中文 <span>/ EN</span>';
    $('[data-language]').setAttribute('aria-label',language==='zh'?'Switch to English':'切换为中文');
    $('[data-close-dialog]').setAttribute('aria-label',word('close'));
    $('[data-sidebar-btn]').setAttribute('aria-label',word('showContacts'));
    $('[data-copy-email]').setAttribute('aria-label',word('copyEmail'));
    $('.navbar').setAttribute('aria-label',word('navigation'));
    $('[data-publication-filters]').setAttribute('aria-label',word('paperFilters'));
    $('[data-project-filters]').setAttribute('aria-label',word('researchFilters'));
    $('.avatar-box img').alt=language==='zh'?'Meng Wu 的字母头像':'Meng Wu monogram';
    $('[data-copy-status]').textContent='';
    $('[data-year]').textContent=new Date().getFullYear();
  }
  function setPage(page, push=false, focus=false) {
    if(!$$('[data-page]').some(panel=>panel.dataset.page===page)) page='about';
    $$('[data-page]').forEach(panel=>{const active=panel.dataset.page===page;panel.classList.toggle('active',active);panel.hidden=!active;});
    $$('[data-nav-link]').forEach(button=>{const active=button.dataset.navLink===page;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
    if(push && location.hash!==`#${page}`) history.pushState(null,'',`#${page}`);
    window.scrollTo({top:0,behavior:'instant'});
    if(focus) $('#main-content').focus({preventScroll:true});
  }
  $$('[data-nav-link]').forEach((button,index,buttons)=>{
    button.addEventListener('click',()=>setPage(button.dataset.navLink,true));
    button.addEventListener('keydown',event=>{
      let next=index;
      if(event.key==='ArrowRight')next=(index+1)%buttons.length;
      else if(event.key==='ArrowLeft')next=(index-1+buttons.length)%buttons.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=buttons.length-1;
      else return;
      event.preventDefault();buttons[next].focus();setPage(buttons[next].dataset.navLink,true);
    });
  });
  $$('[data-go]').forEach(button=>button.addEventListener('click',()=>setPage(button.dataset.go,true,true)));
  addEventListener('popstate',()=>setPage(location.hash.slice(1)));
  addEventListener('hashchange',()=>{const page=location.hash.slice(1);if($$('[data-page]').some(panel=>panel.dataset.page===page))setPage(page);});
  $('.skip-link').addEventListener('click',event=>{event.preventDefault();$('#main-content').focus({preventScroll:false});});
  const desktop=matchMedia('(min-width: 1250px)');
  function syncSidebar(){const expanded=desktop.matches||$('[data-sidebar]').classList.contains('active');$('#sidebar-details').inert=!expanded;$('[data-sidebar-btn]').setAttribute('aria-expanded',String(expanded));}
  $('[data-sidebar-btn]').addEventListener('click',()=>{$('[data-sidebar]').classList.toggle('active');syncSidebar();});
  desktop.addEventListener('change',syncSidebar);
  $('[data-language]').addEventListener('click',()=>{language=language==='zh'?'en':'zh';try{localStorage.setItem('meng-wu-language',language);}catch{}render();});
  $('[data-close-dialog]').addEventListener('click',()=>$('[data-project-dialog]').close());
  $('[data-project-dialog]').addEventListener('click',event=>{if(event.target===$('[data-project-dialog]')){const r=event.target.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)event.target.close();}});
  $('[data-copy-email]').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(profile.email);$('[data-copy-status]').textContent=word('copied');}catch{$('[data-copy-status]').textContent=word('copyFailed');}});
  $('[data-form]').addEventListener('submit',event=>{
    event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;
    const data=new FormData(form);const subject=`Research inquiry from ${data.get('name')}`;
    const body=`${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`;
    location.href=`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  render();syncSidebar();setPage(location.hash.slice(1));
})();
