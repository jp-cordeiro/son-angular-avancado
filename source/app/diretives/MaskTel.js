module.exports = function () {
    return {
        /**
         * Define qualq atributo que haverá a intereação, neste caso ngModel (o '-' não é utilizado)
         */
        require: "ngModel",
        /**
         * Executado depois do template ser compilado, podemos usar o link para interagir com o DOM
         */
        link: function (scope, element, attributes, ctrl) {
            //console.log(scope); variavel de escopo

            //console.log(element); variavel referente ao elemento que está sendo atribuido.

            //console.log(attributes); varaivael referente aos atributos do elemento atribuido.

            //Interação com o DOM através do scope
            // element.bind("keyup", function () {
            //     console.log(scope.formClient.telClient.$viewValue);
            // });

            //Interação com o DOM através do controller do Angular
            element.bind("keyup", function () {
                var _formatTel = function (value) {
                    if(value){
                        value = value.replace(/[^0-9]+/g, "");

                        if (value.length > 4 && value.length <= 10) {
                            value = "(" + value.substring(0, 2) + ") " + value.substring(2, 6) + "-" + value.substring(6, 10);
                        } else if (value.length > 4) {
                            value = "(" + value.substring(0, 2) + ") " + value.substring(2, 7) + "-" + value.substring(7, 11);
                        }

                        return value;
                    }
                };

                //console.log(ctrl.$viewValue);
                //Altera o valor do elemento
                ctrl.$setViewValue(_formatTel(ctrl.$viewValue));
                //Renderiza o valor definido
                ctrl.$render();
            });

            //Intercepta o valor do element e executa a função
            ctrl.$parsers.push(function (value) {

                if (value.length > 12) {
                    value = value.replace(/[^0-9]+/g, "");
                }

                return value;
            });

            // element.changed(function () {
            //     var _formatTel = function (value) {
            //         value = value.replace(/[^0-9]+/g, "");
            //
            //         if (value.length > 4 && value.length <= 10) {
            //             value = "(" + value.substring(0, 2) + ") " + value.substring(2, 6) + "-" + value.substring(6, 10);
            //         } else if (value.length > 4) {
            //             value = "(" + value.substring(0, 2) + ") " + value.substring(2, 7) + "-" + value.substring(7, 11);
            //         }
            //
            //         return value;
            //     }
            // });


            //Monitora qualquer mudança no valor do elemento
            scope.$watch(attributes.ngModel, function (value) {

                if (value) {
                    var _formatTel = function (value) {
                        value = value.replace(/[^0-9]+/g, "");

                        if (value.length > 4 && value.length <= 10) {
                            value = "(" + value.substring(0, 2) + ") " + value.substring(2, 6) + "-" + value.substring(6, 10);
                        } else if (value.length > 4) {
                            value = "(" + value.substring(0, 2) + ") " + value.substring(2, 7) + "-" + value.substring(7, 11);
                        }

                        console.log(value);

                        return value;
                    }

                    //Altera o valor do elemento
                    ctrl.$setViewValue(_formatTel(value));
                    //Renderiza o valor definido
                    ctrl.$render();
                    ;
                }
            }, true);

        }
    }
};
