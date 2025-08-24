import React, { useEffect, useRef } from 'react';

function Giscus({ repo, repoId, category, categoryId, mapping = 'pathname' }) {
  const rootElm = useRef(null);
  const isGiscusLoaded = useRef(false);

  useEffect(() => {
    if (!rootElm.current || isGiscusLoaded.current) return;

    const storedIsDarkMode = localStorage.getItem('isDarkMode');
    const theme = JSON.parse(storedIsDarkMode) ? 'dark' : 'light';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '1');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('data-loading', 'lazy');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    rootElm.current.appendChild(script);
    isGiscusLoaded.current = true;

    // Theme change listener
    const handleThemeChange = () => {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) return;

      const newIsDarkMode = localStorage.getItem('isDarkMode');
      const newTheme = JSON.parse(newIsDarkMode) ? 'dark' : 'light';

      iframe.contentWindow.postMessage(
        { giscus: { setConfig: { theme: newTheme } } },
        'https://giscus.app',
      );
    };

    // Listen for theme changes
    window.addEventListener('storage', handleThemeChange);

    // Also listen for custom theme change event if your theme switch dispatches one
    window.addEventListener('themeChange', handleThemeChange);

    return () => {
      window.removeEventListener('storage', handleThemeChange);
      window.removeEventListener('themeChange', handleThemeChange);
    };
  }, [repo, repoId, category, categoryId, mapping]);

  return <div className="giscus" ref={rootElm} />;
}

export default Giscus;
