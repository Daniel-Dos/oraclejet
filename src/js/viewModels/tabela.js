/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'factories/CountryFactory','ojs/ojmodel', 'ojs/ojcollectiontabledatasource', 
    'ojs/ojtable', 'ojs/ojbutton'],
function (oj, ko, $,CountryFactory) {

    function TabelaModel() {
        var self = this;
        self.list = CountryFactory.createCountryCollection();
        self.datasource = ko.observable();
        
        /*
         *  exemplo de código a seguir cria um objeto de coleta para todo o seu conjunto de dados (ou lista) de registros 
         *  de tarefas e vincula isso a uma instância específica de um modelo de registro de tarefa. O método fetch () 
         *  informa a coleção para ir ao serviço de dados e recuperar de forma assíncrona o conjunto de dados dos 
         *  serviços de dados usando a URL fornecida, por meio de chamadas do jQuery AJAX. 
         *  O método de retorno de chamada de sucesso do aplicativo é chamado quando a chamada é 
         *  retornada com êxito e a coleta é preenchida com registros de modelo.
         *  
         *  https://docs.oracle.com/middleware/jet112/jet/developer/GUID-808434E0-CA80-405C-9450-59E0BF525700.htm#JETDG335
         */
//        self.initialize = function () {
//            self.list = CountryFactory.createCountryCollection();
//            self.datasource(new oj.CollectionTableDataSource(this.list));
//             self.list.fetch();
//        }
//        
//        
     self.datasource(new oj.CollectionTableDataSource(self.list));
        initialize = function(params) {
          var customerId = oj.Router.rootInstance.retrieve();
          if(customerId !== undefined && customerId !== null) {
              self.customerToSynchPromise = self.list.get(customerId);
              self.customerToSynchPromise.then(function (customerToSynch) {
                  customerToSynch.fetch();
              });
          }
      };
        // função que redireciona para outra tela/rota
        self.onClickAdd = function() {
             oj.Router.rootInstance.store(-1);
             oj.Router.rootInstance.go("addUsuario");
        };
        
        self.delete = function(parent, id) {
            self.res
        }
    }
    return new TabelaModel();
});

