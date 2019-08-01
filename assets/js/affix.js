
!function ($) {
    $(function () {
        var $window = $(window),
            $body = $(document.body),
            $sideBar = $('.bn-sidebar'),
            navHeight = $('.navbar').outerHeight(true) + 10;

        $body.scrollspy({
            target: '.bn-sidebar',
            offset: navHeight
        })

        $window.on('load', function () {
            $body.scrollspy('refresh')
        })

        $('.bn-sidebar [href="#"]').click(function (e) {
            e.preventDefault()
        })

        // back to top
        setTimeout(function () {
            $sideBar.affix({
                offset: {
                    top: function () {
                        var offsetTop = $sideBar.offset().top
                        var sideBarMargin = parseInt($sideBar.children(0).css('margin-top'), 10)
                        var navOuterHeight = $('.bn-header').height()

                        return (this.top = offsetTop - navOuterHeight - sideBarMargin)
                    },
                    bottom: function () {
                        return (this.bottom = $('.bn-footer').outerHeight(true))
                    }
                }
            })
        }, 100)

        $sideBar.width($sideBar.parent().width());

        $window.resize(function () {
            $sideBar.width($sideBar.parent().width());
        });
    })
}(window.jQuery)
