(() => {
  const $tabs = document.querySelector('.tabs');
  const render = tabData => {
    $tabs.innerHTML = `
      <nav>
      ${tabData
        .map(
          (data, index) => `
          <div class="tab" data-index="${index}">${data.title}</div>`
        )
        .join('')}
          <span class="glider" >
          </span>
        </nav>
         ${tabData
           .map((data, index) => `<div class="tab-content ${index === 0 ? 'active' : ''}">${data.content}</div>`)
           .join('')}
        `;
  };

//const $tabs = document.querySelector('.tabs');

//const render = () => {
  //$tabs.innerHTML = `
  //<nav>
    //${state.tabsData.map((data, index) => `<div class="tab" data-index="${index}">${data.title}</div>`).join('')}
    //<span class="glider" style="left:${getComputedStyle($tabs).getPropertyValue('--tab-width') * +state.activeTabId}px" >
    //</span>
  //</nav>
  // ${state.tabsData.map((data, index) => `<div class="tab-content ${index === state.activeTabId ? 'active' : ''}">${data.content}</div>`).join('')}
  //`;
//};
  const fetchTabsData = () =>
    new Promise(resolve => {
      setTimeout(
        () =>
          resolve([
            {
              title: 'HTML',
              content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`,
            },
            {
              title: 'CSS',
              content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`,
            },
            {
              title: 'JavaScript',
              content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`,
            },
          ]),
        1000
      );
    }).then(response => {
      $tabs.style.setProperty('--tabs-length', response.length);

      render(response);

      document.querySelector('.spinner').style.display = 'none';
0    });

  window.addEventListener('DOMContentLoaded', fetchTabsData);

  $tabs.addEventListener('click', e => {
    if (e.target.classList.contains('tab')) {
      const { index } = e.target.dataset;

      document.querySelectorAll('.tab-content').forEach((data, dataIndex) => {
        data.classList.toggle('active', dataIndex === +index);
      });

$tabs.addEventListener('click', e => {
  if (e.target.classList.contains('tab')) {
    const { index } = e.target.dataset;
    state.activeTabId = +index;
    document.querySelectorAll('.tab-content').forEach((data, index) => {      
      data.classList.toggle('active',index===state.activeTabId);
    })

    // document.querySelector('.glider').style.left = `${getComputedStyle($tabs).getPropertyValue('--tab-width') *index}px`
    document.querySelector('.glider').style.transform = `translate3D(${100*index}%,0,0)`

  }
})
})()
//      document.querySelector('.glider').style.transform = `translate3D(${100 * index}%,0,0)`;
  //  }
//  });
//})();
// 정보라고 다 스테이트가 아니고 변하는 것이 상태
// left 는 리플로우를 일으킴 translate 를 쓰는 것이 좋다. 3D를 쓸것 gpu를 쓰면 애니메이션이 부드럽고 컴퓨터가 스트레스를 덜 받음
// TODO: async? 템플릿이긴해....
