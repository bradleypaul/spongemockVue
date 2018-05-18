(function () {
    document.addEventListener('DOMContentLoaded', function () {
        let app = new Vue({
            el: '#app',
            data: {
                mockText: ''
            },
            computed: {
                mockedText: {
                    get: function () {
                        return getMock(this.mockText);
                    }
                }
            },
            methods: {
                regenerate: function () {
                    this.mockText = new String(this.mockText);
                }
            }
        });
    }, false);

    function getMock (text) {
        return _.map(text, char => {          
            let getRandom = () => Math.floor(Math.random() * 2);
            return getRandom() ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    }
})();