function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./src/app/products/create-product/create-product.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/products/create-product/create-product.component.ts ***!
    \*********************************************************************/

  /*! exports provided: CreateProductComponent */

  /***/
  function srcAppProductsCreateProductCreateProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function () {
      return CreateProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products/products.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CreateProductComponent = /*#__PURE__*/function () {
      function CreateProductComponent(productService) {
        _classCallCheck(this, CreateProductComponent);

        this.productService = productService;
      }

      _createClass(CreateProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNewProduct",
        value: function addNewProduct(form) {
          console.log(form.value);
          var newProduct = {
            id: 10,
            categoryId: form.value.product_category,
            productName: form.value.product_name,
            description: form.value.description,
            rating: form.value.ratings,
            productImg: '',
            isAvailable: form.value.isAvailable,
            color: form.value.color,
            reviews: form.value.review
          };
          console.log(newProduct);
          this.productService.createProduct(newProduct).subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return CreateProductComponent;
    }();

    CreateProductComponent.??fac = function CreateProductComponent_Factory(t) {
      return new (t || CreateProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]));
    };

    CreateProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: CreateProductComponent,
      selectors: [["app-create-product"]],
      decls: 82,
      vars: 0,
      consts: [["novalidate", "", 1, "needs-validation", 3, "submit"], ["addProductForm", "ngForm"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["for", "validationCustom01"], ["type", "text", "id", "validationCustom01", "value", "Enter Product Name", "required", "", "name", "product_name", "ngModel", "", 1, "form-control"], [1, "valid-feedback"], ["for", "validationCustom02"], ["type", "text", "id", "validationCustom02", "value", "Enter Category Id ", "required", "", "name", "category_id", "ngModel", "", 1, "form-control"], ["id", "exampleFormControlTextarea1", "rows", "3", "name", "description", "ngModel", "", 1, "form-control"], ["id", "validationCustom04", "required", "", "name", "rating", "ngModel", "", 1, "custom-select"], ["selected", "", "disabled", "", "value", ""], ["type", "text", "id", "validationCustom02", "value", "Enter product color ", "name", "product_color", "ngModel", "", "required", "", 1, "form-control"], ["id", "validationCustom04", "required", "", "name", "isAvailable", "ngModel", "", 1, "custom-select"], ["type", "text", "id", "validationCustom02", "value", "Enter Product Price ", "required", "", "name", "product_price", "ngModel", "", 1, "form-control"], ["id", "validationCustom04", "required", "", "name", "Review", "ngModel", "", 1, "custom-select"], ["type", "submit", 1, "btn", "btn-primary"]],
      template: function CreateProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Create New Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function CreateProductComponent_Template_form_submit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](3);

            return ctx.addNewProduct(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Category Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](23, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Rating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Product Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](46, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](51, "Is Available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](62, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Product Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](65, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](67, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](68, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](70, "Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](71, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](80, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](81, "Submit form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2NyZWF0ZS1wcm9kdWN0L2NyZWF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CreateProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-product',
          templateUrl: './create-product.component.html',
          styleUrls: ['./create-product.component.css']
        }]
      }], function () {
        return [{
          type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/delete-product/delete-product.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/products/delete-product/delete-product.component.ts ***!
    \*********************************************************************/

  /*! exports provided: DeleteProductComponent */

  /***/
  function srcAppProductsDeleteProductDeleteProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteProductComponent", function () {
      return DeleteProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products/products.service.ts");

    var DeleteProductComponent = /*#__PURE__*/function () {
      function DeleteProductComponent(activatedroute, produtService) {
        _classCallCheck(this, DeleteProductComponent);

        this.activatedroute = activatedroute;
        this.produtService = produtService;
        this.productdelete = 0;
      }

      _createClass(DeleteProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.activatedroute.params.subscribe(function (data) {
            _this.productdelete = data.id;

            _this.produtService.deleteProduct(_this.productdelete).subscribe(function (deleteProductData) {
              _this.productDeleted = deleteProductData;
              console.log("deleteData=" + _this.productDeleted);
            });
          });
        }
      }]);

      return DeleteProductComponent;
    }();

    DeleteProductComponent.??fac = function DeleteProductComponent_Factory(t) {
      return new (t || DeleteProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    DeleteProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: DeleteProductComponent,
      selectors: [["app-delete-product"]],
      decls: 2,
      vars: 1,
      template: function DeleteProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" The product Id = ", ctx.productDeleted, " is deleted ");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL2RlbGV0ZS1wcm9kdWN0L2RlbGV0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DeleteProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-delete-product',
          templateUrl: './delete-product.component.html',
          styleUrls: ['./delete-product.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/products-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsRoutingModule */

  /***/
  function srcAppProductsProductsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function () {
      return ProductsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-product/create-product.component */
    "./src/app/products/create-product/create-product.component.ts");
    /* harmony import */


    var _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./delete-product/delete-product.component */
    "./src/app/products/delete-product/delete-product.component.ts");
    /* harmony import */


    var _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./update-product/update-product.component */
    "./src/app/products/update-product/update-product.component.ts");
    /* harmony import */


    var _view_all_products_by_date_view_all_products_by_date_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-all-products-by-date/view-all-products-by-date.component */
    "./src/app/products/view-all-products-by-date/view-all-products-by-date.component.ts");
    /* harmony import */


    var _view_all_products_view_all_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-all-products/view-all-products.component */
    "./src/app/products/view-all-products/view-all-products.component.ts");
    /* harmony import */


    var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./view-product/view-product.component */
    "./src/app/products/view-product/view-product.component.ts");
    /* harmony import */


    var _viewallproductbycategory_viewallproductbycategory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./viewallproductbycategory/viewallproductbycategory.component */
    "./src/app/products/viewallproductbycategory/viewallproductbycategory.component.ts");

    var routes = [{
      path: '',
      component: _view_all_products_view_all_products_component__WEBPACK_IMPORTED_MODULE_6__["ViewAllProductsComponent"]
    }, {
      path: 'create-product',
      component: _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_2__["CreateProductComponent"]
    }, {
      path: 'list-products',
      component: _view_all_products_view_all_products_component__WEBPACK_IMPORTED_MODULE_6__["ViewAllProductsComponent"]
    }, {
      path: 'category/:id',
      component: _viewallproductbycategory_viewallproductbycategory_component__WEBPACK_IMPORTED_MODULE_8__["ViewallproductbycategoryComponent"]
    }, {
      path: 'search-date',
      component: _view_all_products_by_date_view_all_products_by_date_component__WEBPACK_IMPORTED_MODULE_5__["ViewAllProductsByDateComponent"]
    }, {
      path: 'update-product/:id',
      component: _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProductComponent"]
    }, {
      path: 'delete-product/:id',
      component: _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_3__["DeleteProductComponent"]
    }, {
      path: 'view-product/:id',
      component: _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_7__["ViewProductComponent"]
    }];

    var ProductsRoutingModule = function ProductsRoutingModule() {
      _classCallCheck(this, ProductsRoutingModule);
    };

    ProductsRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ProductsRoutingModule
    });
    ProductsRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ProductsRoutingModule_Factory(t) {
        return new (t || ProductsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProductsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.??fac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)();
    };

    ProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 2,
      vars: 0,
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Welcome product feature module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsModule", function () {
      return ProductsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products-routing.module */
    "./src/app/products/products-routing.module.ts");
    /* harmony import */


    var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-product/create-product.component */
    "./src/app/products/create-product/create-product.component.ts");
    /* harmony import */


    var _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./view-product/view-product.component */
    "./src/app/products/view-product/view-product.component.ts");
    /* harmony import */


    var _view_all_products_view_all_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-all-products/view-all-products.component */
    "./src/app/products/view-all-products/view-all-products.component.ts");
    /* harmony import */


    var _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./update-product/update-product.component */
    "./src/app/products/update-product/update-product.component.ts");
    /* harmony import */


    var _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./delete-product/delete-product.component */
    "./src/app/products/delete-product/delete-product.component.ts");
    /* harmony import */


    var _view_all_products_by_date_view_all_products_by_date_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./view-all-products-by-date/view-all-products-by-date.component */
    "./src/app/products/view-all-products-by-date/view-all-products-by-date.component.ts");
    /* harmony import */


    var _viewallproductbycategory_viewallproductbycategory_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./viewallproductbycategory/viewallproductbycategory.component */
    "./src/app/products/viewallproductbycategory/viewallproductbycategory.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ProductsModule = function ProductsModule() {
      _classCallCheck(this, ProductsModule);
    };

    ProductsModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: ProductsModule
    });
    ProductsModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function ProductsModule_Factory(t) {
        return new (t || ProductsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](ProductsModule, {
        declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_4__["CreateProductComponent"], _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_5__["ViewProductComponent"], _view_all_products_view_all_products_component__WEBPACK_IMPORTED_MODULE_6__["ViewAllProductsComponent"], _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_7__["UpdateProductComponent"], _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_8__["DeleteProductComponent"], _view_all_products_by_date_view_all_products_by_date_component__WEBPACK_IMPORTED_MODULE_9__["ViewAllProductsByDateComponent"], _viewallproductbycategory_viewallproductbycategory_component__WEBPACK_IMPORTED_MODULE_10__["ViewallproductbycategoryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _create_product_create_product_component__WEBPACK_IMPORTED_MODULE_4__["CreateProductComponent"], _view_product_view_product_component__WEBPACK_IMPORTED_MODULE_5__["ViewProductComponent"], _view_all_products_view_all_products_component__WEBPACK_IMPORTED_MODULE_6__["ViewAllProductsComponent"], _update_product_update_product_component__WEBPACK_IMPORTED_MODULE_7__["UpdateProductComponent"], _delete_product_delete_product_component__WEBPACK_IMPORTED_MODULE_8__["DeleteProductComponent"], _view_all_products_by_date_view_all_products_by_date_component__WEBPACK_IMPORTED_MODULE_9__["ViewAllProductsByDateComponent"], _viewallproductbycategory_viewallproductbycategory_component__WEBPACK_IMPORTED_MODULE_10__["ViewallproductbycategoryComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/update-product/update-product.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/products/update-product/update-product.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UpdateProductComponent */

  /***/
  function srcAppProductsUpdateProductUpdateProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProductComponent", function () {
      return UpdateProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products/products.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UpdateProductComponent = /*#__PURE__*/function () {
      function UpdateProductComponent(activatedroute, productsService) {
        _classCallCheck(this, UpdateProductComponent);

        this.activatedroute = activatedroute;
        this.productsService = productsService;
      }

      _createClass(UpdateProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.activatedroute.params.subscribe(function (data) {
            _this2.prodId = data.id;
            console.log("this id=" + _this2.prodId);
          });
        }
      }, {
        key: "updateNewProduct",
        value: function updateNewProduct(formdata) {}
      }]);

      return UpdateProductComponent;
    }();

    UpdateProductComponent.??fac = function UpdateProductComponent_Factory(t) {
      return new (t || UpdateProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    UpdateProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UpdateProductComponent,
      selectors: [["app-update-product"]],
      decls: 80,
      vars: 0,
      consts: [["novalidate", "", 1, "needs-validation", 3, "submit"], ["updateProductForm", "ngForm"], [1, "form-row"], [1, "col-md-6", "mb-3"], ["for", "validationCustom01"], ["type", "text", "id", "validationCustom01", "name", "product_name", "ngModel", "", 1, "form-control"], [1, "valid-feedback"], ["for", "validationCustom02"], ["type", "text", "id", "validationCustom02", "name", "category_id", "ngModel", "", 1, "form-control"], ["id", "exampleFormControlTextarea1", "rows", "3", "name", "description", "ngModel", "", 1, "form-control"], ["id", "validationCustom04", "name", "rating", "ngModel", "", 1, "custom-select"], ["selected", "", "disabled", "", "value", ""], ["type", "text", "id", "validationCustom02", "name", "product_color", "ngModel", "", "required", "", 1, "form-control"], ["id", "validationCustom04", "name", "isAvailable", "ngModel", "", 1, "custom-select"], ["type", "text", "id", "validationCustom02", "name", "product_price", "ngModel", "", 1, "form-control"], ["id", "validationCustom04", "name", "Review", "ngModel", "", 1, "custom-select"], ["type", "submit", 1, "btn", "btn-primary"]],
      template: function UpdateProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function UpdateProductComponent_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r1);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](1);

            return ctx.updateNewProduct(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Product Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Category Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Rating");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, "Product Color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](46, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Is Available ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Product Price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](63, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](64, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](65, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](66, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Choose...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](73, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](74, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](75, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](76, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](77, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](79, "Submit form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3VwZGF0ZS1wcm9kdWN0L3VwZGF0ZS1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-product',
          templateUrl: './update-product.component.html',
          styleUrls: ['./update-product.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/view-all-products-by-date/view-all-products-by-date.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/products/view-all-products-by-date/view-all-products-by-date.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ViewAllProductsByDateComponent */

  /***/
  function srcAppProductsViewAllProductsByDateViewAllProductsByDateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewAllProductsByDateComponent", function () {
      return ViewAllProductsByDateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ViewAllProductsByDateComponent = /*#__PURE__*/function () {
      function ViewAllProductsByDateComponent(activatedroute) {
        _classCallCheck(this, ViewAllProductsByDateComponent);

        this.activatedroute = activatedroute;
        this.searchdate = '';
      }

      _createClass(ViewAllProductsByDateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.activatedroute.queryParams.subscribe(function (data) {
            _this3.searchdate = data.date;
          });
        }
      }]);

      return ViewAllProductsByDateComponent;
    }();

    ViewAllProductsByDateComponent.??fac = function ViewAllProductsByDateComponent_Factory(t) {
      return new (t || ViewAllProductsByDateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ViewAllProductsByDateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ViewAllProductsByDateComponent,
      selectors: [["app-view-all-products-by-date"]],
      decls: 4,
      vars: 1,
      template: function ViewAllProductsByDateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "view-all-products-by-date works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Search Product by Date:", ctx.searchdate, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3ZpZXctYWxsLXByb2R1Y3RzLWJ5LWRhdGUvdmlldy1hbGwtcHJvZHVjdHMtYnktZGF0ZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewAllProductsByDateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-all-products-by-date',
          templateUrl: './view-all-products-by-date.component.html',
          styleUrls: ['./view-all-products-by-date.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/view-all-products/view-all-products.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/products/view-all-products/view-all-products.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ViewAllProductsComponent */

  /***/
  function srcAppProductsViewAllProductsViewAllProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewAllProductsComponent", function () {
      return ViewAllProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewAllProductsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var prod_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", prod_r1.productImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "products/view-product/", prod_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prod_r1.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$", prod_r1.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prod_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prod_r1.rating);
      }
    }

    var ViewAllProductsComponent = /*#__PURE__*/function () {
      function ViewAllProductsComponent(productService) {
        _classCallCheck(this, ViewAllProductsComponent);

        this.productService = productService;
      }

      _createClass(ViewAllProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.productService.viewAllProduct().subscribe(function (data) {
            _this4.productList = data;
          });
        }
      }]);

      return ViewAllProductsComponent;
    }();

    ViewAllProductsComponent.??fac = function ViewAllProductsComponent_Factory(t) {
      return new (t || ViewAllProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]));
    };

    ViewAllProductsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ViewAllProductsComponent,
      selectors: [["app-view-all-products"]],
      decls: 2,
      vars: 1,
      consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "card", "h-100"], ["href", "#"], ["alt", "", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [3, "href"], [1, "card-text"], [1, "card-footer"], [1, "text-muted"]],
      template: function ViewAllProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ViewAllProductsComponent_div_1_Template, 15, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3ZpZXctYWxsLXByb2R1Y3RzL3ZpZXctYWxsLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewAllProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-all-products',
          templateUrl: './view-all-products.component.html',
          styleUrls: ['./view-all-products.component.css']
        }]
      }], function () {
        return [{
          type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/view-product/view-product.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/products/view-product/view-product.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ViewProductComponent */

  /***/
  function srcAppProductsViewProductViewProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProductComponent", function () {
      return ViewProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewProductComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h3", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Edit Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, " | ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Delete Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", product_r1.productImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "products/update-product/", product_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("href", "products/delete-product/", product_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$", product_r1.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](product_r1.rating);
      }
    }

    var ViewProductComponent = /*#__PURE__*/function () {
      function ViewProductComponent(activateroute, productService) {
        _classCallCheck(this, ViewProductComponent);

        this.activateroute = activateroute;
        this.productService = productService;
      }

      _createClass(ViewProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.activateroute.params.subscribe(function (data) {
            _this5.categoryId = data.id;

            _this5.productService.viewProduct(_this5.categoryId).subscribe(function (proddata) {
              _this5.productList = proddata;
            });
          });
        }
      }]);

      return ViewProductComponent;
    }();

    ViewProductComponent.??fac = function ViewProductComponent_Factory(t) {
      return new (t || ViewProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    ViewProductComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ViewProductComponent,
      selectors: [["app-view-product"]],
      decls: 22,
      vars: 1,
      consts: [["class", "card mt-4", 4, "ngFor", "ngForOf"], [1, "card", "card-outline-secondary", "my-4"], [1, "card-header"], [1, "card-body"], [1, "text-muted"], ["href", "#", 1, "btn", "btn-success"], [1, "card", "mt-4"], ["alt", "", 1, "col-lg-4", "col-md-6", "mb-4", 3, "src"], [1, "card-title"], [3, "href"], [1, "card-text"], [1, "text-warning"]],
      template: function ViewProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](0, ViewProductComponent_div_0_Template, 16, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, " Product Reviews ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Posted by Anonymous on 3/1/17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Posted by Anonymous on 3/1/17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "small", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Posted by Anonymous on 3/1/17");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Leave a Review");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3ZpZXctcHJvZHVjdC92aWV3LXByb2R1Y3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-product',
          templateUrl: './view-product.component.html',
          styleUrls: ['./view-product.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/viewallproductbycategory/viewallproductbycategory.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/products/viewallproductbycategory/viewallproductbycategory.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ViewallproductbycategoryComponent */

  /***/
  function srcAppProductsViewallproductbycategoryViewallproductbycategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewallproductbycategoryComponent", function () {
      return ViewallproductbycategoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products.service */
    "./src/app/products/products.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewallproductbycategoryComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "small", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var prod_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", prod_r1.productImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "products/", prod_r1.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prod_r1.productName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("$", prod_r1.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prod_r1.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](prod_r1.rating);
      }
    }

    var ViewallproductbycategoryComponent = /*#__PURE__*/function () {
      function ViewallproductbycategoryComponent(activatedrouter, productService) {
        _classCallCheck(this, ViewallproductbycategoryComponent);

        this.activatedrouter = activatedrouter;
        this.productService = productService;
      }

      _createClass(ViewallproductbycategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.activatedrouter.params.subscribe(function (data) {
            _this6.categorysearch = data.id;

            _this6.productService.searchCategoryProduct(_this6.categorysearch).subscribe(function (searchdata) {
              console.log(searchdata);
              _this6.productList = searchdata;
            });
          });
        }
      }]);

      return ViewallproductbycategoryComponent;
    }();

    ViewallproductbycategoryComponent.??fac = function ViewallproductbycategoryComponent_Factory(t) {
      return new (t || ViewallproductbycategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    ViewallproductbycategoryComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ViewallproductbycategoryComponent,
      selectors: [["app-viewallproductbycategory"]],
      decls: 2,
      vars: 1,
      consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mb-4", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "card", "h-100"], ["href", "#"], ["alt", "", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [3, "routerLink"], [1, "card-text"], [1, "card-footer"], [1, "text-muted"]],
      template: function ViewallproductbycategoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, ViewallproductbycategoryComponent_div_1_Template, 15, 6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.productList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3ZpZXdhbGxwcm9kdWN0YnljYXRlZ29yeS92aWV3YWxscHJvZHVjdGJ5Y2F0ZWdvcnkuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ViewallproductbycategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-viewallproductbycategory',
          templateUrl: './viewallproductbycategory.component.html',
          styleUrls: ['./viewallproductbycategory.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map