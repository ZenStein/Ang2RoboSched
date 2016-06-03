var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
CsSelected: ComponentFixture;
var CsSelected = (function () {
    function CsSelected(el) {
        this.el = el.nativeElement;
    }
    CsSelected.prototype.toggle = function () {
        return (!this.selected);
    };
    CsSelected.prototype.unSelect = function () {
        return this.selected = false;
    };
    CsSelected.prototype.select = function () {
        this.el.style.backgroundColor = red;
        return this.selected = true;
    };
    __decorate([
        core_1.Input()
    ], CsSelected.prototype, "Indication");
    CsSelected = __decorate([
        core_1.Directive({
            selector: '[csSelected]',
            host: {
                '(click)': 'toggle()'
            },
            styleUrls: ['is-selected', 'dragged-over']
        })
    ], CsSelected);
    return CsSelected;
})();
exports.CsSelected = CsSelected;
