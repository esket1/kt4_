function openPage(pageName) {
            var pages = document.querySelectorAll('.page');
            for (var i = 0; i < pages.length; i++) {
                pages[i].classList.remove('page--active');
            }

            var links = document.querySelectorAll('.header__link');
            for (var j = 0; j < links.length; j++) {
                links[j].classList.remove('header__link--active');
            }

            document.getElementById('page-' + pageName).classList.add('page--active');
            document.getElementById('link-' + pageName).classList.add('header__link--active');
            window.scrollTo(0, 0);
        }