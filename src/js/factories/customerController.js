define(['ojs/ojcore'], function (oj) {

    var CustomerController = {
        serviceURL: 'http://192.168.39.142:32574/api/',

        createCustomerModel: function () {
            var Customer = oj.Model.extend({
                urlRoot: this.serviceURL + 'cadastrar'
            });

            return new Customer();
        },

        editCustomerModel: function () {
            var Customer = oj.Model.extend({
                model: this.createCustomerModel(),
                url: this.serviceURL + 'editar',
            });

            return new Customer();
        },

        createCustomerCollection: function () {
            var Customers = oj.Collection.extend({
                url: this.serviceURL + 'consultar',
                fetchSize: 10,
                model: this.createCustomerModel(),
                idAttribute: "id"
            });

            return new Customers();
        },
        
        createCustomerDelete: function () {
            var Customers = oj.Collection.extend({
                url: this.serviceURL + 'consultar',
                fetchSize: 10,
                model: this.deletar(),
                idAttribute: "id"
            });

            return new Customers();
        },
        
            getCustomerCollection: function () {
            var Customers = oj.Model.extend({
                urlRoot: this.serviceURL + 'consultar'
            });

            return new Customers();
        },

        deletar: function () {
            var Customers = oj.Model.extend({
                urlRoot: this.serviceURL + 'deletar'
            });

            return new Customers();
        }

    }

    return CustomerController;
});
