module.exports = function () {
    return{
        template: `
          <div class="alert alert-success text-center">
            <p>{{title}} <b ng-transclude></b></p>
        </div>
         `,
        /**
         * Não exibe a diretiva no html
         */
        replace:true,
        restrict:"AE",
        /**
         * Cria um novo scope para a diretiva utilizar
         */
        scope:{
           title: '@'
        },
        transclude: true
    }
};
