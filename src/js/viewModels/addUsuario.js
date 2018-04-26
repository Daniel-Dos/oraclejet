/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'factories/CountryFactory','sweetalert','ojs/ojinputtext', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojmodel', 'ojs/ojformlayout', 'ojs/ojlabel'],
        function (oj, ko, $, CountryFactory,swal) {

            function addUsuarioView() {
                var self = this
                self.modelo = ko.observable();
                self.list = ko.observable();

                 // inicializa
                this.initialize = function () {
                    self.list = CountryFactory.createCountryCollection();
                    self.modelo(CountryFactory.createCountryModel());
                };

                onclickSalvar = function () {
                    self.list.create(self.modelo().toJSON(), {
                        contentType: 'application/json',
                        success: function (response,data) {
                            oj.Router.rootInstance.store(-1);
                            oj.Router.rootInstance.go("tabela");
                            
                            // lib externa para exibir mensagens/alertas
                            /*
                             * https://docs.oracle.com/middleware/jet310/jet/developer/GUID-EC40DF3C-57FB-4919-A066-73E573D66B67.htm#JETDG-GUID-EC40DF3C-57FB-4919-A066-73E573D66B67
                             */
                            swal(data.mensagem,"", "success");
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                             swal(textStatus,errorThrown, "error");
                            console.log("Update error: ", errorThrown);
                        }
                    });
                };

            }
            return new addUsuarioView();
        });
