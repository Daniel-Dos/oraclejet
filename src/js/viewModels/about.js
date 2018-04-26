/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
//define(['ojs/ojcore', 'knockout', 'jquery', 'factories/CountryFactory', 'ojs/ojcollectiontabledatasource', 'ojs/ojtable', 'ojs/ojinputtext', 'ojs/ojbutton', 'ojs/ojinputtext'],
//        function (oj, ko, $, CountryFactory) {
//            var viewModel = {
//                countryCollection: CountryFactory.createCountryCollection(),
//                datasource: ko.observable(),
//
//                initialize: function () {
//                    this.datasource(new oj.CollectionTableDataSource(this.countryCollection));
//                    this.countryCollection.fetch();
//                }
//            };
//            return viewModel;
//        }
//);

define(['ojs/ojcore', 'knockout', 'jquery', 'factories/CountryFactory', 'ojs/ojcollectiontabledatasource', 'ojs/ojinputtext', 'ojs/ojmodel', 'ojs/ojtable'],
        function (oj, ko, $, CountryFactory) {

            function teste() {
                var self = this;
                self.list = ko.observable();
                self.datasource = ko.observable();
                self.modelo = ko.observable();

                this.initialize = function () {
                    self.list = CountryFactory.createCountryCollection();
                    self.datasource(new oj.CollectionTableDataSource(this.list));
                    self.list.fetch();
                    self.modelo(CountryFactory.createCountryModel());
                };

                saveCustomer = function () {
                    self.list.create(self.modelo().toJSON(), {
                        contentType: 'application/json',
                        success: function (response) {
                            oj.Router.rootInstance.store(-1);
                            oj.Router.rootInstance.go("about");

                            console.log("ok: ", response.body);
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.log("Update error: ", errorThrown);
                        }
                    });
                };
            }
            return new teste();
        });
