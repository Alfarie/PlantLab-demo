webpackJsonp([1,6],{

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_routing__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setting_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_configure_basic_configure_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_list_menu_list_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__led_timer_led_timer_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__adv_setting_adv_setting_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_logger_data_logger_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_ui_switch_src__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SettingModule = (function () {
    function SettingModule() {
    }
    return SettingModule;
}());
SettingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__setting_routing__["a" /* settingRouting */],
            __WEBPACK_IMPORTED_MODULE_9__node_modules_angular2_ui_switch_src__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__setting_component__["a" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_4__basic_configure_basic_configure_component__["a" /* BasicConfigureComponent */],
            __WEBPACK_IMPORTED_MODULE_5__menu_list_menu_list_component__["a" /* MenuListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__led_timer_led_timer_component__["a" /* LedTimerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__adv_setting_adv_setting_component__["a" /* AdvSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_8__data_logger_data_logger_component__["a" /* DataLoggerComponent */]
        ]
    })
], SettingModule);

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvSettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdvSettingComponent = (function () {
    function AdvSettingComponent(dataService, io) {
        this.dataService = dataService;
        this.io = io;
        this.eccontrol = false;
        this.phcontrol = false;
        this.co2control = false;
        this.fillwater = false;
        this.circulating = false;
        this.timercontrol = false;
        this.circulatingTime = 300;
        this.cookingTime = 300;
        this.watersystem = false;
        this.ecpump = 85;
        this.phpump = 85;
        this.circulatingpump = 85;
        this.brightness = 100;
        this.io.socket.emit('REQ_SETTING');
    }
    AdvSettingComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.fn.numpad.defaults.gridTpl = '<table class="table modal-content" style="width: 50%; height: 50%;"></table>';
        $.fn.numpad.defaults.backgroundTpl = '<div class="modal-backdrop in"></div>';
        $.fn.numpad.defaults.displayTpl = '<input type="text" class="form-control" style="width: 100%; height: 100%; font-size: 250%;" />';
        $.fn.numpad.defaults.buttonNumberTpl = '<button type="button" class="btn btn-default" style="width: 100%; height: 100%;"></button>';
        $.fn.numpad.defaults.buttonFunctionTpl = '<button type="button" class="btn" style="width: 100%; height: 100%;"></button>';
        $.fn.numpad.defaults.onKeypadCreate = function () { $(this).find('.done').addClass('btn-primary'); };
        $('#circulating-btn').numpad({
            target: $('#circulating')
        });
        $('#cooking-btn').numpad({
            target: $('#cooking')
        });
        $('.clockpicker').clockpicker();
        $('[data-toggle="datepicker"]').datepicker({
            format: 'yyyy-mm-dd'
        });
        this.subscription = this.dataService.settingSubject.asObservable().subscribe(function (data) {
            console.log(data);
            _this.eccontrol = (data['ec-control'] == 1) ? true : false;
            _this.phcontrol = (data['ph-control'] == 1) ? true : false;
            _this.co2control = (data['co2-control'] == 1) ? true : false;
            _this.circulating = (data['circulating'] == 1) ? true : false;
            _this.fillwater = (data['fill-water'] == 1) ? true : false;
            _this.timercontrol = (data['timer-mode'] == 1) ? true : false;
            _this.circulatingTime = data['circulating-time'];
            _this.cookingTime = data['cooking-time'];
            _this.watersystem = (data['water-system'] == 1) ? true : false;
            console.log(_this.cookingTime, _this.circulatingTime);
        });
        this.dtsub = this.dataService.datetimeSubject.asObservable().subscribe(function (data) {
            _this.date = data.date;
            _this.time = data.time.substring(0, data.time.length - 3);
            _this.dtsub.unsubscribe();
        });
    };
    AdvSettingComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    };
    AdvSettingComponent.prototype.updateTime = function (date, time) {
        var data = {
            'date': date,
            'time': time
        };
        console.log(data);
        this.io.socket.emit('DATETIME_UPDATE', data);
    };
    AdvSettingComponent.prototype.updateSysParam = function () {
        var data = {
            circulatingTime: this.cirTimeInput.nativeElement.value,
            cookingTime: this.cookTimeInput.nativeElement.value
        };
        this.io.socket.emit('UPDATE_SYS_PARAM', data);
    };
    AdvSettingComponent.prototype.Co2Control = function (val) {
        this.io.socket.emit('CHANGE_CO2_CONTROL', { mode: (val) ? 1 : 0 });
    };
    AdvSettingComponent.prototype.ECControl = function (val) {
        this.io.socket.emit('CHANGE_EC_CONTROL', { mode: (val) ? 1 : 0 });
    };
    AdvSettingComponent.prototype.PHControl = function (val) {
        this.io.socket.emit('CHANGE_PH_CONTROL', { mode: (val) ? 1 : 0 });
    };
    AdvSettingComponent.prototype.Circulating = function (val) {
        this.io.socket.emit('CHANGE_CIRCULATING', { mode: (val) ? 1 : 0 });
    };
    AdvSettingComponent.prototype.FillWater = function (val) {
        this.io.socket.emit('CHANGE_FILLWATER', { mode: (val) ? 1 : 0 });
    };
    AdvSettingComponent.prototype.TimerControl = function (val) {
        this.io.socket.emit('CHANGE_TIMER_MODE', { mode: (val) ? 1 : 0 });
    };
    AdvSettingComponent.prototype.WaterSystem = function (val) {
        this.io.socket.emit('CHANGE_WATER_SYSTEM', { mode: (val) ? 1 : 0 });
    };
    return AdvSettingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('dateinput'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], AdvSettingComponent.prototype, "dateInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('timeinput'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object)
], AdvSettingComponent.prototype, "timeInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('cirtime'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _c || Object)
], AdvSettingComponent.prototype, "cirTimeInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('cooktime'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _d || Object)
], AdvSettingComponent.prototype, "cookTimeInput", void 0);
AdvSettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-adv-setting',
        template: __webpack_require__(446),
        styles: [__webpack_require__(433)]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__["a" /* SocketService */]) === "function" && _f || Object])
], AdvSettingComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=adv-setting.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicConfigureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicConfigureComponent = (function () {
    function BasicConfigureComponent(dataService, io) {
        this.dataService = dataService;
        this.io = io;
        this.settingData = {
            'co2-setpoint': 950,
            'ec-setpoint': 1.5,
            'ec-working': 10,
            'ph-setpoint': 6.5,
            'ph-working': 6.5
        };
        this.io.socket.emit('REQ_SETTING');
    }
    BasicConfigureComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.fn.numpad.defaults.gridTpl = '<table class="table modal-content" style="width: 50%; height: 50%;"></table>';
        $.fn.numpad.defaults.backgroundTpl = '<div class="modal-backdrop in"></div>';
        $.fn.numpad.defaults.displayTpl = '<input type="text" class="form-control" style="width: 100%; height: 100%; font-size: 250%;" />';
        $.fn.numpad.defaults.buttonNumberTpl = '<button type="button" class="btn btn-default" style="width: 100%; height: 100%;"></button>';
        $.fn.numpad.defaults.buttonFunctionTpl = '<button type="button" class="btn" style="width: 100%; height: 100%;"></button>';
        $.fn.numpad.defaults.onKeypadCreate = function () { $(this).find('.done').addClass('btn-primary'); };
        $('#ecsettpoint-btn').numpad({
            target: $('#ecsettpoint')
        });
        $('#phsettpoint-btn').numpad({
            target: $('#phsettpoint')
        });
        $('#co2setpoint-btn').numpad({
            target: $('#co2setpoint')
        });
        $('#ecworking-btn').numpad({
            target: $('#ecworking')
        });
        $('#phworking-btn').numpad({
            target: $('#phworking')
        });
        this.subscription = this.dataService.settingSubject.asObservable().subscribe(function (data) {
            console.log(data);
            _this.settingData['co2-setpoint'] = data['co2-setpoint'];
            _this.settingData['ec-setpoint'] = data['ec-setpoint'];
            _this.settingData['ph-setpoint'] = data['ph-setpoint'];
            _this.settingData['ec-working'] = data['ec-working'];
            _this.settingData['ph-working'] = data['ph-working'];
            _this.ecsetpoint.nativeElement.value = data['ec-setpoint'];
            _this.ecworking.nativeElement.value = data['ec-working'];
            _this.phsetpoint.nativeElement.value = data['ph-setpoint'];
            _this.phworking.nativeElement.value = data['ph-working'];
            _this.co2setpoint.nativeElement.value = data['co2-setpoint'];
        });
    };
    BasicConfigureComponent.prototype.update = function () {
        var d = {
            'ec-setpoint': parseFloat(this.ecsetpoint.nativeElement.value),
            'ec-working': parseInt(this.ecworking.nativeElement.value),
            'ph-setpoint': parseInt(this.phsetpoint.nativeElement.value),
            'ph-working': parseInt(this.phworking.nativeElement.value),
            'co2-setpoint': parseInt(this.co2setpoint.nativeElement.value)
        };
        console.log(d);
        this.io.socket.emit('UPDATE_BASIC_CONFIG', d);
    };
    BasicConfigureComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return BasicConfigureComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('ecsetpoint'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object)
], BasicConfigureComponent.prototype, "ecsetpoint", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('ecworking'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object)
], BasicConfigureComponent.prototype, "ecworking", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('phsetpoint'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _c || Object)
], BasicConfigureComponent.prototype, "phsetpoint", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('phworking'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _d || Object)
], BasicConfigureComponent.prototype, "phworking", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ViewChild */])('co2setpoint'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _e || Object)
], BasicConfigureComponent.prototype, "co2setpoint", void 0);
BasicConfigureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-basic-configure',
        template: __webpack_require__(447),
        styles: [__webpack_require__(434)]
    }),
    __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__["a" /* SocketService */]) === "function" && _g || Object])
], BasicConfigureComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=basic-configure.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataLoggerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataLoggerComponent = (function () {
    function DataLoggerComponent() {
    }
    DataLoggerComponent.prototype.ngOnInit = function () {
    };
    return DataLoggerComponent;
}());
DataLoggerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-data-logger',
        template: __webpack_require__(448),
        styles: [__webpack_require__(435)]
    }),
    __metadata("design:paramtypes", [])
], DataLoggerComponent);

//# sourceMappingURL=data-logger.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedTimerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LedTimerComponent = (function () {
    function LedTimerComponent(dataService, io) {
        this.dataService = dataService;
        this.io = io;
        this.timerList = [];
        this.timerMode = false;
        this.timerSwitch = false;
        this.animationInitialized = false;
        this.io.socket.emit('REQ_SETTING');
    }
    LedTimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dataService.settingSubject.asObservable().subscribe(function (data) {
            _this.timerList = data['timer-list'];
            _this.timerMode = (data['timer-mode'] == 1) ? true : false;
            _this.timerSwitch = (data['timer-switch'] == 1) ? true : false;
        });
        $('.clockpicker').clockpicker();
    };
    LedTimerComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    };
    LedTimerComponent.prototype.updateTimer = function () {
        console.log(this.timerList);
        if (this.timerList.length <= 0) {
            alert('Fail: Timer list number should not be zero.');
            this.io.socket.emit('REQ_SETTING');
            return;
        }
        this.io.socket.emit('UPDATE_LED_TIMER', this.timerList);
    };
    LedTimerComponent.prototype.deleteTimer = function (index) {
        if (index >= 0) {
            this.timerList.splice(index, 1);
        }
    };
    LedTimerComponent.prototype.addTimer = function (start, end) {
        console.log(start, end);
        var startMin = this.timerStringToMin(start);
        var stopMin = this.timerStringToMin(end);
        if (startMin >= stopMin) {
            alert('Fail: Start time should more than stop time.');
            return;
        }
        var flag = false;
        this.timerList.forEach(function (timer) {
            var endTime = timer.end;
            if (endTime >= startMin) {
                flag = true;
            }
        });
        if (flag) {
            alert('The new timer should more than the last of timer list.');
            return;
        }
        var timer = {
            'start': startMin,
            'end': stopMin
        };
        this.timerList.push(timer);
    };
    LedTimerComponent.prototype.changeTimerMode = function (val) {
        var data = {
            mode: (val) ? 1 : 0
        };
        console.log(data);
        this.io.socket.emit('CHANGE_TIMER_MODE', data);
    };
    LedTimerComponent.prototype.changeTimerSwitch = function (val) {
        var data = {
            mode: (val) ? 1 : 0
        };
        console.log(data);
        this.io.socket.emit('CHANGE_TIMER_SWITCH', data);
    };
    LedTimerComponent.prototype.MinToTimeFormat = function (value) {
        var val = parseInt(value);
        var hour = Math.floor(val / 60);
        var min = val % 60;
        var hstr, mstr;
        if (hour < 10) {
            hstr = "0" + hour.toString();
        }
        else {
            hstr = hour.toString();
        }
        if (min < 10) {
            mstr = "0" + min.toString();
        }
        else {
            mstr = min.toString();
        }
        return hstr + ":" + mstr;
    };
    LedTimerComponent.prototype.timerStringToMin = function (time) {
        var arr = time.split(":");
        var min = parseInt(arr[0]) * 60 + parseInt(arr[1]);
        return min;
    };
    return LedTimerComponent;
}());
LedTimerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-led-timer',
        template: __webpack_require__(449),
        styles: [__webpack_require__(436)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* trigger */])('anim', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* transition */])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({ height: '*', opacity: '1', transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* sequence */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])(".25s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none' })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])(".1s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({ height: '0', opacity: 0, transform: 'translateX(20px)', 'box-shadow': 'none' }))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* transition */])('void => active', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({ height: '0', opacity: '0', transform: 'translateX(20px)', 'box-shadow': 'none' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* sequence */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])(".1s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({ height: '*', opacity: '.2', transform: 'translateX(20px)', 'box-shadow': 'none' })),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])(".35s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({ height: '*', opacity: 1, transform: 'translateX(0)', 'box-shadow': '0 1px 4px 0 rgba(0, 0, 0, 0.3)' }))
                    ])
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], LedTimerComponent);

var _a, _b;
//# sourceMappingURL=led-timer.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuListComponent = (function () {
    function MenuListComponent() {
    }
    MenuListComponent.prototype.ngOnInit = function () {
    };
    return MenuListComponent;
}());
MenuListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-menu-list',
        template: __webpack_require__(450),
        styles: [__webpack_require__(437)]
    }),
    __metadata("design:paramtypes", [])
], MenuListComponent);

//# sourceMappingURL=menu-list.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingComponent = (function () {
    function SettingComponent(dataService, io) {
        this.dataService = dataService;
        this.io = io;
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.prototype.ngOnDestroy = function () {
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-setting',
        template: __webpack_require__(451),
        styles: [__webpack_require__(438)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socketio_socket_service__["a" /* SocketService */]) === "function" && _b || Object])
], SettingComponent);

var _a, _b;
//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_switch_component__ = __webpack_require__(372);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiSwitchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiSwitchModule = (function () {
    function UiSwitchModule() {
    }
    return UiSwitchModule;
}());
UiSwitchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__ui_switch_component__["a" /* UiSwitchComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__ui_switch_component__["a" /* UiSwitchComponent */]]
    })
], UiSwitchModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiSwitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UI_SWITCH_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* forwardRef */])(function () { return UiSwitchComponent; }),
    multi: true
};
var UiSwitchComponent = (function () {
    function UiSwitchComponent() {
        this.onTouchedCallback = function (v) {
        };
        this.onChangeCallback = function (v) {
        };
        this.size = 'medium';
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* EventEmitter */]();
        this.color = 'rgb(100, 189, 99)';
        this.switchOffColor = '';
        this.switchColor = '#fff';
        this.defaultBgColor = '#fff';
        this.defaultBoColor = '#dfdfdf';
    }
    Object.defineProperty(UiSwitchComponent.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (v) {
            this._checked = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UiSwitchComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (v) {
            this._disabled = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(UiSwitchComponent.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (v) {
            this._reverse = v !== false;
        },
        enumerable: true,
        configurable: true
    });
    ;
    UiSwitchComponent.prototype.getColor = function (flag) {
        if (flag === 'borderColor')
            return this.defaultBoColor;
        if (flag === 'switchColor') {
            if (this.reverse)
                return !this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
            return this.checked ? this.switchColor : this.switchOffColor || this.switchColor;
        }
        if (this.reverse)
            return !this.checked ? this.color : this.defaultBgColor;
        return this.checked ? this.color : this.defaultBgColor;
    };
    UiSwitchComponent.prototype.onToggle = function () {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.change.emit(this.checked);
        this.onChangeCallback(this.checked);
        this.onTouchedCallback(this.checked);
    };
    UiSwitchComponent.prototype.writeValue = function (obj) {
        if (obj !== this.checked) {
            this.checked = !!obj;
        }
    };
    UiSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    UiSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return UiSwitchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "checked", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "disabled", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], UiSwitchComponent.prototype, "reverse", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Output */])(),
    __metadata("design:type", Object)
], UiSwitchComponent.prototype, "change", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "color", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "switchOffColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], UiSwitchComponent.prototype, "switchColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UiSwitchComponent.prototype, "onToggle", null);
UiSwitchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'ui-switch',
        template: "\n  <span class=\"switch\" \n  [class.checked]=\"checked\" \n  [class.disabled]=\"disabled\"\n  [class.switch-large]=\"size === 'large'\"\n  [class.switch-medium]=\"size === 'medium'\"\n  [class.switch-small]=\"size === 'small'\"\n  [style.background-color]=\"getColor()\"\n  [style.border-color]=\"getColor('borderColor')\"\n  >\n  <small [style.background]=\"getColor('switchColor')\">\n  </small>\n  </span>\n  ",
        styles: ["\n    .switch {\n    background: #f00;\n    border: 1px solid #dfdfdf;\n    position: relative;\n    display: inline-block;\n    box-sizing: content-box;\n    overflow: visible;\n    padding: 0;\n    margin: 0;            \n    cursor: pointer;\n    box-shadow: rgb(223, 223, 223) 0 0 0 0 inset;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }        \n\n    small {\n    border-radius: 100%;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);          \n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: 0.3s ease-out all;\n    -webkit-transition: 0.3s ease-out all;\n    }\n\n    .switch-large {\n    width: 66px;\n    height: 40px;\n    border-radius: 40px;\n    }\n\n    .switch-large small {\n    width: 40px;\n    height: 40px;\n    }\n\n    .switch-medium {\n    width: 50px;\n    height: 30px;\n    border-radius: 30px;\n    }\n\n    .switch-medium small {\n    width: 30px;\n    height: 30px;\n    }\n\n    .switch-small {\n    width: 33px;\n    height: 20px;\n    border-radius: 20px;\n    }\n\n    .switch-small small {\n    width: 20px;\n    height: 20px;\n    }\n\n    .checked {\n    background: rgb(100, 189, 99);\n    border-color: rgb(100, 189, 99);\n    }\n\n    .switch-large.checked small {\n    left: 26px;\n    }\n\n    .switch-medium.checked small {\n    left: 20px;\n    }\n\n    .switch-small.checked small {\n    left: 13px;\n    }\n\n    .disabled {\n    opacity: .50;\n    cursor: not-allowed;\n    }\n    "],
        providers: [UI_SWITCH_CONTROL_VALUE_ACCESSOR]
    })
], UiSwitchComponent);

//# sourceMappingURL=ui-switch.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setting_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_configure_basic_configure_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_list_menu_list_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__led_timer_led_timer_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__adv_setting_adv_setting_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_logger_data_logger_component__ = __webpack_require__(249);
/* unused harmony export setttingRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settingRouting; });







var setttingRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__setting_component__["a" /* SettingComponent */],
        children: [
            { path: 'basic-config', component: __WEBPACK_IMPORTED_MODULE_2__basic_configure_basic_configure_component__["a" /* BasicConfigureComponent */] },
            { path: 'menu-list', component: __WEBPACK_IMPORTED_MODULE_3__menu_list_menu_list_component__["a" /* MenuListComponent */] },
            { path: 'led-timer', component: __WEBPACK_IMPORTED_MODULE_4__led_timer_led_timer_component__["a" /* LedTimerComponent */] },
            { path: 'adv-setting', component: __WEBPACK_IMPORTED_MODULE_5__adv_setting_adv_setting_component__["a" /* AdvSettingComponent */] },
            { path: 'data-logger', component: __WEBPACK_IMPORTED_MODULE_6__data_logger_data_logger_component__["a" /* DataLoggerComponent */] }
        ]
    }
];
var settingRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(setttingRoutes);
//# sourceMappingURL=setting.routing.js.map

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "input {\n    height: 50px;\n    font-size: 25px\n}\n\nbutton {\n    height: 50px;\n    width: 80px;\n}\n\n.input-group-addon {\n    height: 50px;\n    width: 100px;\n}\n\nlabel {\n    font-size: 20px;\n}\n\n.row {\n    margin-top: 25px;\n}\n\n.setime {\n    width: 100px;\n}\n\n.pull-right {\n    float: right !important;\n    margin-right: 200px;\n}\n\n.pull-left {\n    float: left !important;\n}\n\n.btn-circle.btn-xl {\n    width: 100px;\n    height: 100px;\n    padding: 10px 16px;\n    font-size: 24px;\n    line-height: 1.33;\n    border-radius: 35px;\n}\n\n#updatebt {\n    height: 100px;\n    width: 150px;\n}\n\n.boxinline {\n    position: relative;\n}\n\n.lableswitch {\n    /*position: absolute;*/\n    top: 50%;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n}\n\n.nmpd-wrapper {\n    display: none;\n}\n\n.nmpd-target {\n    cursor: pointer;\n}\n\n.nmpd-grid {\n    position: absolute;\n    left: 50px;\n    top: 50px;\n    z-index: 5000;\n    -khtml-user-select: none;\n    padding: 10px;\n    width: initial;\n}\n\n.nmpd-overlay {\n    z-index: 4999;\n}\n\ninput.nmpd-display {\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "input {\n    height: 70px;\n    font-size: 30px\n}\n\nbutton {\n    height: 70px;\n    width: 100px;\n}\n\nlabel {\n    font-size: 20px;\n}\n\n.row {\n    margin-top: 25px;\n}\n\n.pull-right {\n    float: right !important;\n    margin-right: 200px;\n}\n\n.pull-left {\n    float: left !important;\n}\n\n.btn-circle.btn-xl {\n    width: 100px;\n    height: 100px;\n    padding: 10px 16px;\n    font-size: 24px;\n    line-height: 1.33;\n    border-radius: 35px;\n}\n\n.nmpd-wrapper {\n    display: none;\n}\n\n.nmpd-target {\n    cursor: pointer;\n}\n\n.nmpd-grid {\n    position: absolute;\n    left: 50px;\n    top: 50px;\n    z-index: 5000;\n    -khtml-user-select: none;\n    padding: 10px;\n    width: initial;\n}\n\n.nmpd-overlay {\n    z-index: 4999;\n}\n\ninput.nmpd-display {\n    text-align: right;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".container-table {\n    display: table;\n}\n\n.vertical-center-row {\n    display: table-cell;\n    vertical-align: middle;\n}\n\n.fa {\n    margin-top: 10px;\n    padding: 20px;\n    font-size: 35px;\n    width: 65px;\n    text-align: center;\n    text-decoration: none;\n    border-radius: 50%;\n}\n\n\n/* Add a hover effect if you want */\n\n.fa:hover {\n    opacity: 0.7;\n}\n\n\n/* Set a specific color for each brand */\n\n\n/* Facebook */\n\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "#updatebt {\n    height: 100px;\n    width: 150px;\n    font-size: 25px;\n}\n\n#backbt {\n    height: 100px;\n    width: 150px;\n    font-size: 25px;\n}\n\n.list-primary {\n    height: 80px;\n}\n\n.task-title-sp {\n    font-size: 35px;\n}\n\ninput {\n    height: 70px;\n    font-size: 30px\n}\n\n#addtime {\n    height: 70px;\n    font-size: 30px\n}\n\n.input-group-addon {\n    height: 70px;\n    font-size: 30px\n}\n\n#deltime {\n    height: 50px;\n    width: 50px;\n    font-size: 30px\n}\n\n#updatetime {\n    height: 50px;\n    font-size: 25px\n}\n\n.badge {\n    font-size: 25px;\n    margin-right: 20px;\n    margin-left: 20px;\n}\n\nlabel {\n    font-size: 25px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: -50px;\">\n\n    <div class=\"row\">\n        <div class=\"pull-left\">\n            <h2><i class=\"fa fa-angle-right\"></i> System setting</h2>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-12\" style=\"margin-top: -10px;\">\n            <label> <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Date and Time: {{date}} {{time}}</label>\n            <div class=\"row\" style=\"margin-top: -1px;\">\n                <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" #dateinput [(ngModel)]=\"date\" class=\"form-control docs-date\" name=\"date1\" placeholder=\"Pick a date\" data-toggle=\"datepicker\">\n                        <span class=\"input-group-btn\">\n                          <button type=\"button\" class=\"btn btn-default docs-datepicker-trigger\" disabled=\"\">\n                            <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                          </button>\n                        </span>\n                    </div>\n                </div>\n\n                <div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-5\">\n                    <div class=\"input-group clockpicker\" data-align=\"top\" data-autoclose=\"true\">\n                        <input type=\"text\" [(ngModel)]=\"time\" class=\"form-control\" value=\"13:14\" #timeinput>\n                        <span class=\"input-group-addon\">\n                             <span class=\"glyphicon glyphicon-time\"></span>\n                        </span>\n                    </div>\n\n                </div>\n                <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\" style>\n                    <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"updateTime(dateinput.value, timeinput.value)\"><i class=\"fa fa-arrow-circle-o-up\" ></i>Set</button>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" style=\"margin-top: 20px;\">\n            <div class=\"boxinline\">\n                <label class=\"lableswitch\" for=\"\"> <i class=\"fa fa-leaf\" aria-hidden=\"true\"></i> CO<sub>2</sub> Control:</label>\n                <ui-switch size=\"large\" [(ngModel)]=\"co2control\" (change)=\"Co2Control($event)\" style=\"margin-left: 50px;\"></ui-switch>\n            </div>\n        </div>\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" style=\"margin-top: 20px;\">\n            <div class=\"boxinline\">\n                <label class=\"lableswitch\" for=\"\"> <i class=\"fa fa-bolt\" aria-hidden=\"true\"></i> EC Control:</label>\n                <ui-switch size=\"large\" [(ngModel)]=\"eccontrol\" (change)=\"ECControl($event)\" style=\"margin-left: 50px;\"></ui-switch>\n            </div>\n        </div>\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" style=\"margin-top: 20px;\">\n            <div class=\"boxinline\">\n                <label class=\"lableswitch\" for=\"\"> <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Timer control: </label>\n                <ui-switch size=\"large\" [(ngModel)]=\"timercontrol\" (change)=\"TimerControl($event)\" style=\"margin-left: 50px;\"></ui-switch>\n            </div>\n        </div>\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" style=\"margin-top: 20px;\">\n            <div class=\"boxinline\">\n                <label class=\"lableswitch\" for=\"\"> <i class=\"fa fa-flask\" aria-hidden=\"true\"></i> pH Control: </label>\n                <ui-switch size=\"large\" [(ngModel)]=\"phcontrol\" (change)=\"PHControl($event)\" style=\"margin-left: 50px;\"></ui-switch>\n            </div>\n        </div>\n        <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" style=\"margin-top: 20px;\">\n            <div class=\"boxinline\">\n                <label class=\"lableswitch\" for=\"\"> <i class=\"fa fa-tint\"  aria-hidden=\"true\"></i> Water system: </label>\n                <ui-switch size=\"large\" [(ngModel)]=\"watersystem\" (change)=\"WaterSystem($event)\" style=\"margin-left: 50px;\"></ui-switch>\n            </div>\n        </div>\n        <!--<div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\" style=\"margin-top: 20px;\">\n            <div class=\"boxinline\">\n                <label class=\"lableswitch\" for=\"\"> <i class=\"fa fa-tint\" aria-hidden=\"true\"></i> +Fill water : </label>\n                <ui-switch size=\"large\" (change)=\"FillWater($event)\" [(ngModel)]=\"fillwater\" style=\"margin-left: 50px;\"></ui-switch>\n            </div>\n        </div>-->\n    </div>\n\n\n    <div class=\"row\" style=\"margin-top: 1px;\">\n        <div class=\"pull-left\">\n            <h2><i class=\"fa fa-angle-right\"></i> System parameters</h2>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n            <label><i class=\"fa fa-refresh\" aria-hidden=\"true\"></i> Circulating time(Sec.):</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"circulating\" #cirtime [(ngModel)]=\"circulatingTime\" class=\"form-control\" placeholder=\"ex. 600 sec\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" id=\"circulating-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n                </span>\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n            <label><i class=\"fa fa-flask\" aria-hidden=\"true\"></i> Cooking time(Sec.):</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"cooking\" #cooktime [(ngModel)]=\"cookingTime\" class=\"form-control\" placeholder=\"ex. 600 sec\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n                  <button class=\"btn btn-default\" id=\"cooking-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n                </span>\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n            <label><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> Circulating pump speed(%):</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"ecsettpoint\" [(ngModel)]=\"circulatingpump\" disabled class=\"form-control\" placeholder=\"ex. (0-100%)\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"ecsettpoint-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n            <label><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> EC pump speed(%):</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"ecsettpoint\" [(ngModel)]=\"ecpump\" disabled class=\"form-control\" placeholder=\"ex. (0-100%)\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"ecsettpoint-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n            <label><i class=\"fa fa-circle-o\" aria-hidden=\"true\"></i> pH pump speed(%):</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"ecsettpoint\" [(ngModel)]=\"phpump\" disabled class=\"form-control\" placeholder=\"ex. (0-100%)\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"ecsettpoint-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n\n        <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n            <label><i class=\"fa fa-lightbulb-o\" aria-hidden=\"true\"></i> Light brightness(%): </label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"ecsettpoint\" [(ngModel)]=\"brightness\" disabled class=\"form-control\" placeholder=\"ex. (0-100%)\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"ecsettpoint-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n\n\n\n\n    </div>\n\n    <div class=\"row\">\n\n        <div class=\"pull-left\">\n            <a routerLink=\"/setting/menu-list\"><button type=\"button\" class=\"btn btn-default btn-circle btn-xl\">Back</button></a>\n        </div>\n        <div class=\"pull-right\">\n            <button (click)=\"updateSysParam()\" id=\"updatebt\" type=\"button\" class=\"btn btn-success btn-circle btn-xl\"><i aria-hidden=\"true\" class=\"fa fa-arrow-circle-o-up\"></i> Update</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 447:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <h1><i class=\"fa fa-angle-right\"></i> Basic configuration</h1>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n            <label for=\"ecsettpoint\">EC Setpoint (ms/cm)</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"ecsettpoint\" #ecsetpoint class=\"form-control\" placeholder=\"ex. 1.2 ms/cm\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"ecsettpoint-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n            <label for=\"ecsettpoint\">pH Setpoint</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"phsettpoint\" #phsetpoint class=\"form-control\" placeholder=\"ex. 6.5\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"phsettpoint-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n            <label for=\"ecsettpoint\">CO2 Setpoint(PPM)</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"co2setpoint\" #co2setpoint class=\"form-control\" placeholder=\"ex. 780 ppm\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"co2setpoint-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n            <label for=\"ecsettpoint\">EC Working(Sec.)</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"ecworking\" #ecworking class=\"form-control\" placeholder=\"ex. 10 sec.\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"ecworking-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-10 col-lg-10\">\n            <label for=\"ecsettpoint\">pH Working(Sec.)</label>\n            <div class=\"input-group\">\n                <input type=\"text\" id=\"phworking\" #phworking class=\"form-control\" placeholder=\"ex. 10 sec.\" aria-describedby=\"ecsettpoint-btn\" maxlength=\"4\">\n                <span class=\"input-group-btn\">\n\t\t\t\t\t<button class=\"btn btn-default\" id=\"phworking-btn\" type=\"button\"><i class=\"glyphicon glyphicon-th\"></i></button>\n\t\t\t\t</span>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"row\">\n\n        <div class=\"pull-left\">\n            <a routerLink=\"/setting/menu-list\"><button type=\"button\" class=\"btn btn-default btn-circle btn-xl\">Back</button></a>\n        </div>\n        <div class=\"pull-right\">\n            <button type=\"button\" class=\"btn btn-success btn-circle btn-xl\" (click)=\"update()\"><i class=\"glyphicon glyphicon-ok\" ></i></button>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 448:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n    <div class=\"row\">\n        <img src=\"assets/img/aboutus2.png\" alt=\"\" class=\"img-responsive center-block\" style=\"width: 60%; height: 60%; margin-top: 50px;\">\n        <div style=\"margin-top: 100px;\">\n            <img src=\"assets/img/logo.png\" style=\"width: 250px; height: 70px;\" alt=\"\" class=\"img-responsive center-block\">\n        </div>\n\n        <div class=\"text-center\" style=\"color: #008000; font-size: 25px;\">Grobot เทคโนโลยีการเกษตรแห่งอนาคต ใช้ทรัพยากรน้อยกว่า <br>ให้ผลผลิตมากกว่า ปลอดภัยไร้สารพิษ</div>\n        <div class=\"text-center\" style=\" font-size: 25px;\">\n            <a href=\"#\" class=\"fa fa-facebook\"></a> @GrobotTH\n        </div>\n\n    </div>\n\n\n</div>"

/***/ }),

/***/ 449:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"pull-left\" style=\"margin-bottom: 20px;\">\n            <h1><i class=\"fa fa-angle-right\"></i> LED Light - Timer configure</h1>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <section class=\"task-panel tasks-widget\">\n                <div class=\"panel-heading\">\n                    <div class=\"panel-heading\">\n\n\n                        <div class=\"row\">\n                            <div class=\"pull-left\">\n                                <h4><i class=\"fa fa-tasks\"></i> LED Light - Timer Mode</h4>\n                            </div>\n                            <br>\n                            <p class=\"drop-after\"></p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel-body\" style=\"margin-top: -30px;\">\n                    <div class=\"task-content\">\n                        <label for=\"\"> <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Timer Control:</label><br>\n                        <ui-switch [(ngModel)]=\"timerMode\" (change)=\"changeTimerMode($event)\" size=\"large\" style=\"margin-left: 50px;\" name=\"timermode\"></ui-switch>\n                        <br>\n                        <label for=\"\" style=\"margin-top: 20px;\" [hidden]=\"timerMode\"> <i class=\"fa fa-lightbulb-o\"  aria-hidden=\"true\"></i> LED Switch :</label><br>\n                        <ui-switch [hidden]=\"timerMode\" [(ngModel)]=\"timerSwitch\" size=\"large\" style=\"margin-left: 50px;\" (change)=\"changeTimerSwitch($event)\"></ui-switch>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </div>\n\n    <div class=\"row\" [hidden]=\"!timerMode\">\n        <div class=\"col-md-12\">\n            <section class=\"task-panel tasks-widget\">\n                <div class=\"panel-heading\">\n\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"task-content\">\n                        <div class=\"row\">\n\n                            <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n                                <div class=\"input-group clockpicker\" data-align=\"top\" data-autoclose=\"true\">\n                                    <input class=\"clockp\" type=\"text\" class=\"form-control\" value=\"00:00\" #start>\n                                    <span class=\"input-group-addon\">\n                                        <span class=\"glyphicon glyphicon-time\"></span>\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n                                <div class=\"input-group clockpicker\" data-align=\"top\" data-autoclose=\"true\">\n                                    <input class=\"clockp\" type=\"text\" class=\"form-control\" value=\"12:59\" #end>\n                                    <span class=\"input-group-addon\">\n                                        <span class=\"glyphicon glyphicon-time\"></span>\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n                                <button id=\"addtime\" type=\"button\" class=\"btn btn-default\" (click)=\"addTimer(start.value,end.value)\"> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add Time</button>\n                            </div>\n                        </div>\n\n\n                        <div class=\"row\" style=\"margin-top: 50px;\">\n                            <ul id=\"sortable\" class=\"task-list ui-sortable\">\n                                <!--<li class=\"list-primary\" *ngFor=\"let item of dataService.settingData.timerList; let i = index;\">-->\n                                <li class=\"list-primary\" *ngFor=\"let item of dataService.settingData['timer-list']; let i = index;\">\n                                    <i class=\" fa fa-ellipsis-v fa-4x\"></i>\n                                    <div class=\"task-title\">\n                                        <span class=\"task-title-sp\" style=\"margin-left: 20px;\"> {{MinToTimeFormat(item.start)}}</span>\n                                        <span class=\"badge bg-theme\"> To </span>\n                                        <span class=\"task-title-sp\"> {{MinToTimeFormat(item.end)}}</span>\n                                        <div class=\"pull-right hidden-phone\">\n                                            <button id=\"deltime\" class=\"btn btn-danger btn-xs fa fa-trash-o\" (click)=\"deleteTimer(i)\"></button>\n                                        </div>\n                                    </div>\n                                </li>\n\n                            </ul>\n                        </div>\n\n                        <div *ngIf=\"dataService.isUpdateClick\">\n                            <div class=\"alert alert-info\" *ngIf=\"!dataService.isUpdateSuccess\"><img [src]=\"image\" /><b>Updating...</b> EC-Control setting</div>\n                            <div class=\"alert alert-success\" *ngIf=\"dataService.isUpdateSuccess\"><b>Successful.</b> EC-Control setting</div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </div>\n\n\n    <div class=\"row\">\n\n        <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <div class=\"pull-left\">\n                <a routerLink=\"/setting/menu-list\"><button type=\"button\" id=\"backbt\" class=\"btn btn-round btn-default btn-lg\">Back</button></a>\n            </div>\n            <div class=\"pull-right\">\n                <button id=\"updatebt\" type=\"button\" class=\"btn btn-round btn-success btn-lg\" (click)=\"updateTimer()\"> <i aria-hidden=\"true\" class=\"fa fa-arrow-circle-o-up\"></i> Update</button>\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ 450:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row mtbox\">\n        <div class=\"col-md-5 col-sm-5 box0\">\n            <div class=\"box1\" routerLink=\"/setting/basic-config\">\n                <span class=\"li_heart\"><i class=\"fa fa-cog fa-3x\" aria-hidden=\"true\"></i></span>\n                <h2>Basic Configuration</h2>\n            </div>\n            <p>All basic setting for PlatLab</p>\n        </div>\n\n        <div class=\"col-md-5 col-sm-5 col-md-offset-1 box0\">\n            <div class=\"box1\" routerLink=\"/setting/led-timer\">\n                <span class=\"li_heart\"><i class=\"fa fa-clock-o fa-3x\" aria-hidden=\"true\"></i></span>\n                <h2>LED Timer</h2>\n            </div>\n            <p>All basic setting for PlatLab</p>\n        </div>\n        <!--fa-wrench-->\n\n        <div class=\"col-md-5 col-sm-5  box0\" style=\"margin-top: 70px;\">\n            <div class=\"box1\" routerLink=\"/setting/adv-setting\">\n                <span class=\"li_heart\"><i class=\"fa fa-wrench fa-3x\" aria-hidden=\"true\"></i></span>\n                <h2>Setting</h2>\n            </div>\n            <p>All basic setting for PlatLab</p>\n        </div>\n        <div class=\"col-md-5 col-sm-5 col-md-offset-1 box0\" style=\"margin-top: 70px;\">\n            <div class=\"box1\" routerLink=\"/setting/data-logger\">\n                <span class=\"li_heart\"><i class=\"fa fa-address-card-o fa-3x\" aria-hidden=\"true\"></i></span>\n                <h2>About us</h2>\n            </div>\n            <p>All basic setting for PlatLab</p>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n\n</router-outlet>"

/***/ })

});
//# sourceMappingURL=1.chunk.js.map