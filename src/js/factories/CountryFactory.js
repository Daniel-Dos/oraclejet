/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore'], function (oj) {
    var CountryFactory = {
        resorceURL: 'http://192.168.39.142:32574/api/',
        
        // cria um unica instanica de country
        createCountryModel: function () {
            var Country = oj.Model.extend({
                urlRoot: this.resorceURL + 'cadastrar',
               // idAttribute: "id"
            });
            return new Country();
        },
        
        // cria uma coleca
        createCountryCollection: function () {
            var Countries = oj.Collection.extend({
                url: this.resorceURL + 'consultar',
                model: this.createCountryModel(),
                idAttribute: "id"
            });
            return new Countries();
        },
        
         deletar: function () {
            var Country = oj.Model.extend({
                urlRoot: this.resorceURL + 'deletar',
                idAttribute: "id"
            });
            return new Country();
        }
        
    };
    return CountryFactory;
});