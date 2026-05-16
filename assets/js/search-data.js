// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-recorded-talks",
          title: "recorded talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV Updated 5/16/26",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-geoff-penington-and-i-have-been-awarded-second-prize-in-the-2025-gravity-research-foundation-essay-contest-for-our-paper-on-quantum-teleportation-into-black-holes-our-work-explored-the-deep-relationship-between-information-and-energy-in-quantum-black-holes",
          title: 'Geoff Penington and I have been awarded second prize in the 2025 Gravity...',
          description: "",
          section: "News",},{id: "news-hyaline-chen-a-princeton-undergraduate-physics-student-i-had-the-pleasure-of-advising-has-won-the-pacm-best-research-project-award-for-his-work-that-culminated-in-our-paper-on-fine-details-of-quantum-chaos-congratulations-hyaline",
          title: 'Hyaline Chen, a Princeton undergraduate physics student I had the pleasure of advising,...',
          description: "",
          section: "News",},{id: "news-new-paper-on-arxiv-absolute-entropy-and-the-observer-s-no-boundary-state-w-andreas-blommaert-and-erez-urbach-we-investigate-hartle-and-hawking-s-no-boundary-proposal-for-observers-in-closed-universes-finding-that-it-is-the-universal-maximum-entropy-state-which-realizes-a-recent-conjecture-of-edward-witten",
          title: '🚨 New paper on arXiv: Absolute Entropy and the Observer’s No-Boundary State w/...',
          description: "",
          section: "News",},{id: "news-a-very-brief-glimpse-into-my-current-headspace-has-just-been-released-by-the-ias-viewable-here",
          title: 'A very brief glimpse into my current headspace has just been released by...',
          description: "",
          section: "News",},{id: "news-my-paper-with-vladimir-narovlansky-and-nikita-sopenko-on-optimal-bounds-for-entanglement-at-long-distances-has-been-published-physical-review-letters-there-are-limits-to-how-spooky-action-can-be-at-a-distance",
          title: 'My paper with Vladimir Narovlansky and Nikita Sopenko on optimal bounds for entanglement...',
          description: "",
          section: "News",},{id: "news-new-paper-on-arxiv-stringy-algebras-stretched-horizons-and-quantum-connected-wormholes-w-aidan-herderschee-we-studied-how-the-non-locality-of-strings-in-string-theory-leads-to-different-regions-of-spacetime-not-being-independent-this-led-us-to-understand-precise-notions-of-stretched-horizons-and-intrinsically-stringy-er-epr",
          title: '🚨 New paper on arXiv: Stringy algebras, stretched horizons, and quantum-connected wormholes w/...',
          description: "",
          section: "News",},{id: "news-new-paper-on-arxiv-emergent-mixed-states-for-baby-universes-and-black-holes-w-edward-witten-we-explored-the-fate-of-quantum-states-in-the-semiclassical-limit-of-the-ads-cft-correspondence-focusing-on-cases-where-the-gravitational-side-involves-black-holes-or-baby-universes-this-resolved-an-interesting-puzzle-posed-by-stefano-antonini-and-pratik-rath-on-the-nature-of-closed-universes-in-ads-cft",
          title: '🚨 New paper on arXiv: Emergent Mixed States for Baby Universes and Black...',
          description: "",
          section: "News",},{id: "news-new-paper-on-arxiv-analytically-continuing-the-randomized-measurement-toolbox-w-akash-vijay-ayush-raj-benoît-vermersch-andreas-elben-and-laimei-nie-we-develop-a-framework-for-extracting-non-polynomial-analytic-functions-of-density-matrices-in-randomized-measurement-experiments-by-a-method-of-analytical-continuation-and-demonstrate-its-application-to-estimating-von-neumann-entanglement-entropy-from-experimental-rényi-data",
          title: '🚨 New paper on arXiv: Analytically Continuing the Randomized Measurement Toolbox w/ Akash...',
          description: "",
          section: "News",},{id: "news-new-paper-on-arxiv-generalized-entropy-is-von-neumann-entropy-ii-the-complete-symmetry-group-and-edge-modes-w-marc-klinger-and-gautam-satishchandran-we-show-that-gravitational-backreaction-perturbs-the-horizon-area-in-an-angle-dependent-way-encoded-in-edge-modes-related-to-an-infinite-dimensional-boost-supertranslation-symmetry-the-resulting-algebra-of-observables-is-type-ii-and-the-entropy-of-any-semiclassical-state-is-the-generalized-entropy-with-an-additional-edge-mode-contribution",
          title: '🚨 New paper on arXiv: Generalized Entropy is von Neumann Entropy II: The...',
          description: "",
          section: "News",},{id: "news-new-paper-on-arxiv-wormholes-and-averaging-over-n-w-edward-witten-we-introduce-mellin-averaging-to-define-an-asymptotic-average-over-n-and-argue-it-may-suffice-to-reproduce-the-apparent-randomness-seen-in-wormhole-physics-we-test-this-against-the-spectral-form-factor-in-the-double-cone-regime-and-describe-toy-models-of-analytic-continuation-in-n",
          title: 'New paper on arXiv: Wormholes and Averaging over N w/ Edward Witten We...',
          description: "",
          section: "News",},{id: "pages-page-not-found",
          title: 'Page not found',
          description: "Looks like there has been a mistake. Nothing exists here.",
          section: "Pages",handler: () => {
              window.location.href = "/404.html";
            },},{id: "pages-about",
          title: 'about',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/";
            },},{id: "pages-cv",
          title: 'cv',
          description: "CV Updated 5/16/26",
          section: "Pages",handler: () => {
              window.location.href = "/cv/";
            },},{id: "pages-news",
          title: 'news',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/news/";
            },},{id: "pages-publications",
          title: 'publications',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/publications/";
            },},{id: "pages-recorded-talks",
          title: 'recorded talks',
          description: "",
          section: "Pages",handler: () => {
              window.location.href = "/talks/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%6B%75%64%6C%65%72%66%6C%61%6D@%69%61%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1626495", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Nj124O8AAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
