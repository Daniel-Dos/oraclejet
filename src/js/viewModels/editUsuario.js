/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(['ojs/ojcore', 'knockout', 'factories/CountryFactory', 'jquery', 'ojs/ojmodel', 'ojs/ojbutton',
    'ojs/ojinputtext', 'ojs/ojinputnumber'],
        function (oj, ko, CountryFactory) {

            function editUsuarioView() {
                var self = this;
                self.usuario = ko.observable();
                // self.saveBtnBusyCheck = ko.observable(false);
                self.list = CountryFactory.countryModel();

                self.initialize = function (params) {
                    var customerId = oj.Router.rootInstance.retrieve();
                    console.log(customerId);
                    self.usuario(self.list);
                    self.usuario.id = customerId;
                };
            }

            return new editUsuarioView();
        });