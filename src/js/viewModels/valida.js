/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojdatetimepicker','ojs/ojtimezonedata'],
function(oj, ko, $) {
    
    function validaView() {
     var self = this;
     self.date = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
    self.formarto = ko.observable("dd/MM/yy");
    self.datePicker = {
        changeMonth: 'none',
        changeYear: 'none'
    };
    self.dataConverter = ko.observable(oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).
                        createConverter({
                            pattern : self.formarto()
                        }));
    };
    return new validaView();
});

