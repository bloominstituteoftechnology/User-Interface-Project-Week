function tabbedBrowsing(components) {
  components.forEach(component => {
    // grab all the links
    const tabLinks = component.querySelectorAll('.tabs__link');
    const tabContents = component.querySelectorAll('.tabs__content');

    // set up eventListeners on the links
    tabLinks.forEach(link => {
      link.addEventListener('click', () => {
        store.dispatch({
          type: 'UPDATE_ACTIVE',
          activeTabNumber: Number(link.dataset.tab)
        });
      });
    });

    // subscribe to the store
    store.subscribe(state => {
      const { activeTab } = state;

      tabLinks.forEach(link => {
        console.log();
        if (link.dataset.tab == activeTab) {
          link.classList.add('tabs__link--active-tab');
        } else {
          link.classList.remove('tabs__link--active-tab');
        }
      });

      tabContents.forEach(content => {
        if (content.dataset.tab == activeTab) {
          content.classList.add('tabs__content--active-tab');
        } else {
          content.classList.remove('tabs__content--active-tab');
        }
      });
    });
  });
}

tabbedBrowsing(document.querySelectorAll('.tabs'));
