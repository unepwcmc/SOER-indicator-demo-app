(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b["indicator_graphic.hbs"]=a(function(a,b,c,d,e){return this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{},'<h1>IndicatorGraphic View</h1>\n<div id="container"></div>\n'}),b["main_graphics.hbs"]=a(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||a.helpers,e=e||{};var f="",g,h,i=c.helperMissing,j=this.escapeExpression;return f+="<h1>Graphics View</h1>\n",h={hash:{indicatorName:"recycling_rates"},data:e},f+=j((g=c.subView,g?g.call(b,"IndicatorGraphicView",h):i.call(b,"subView","IndicatorGraphicView",h)))+"\n",f})})()

;
// Generated by CoffeeScript 1.6.2
(function() {
  var _base, _base1, _base2, _base3, _ref, _ref1, _ref2,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (_base = window.Backbone).Models || (_base.Models = {});

  window.Backbone.Models.Indicator = (function(_super) {
    __extends(Indicator, _super);

    function Indicator() {
      _ref = Indicator.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Indicator.prototype.defaults = {
      name: '',
      metadata: null,
      data: null
    };

    Indicator.prototype.fetchAllData = function(successCallback) {
      var _this = this;

      return this.getMetadata(function(metadata) {
        _this.set('metadata', metadata);
        return _this.getData(function(data) {
          _this.set('data', data);
          return successCallback();
        });
      });
    };

    Indicator.prototype.getMetadata = function(successCallback) {
      return $.ajax({
        url: "json/indicators/" + (this.get('name')) + "/metadata.json"
      }).done(successCallback);
    };

    Indicator.prototype.getData = function(successCallback) {
      return $.ajax({
        url: "json/indicators/" + (this.get('name')) + ".json"
      }).done(successCallback);
    };

    Indicator.prototype.getCategories = function() {
      var categories, entry, xAxisField, _i, _len, _ref1;

      xAxisField = this.get('metadata').axes.x.field;
      categories = [];
      _ref1 = this.get('data');
      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
        entry = _ref1[_i];
        categories.push(entry[xAxisField]);
      }
      return categories;
    };

    Indicator.prototype.getSeries = function() {};

    return Indicator;

  })(Backbone.Model);

  window.Backbone || (window.Backbone = {});

  (_base1 = window.Backbone).Views || (_base1.Views = {});

  Backbone.Views.IndicatorGraphicView = (function(_super) {
    __extends(IndicatorGraphicView, _super);

    function IndicatorGraphicView() {
      this.render = __bind(this.render, this);      _ref1 = IndicatorGraphicView.__super__.constructor.apply(this, arguments);
      return _ref1;
    }

    IndicatorGraphicView.prototype.template = Handlebars.templates['indicator_graphic.hbs'];

    IndicatorGraphicView.prototype.initialize = function(options) {
      this.indicator = new Backbone.Models.Indicator({
        name: options.indicatorName
      });
      return this.indicator.fetchAllData(this.render);
    };

    IndicatorGraphicView.prototype.render = function() {
      this.$el.html(this.template());
      this.drawGraph();
      return this;
    };

    IndicatorGraphicView.prototype.drawGraph = function() {
      if (this.indicator.get('metadata') == null) {
        return;
      }
      return this.$el.find("#container").highcharts({
        chart: {
          type: "column"
        },
        title: {
          text: "Stacked column chart"
        },
        xAxis: {
          categories: this.indicator.getCategories()
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total fruit consumption"
          },
          stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
              color: (Highcharts.theme && Highcharts.theme.textColor) || "gray"
            }
          }
        },
        legend: {
          align: "right",
          x: -100,
          verticalAlign: "top",
          y: 20,
          floating: true,
          backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || "white",
          borderColor: "#CCC",
          borderWidth: 1,
          shadow: false
        },
        tooltip: {
          formatter: function() {
            return "<b>" + this.x + "</b><br/>" + this.series.name + ": " + this.y + "<br/>" + "Total: " + this.point.stackTotal;
          }
        },
        plotOptions: {
          column: {
            stacking: "normal",
            dataLabels: {
              enabled: true,
              color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || "white"
            }
          }
        },
        series: this.indicator.getSeries()
      });
    };

    IndicatorGraphicView.prototype.onClose = function() {};

    return IndicatorGraphicView;

  })(Backbone.View);

  window.Backbone || (window.Backbone = {});

  (_base2 = window.Backbone).Controllers || (_base2.Controllers = {});

  Backbone.Controllers.MainController = (function(_super) {
    __extends(MainController, _super);

    function MainController() {
      this.graphics = __bind(this.graphics, this);      this.mainRegion = new Backbone.Diorama.ManagedRegion();
      $('body').append(this.mainRegion.$el);
      this.graphics();
    }

    MainController.prototype.graphics = function() {
      var graphicsView;

      graphicsView = new Backbone.Views.MainGraphicsView();
      this.mainRegion.showView(graphicsView);
      /*
        @changeStateOn maps events published by other objects to
        controller states
      */

      return this.changeStateOn();
    };

    return MainController;

  })(Backbone.Diorama.Controller);

  window.Backbone || (window.Backbone = {});

  (_base3 = window.Backbone).Views || (_base3.Views = {});

  Backbone.Views.MainGraphicsView = (function(_super) {
    __extends(MainGraphicsView, _super);

    function MainGraphicsView() {
      _ref2 = MainGraphicsView.__super__.constructor.apply(this, arguments);
      return _ref2;
    }

    MainGraphicsView.prototype.template = Handlebars.templates['main_graphics.hbs'];

    MainGraphicsView.prototype.initialize = function(options) {
      return this.render();
    };

    MainGraphicsView.prototype.render = function() {
      this.closeSubViews();
      this.$el.html(this.template());
      this.renderSubViews();
      return this;
    };

    MainGraphicsView.prototype.onClose = function() {
      return this.closeSubViews();
    };

    return MainGraphicsView;

  })(Backbone.Diorama.NestingView);

}).call(this);
