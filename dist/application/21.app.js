(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./src/modules/treatments/components/page.treatments.tsx":
/*!***************************************************************!*\
  !*** ./src/modules/treatments/components/page.treatments.tsx ***!
  \***************************************************************/
/*! exports provided: Treatments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Treatments\", function() { return Treatments; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nlet Treatments = class Treatments extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.selectedID = _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].currentLocation.split(\"/\")[1];\n    }\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditTreatments;\n    }\n    get selectedIndex() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list.findIndex(x => x._id === this.selectedID);\n    }\n    get selectedTreatment() {\n        return _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list[this.selectedIndex];\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"tc-pg p-15 p-l-10 p-r-10\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"DataTableComponent\"], { onDelete: this.canEdit\n                    ? id => {\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].deleteModal(id);\n                    }\n                    : undefined, commands: this.canEdit\n                    ? [\n                        {\n                            key: \"addNew\",\n                            title: \"Add new\",\n                            name: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Add new\"),\n                            onClick: () => {\n                                const treatment = new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Treatment\"]();\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list.push(treatment);\n                                this.selectedID = treatment._id;\n                            },\n                            iconProps: {\n                                iconName: \"Add\"\n                            }\n                        }\n                    ]\n                    : [], heads: [\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Treatment\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Expenses/unit\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Done appointments\"),\n                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Upcoming appointments\")\n                ], rows: _modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list.map(treatment => {\n                    const now = new Date().getTime();\n                    let done = 0;\n                    let upcoming = 0;\n                    const appointmentsArr = _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].list;\n                    for (let index = 0; index < appointmentsArr.length; index++) {\n                        const appointment = appointmentsArr[index];\n                        if (appointment.treatmentID !== treatment._id) {\n                            continue;\n                        }\n                        if (appointment.date > now) {\n                            upcoming++;\n                        }\n                        if (appointment.isDone) {\n                            done++;\n                        }\n                    }\n                    return {\n                        id: treatment._id,\n                        searchableString: treatment.searchableString,\n                        cells: [\n                            {\n                                dataValue: treatment.type,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: treatment.type, subText: `${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Expenses\")}: ${_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\")}${treatment.expenses} ${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"per unit\")}` })),\n                                onClick: () => {\n                                    this.selectedID = treatment._id;\n                                },\n                                className: \"no-label\"\n                            },\n                            {\n                                dataValue: treatment.expenses,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                    _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\"),\n                                    treatment.expenses)),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: done,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                    done,\n                                    \" \",\n                                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"done\"))),\n                                className: \"hidden-xs\"\n                            },\n                            {\n                                dataValue: upcoming,\n                                component: (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", null,\n                                    upcoming,\n                                    \" \",\n                                    Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"upcoming\"))),\n                                className: \"hidden-xs\"\n                            }\n                        ]\n                    };\n                }), maxItemsOnLoad: 20 }),\n            this.selectedTreatment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Panel\"], { isOpen: !!this.selectedTreatment, type: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PanelType\"].medium, closeButtonAriaLabel: \"Close\", isLightDismiss: true, onDismiss: () => {\n                    this.selectedID = \"\";\n                }, onRenderNavigation: () => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], { className: \"panel-heading\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 20 }, this.selectedTreatment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: this.selectedTreatment.type, subText: `${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Expenses\")}: ${_modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\")}${this.selectedTreatment.expenses} ${Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"per unit\")}` })) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"p\", null))),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { span: 4, className: \"close\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"IconButton\"], { iconProps: { iconName: \"cancel\" }, onClick: () => {\n                                this.selectedID = \"\";\n                            } })))) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"treatment-editor\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Treatment Details\") },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"treatment-input\" },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Treatment title\"), value: this.selectedTreatment.type, onChange: (ev, val) => (_modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list[this.selectedIndex].type = val), disabled: !this.canEdit }),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Treatment expenses (per unit)\"), type: \"number\", value: this.selectedTreatment.expenses.toString(), onChange: (ev, val) => (_modules__WEBPACK_IMPORTED_MODULE_3__[\"treatments\"].list[this.selectedIndex].expenses = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(val)), prefix: _modules__WEBPACK_IMPORTED_MODULE_3__[\"setting\"].getSetting(\"currencySymbol\"), disabled: !this.canEdit })))))) : (\"\")));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], Treatments.prototype, \"selectedID\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], Treatments.prototype, \"canEdit\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], Treatments.prototype, \"selectedIndex\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], Treatments.prototype, \"selectedTreatment\", null);\nTreatments = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], Treatments);\n\n\n\n//# sourceURL=webpack:///./src/modules/treatments/components/page.treatments.tsx?");

/***/ })

}]);