module.exports = function bonusGeneratorProvider() {
    var _length = 5;

    this.getLength = function () {
        return _length;
    }

    this.setLength = function (length) {
        _length = length;
    }
    //Elemento obrigatório em um provider
    this.$get = function () {
        return{
            generator: function () {
                var bonus = '';
                for (var i = _length; i > 0; --i) {
                    bonus += Math.floor(Math.random() * 10);
                }
                
                return bonus;
            }
        }
    }
};
